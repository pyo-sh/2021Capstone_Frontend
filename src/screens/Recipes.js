import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Color } from "@src/Constant";
import { searchRecipes } from "@src/apis/recipes";
import { readImnIngrs } from "@src/apis/ingrs";
import SearchInput from "@src/components/search/SearchInput";
import ImnIngrItem from "@src/components/recipe/ImnIngrItem";
import RecipeBox from "@src/components/recipe/RecipeBox";
import { useSelector } from "react-redux";
import Loading from "@src/components/Loading";

const Recipes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [imnIngrs, setImnIngrs] = useState([]);
	const [ingredient, setIngredient] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [schedule, setSchedule] = useState(null);
	const uid = useSelector(state => state.user.uid);

	useEffect(() => {
		// 맨처음 한번만 실행됨
		const readFirst = async () => {
			const data = await readImnIngrs(uid);
			const recipeData = await searchRecipes();
			setImnIngrs(data.imnIngrs);
			setRecipes(recipeData);
			setIsLoading(false);
		};
		readFirst();
	}, []);

	const requestData = value => async () => {
		try {
			const data = await searchRecipes({ keyword: value });
			setRecipes(data);
			setSchedule(null);
		} catch (e) {
			console.error("error", e);
		}
	};

	const searchData = value => {
		if (!value) return;
		setIngredient(value);
		const onChangeInputs = () => {
			// Debouncing
			// 이전에 요청된 스케쥴(검색 API)가 있다면 취소
			if (schedule) {
				clearTimeout(schedule);
			}
			// 0.8초 이후에 검색을 실행합니다.
			const newschedule = setTimeout(requestData(value), 700);
			setSchedule(newschedule);
		};
		onChangeInputs();
	};

	if (isLoading) return <Loading />;
	return (
		<View style={{ height: "100%", backgroundColor: Color.background }}>
			<View style={styleSheet.topSide}>
				<Text style={styleSheet.topTitle}>
					- - 유통기한 임박 재료 - - - - - - - - - - - - - - -
				</Text>
				<FlatList
					style={styleSheet.imnIngrList}
					data={imnIngrs}
					renderItem={({ item }) => {
						const { ingrName } = item;
						return (
							<ImnIngrItem
								key={`ImnIngrs-${item?.ingrOrnu}`}
								isSelected={ingredient === ingrName}
								ingrName={ingrName}
								setIngredient={() => {
									requestData(ingrName)();
									setIngredient(ingrName);
								}}
							/>
						);
					}}
					keyExtractor={item => item.presetIngrNum}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
				/>
			</View>
			<View style={styleSheet.content}>
				<SearchInput
					text={ingredient}
					onChangeText={searchData}
					placeholder={"재료 이름을 검색하세요"}
				/>
				<Text style={styleSheet.info}>
					- - {ingredient ? `' ${ingredient} '로 검색한 결과` : "검색 결과"} - - - - - - -
					- - - - - - - -
				</Text>
				<FlatList
					data={recipes}
					numColumns={2}
					renderItem={({ item }) => {
						return (
							<RecipeBox
								key={item?.recipeNum ?? "RecipesBox"}
								recipeNum={item?.recipeNum}
								title={item?.title}
								picPath={item?.picPath}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	topSide: {
		height: 100,
		paddingVertical: 20,
		paddingHorizontal: 15,
		marginBottom: 20,
		backgroundColor: Color.white
	},
	topTitle: {
		color: Color.primary_4
	},
	imnIngrList: {
		marginTop: 10
	},
	content: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 20,
		backgroundColor: Color.white
	},
	info: {
		paddingVertical: 20,
		color: Color.primary_1
	}
});

export default Recipes;
