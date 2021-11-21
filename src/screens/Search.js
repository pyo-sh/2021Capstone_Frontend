import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { Color } from "@src/Constant";
import SearchInput from "@src/components/search/SearchInput";
import SearchedFood from "@src/components/search/SearchedFood";
import SearchCategories from "@src/components/search/SearchCategories";
import { searchPresetIngrs } from "@src/apis/ingrs";

const Search = () => {
	const [text, setText] = useState("");
	const [schedule, setSchedule] = useState(null);
	const [foods, setFoods] = useState([]);
	const [selectedType, setSelectedType] = useState("");

	const onChangeInputs = async value => {
		// 사용자에게 보여지는 Text는 바로 변경
		setText(value);

		// Debouncing
		// 이전에 요청된 스케쥴(검색 API)가 있다면 취소
		if (schedule) {
			clearTimeout(schedule);
		}
		// 0.8초 이후에 검색을 실행합니다.
		const newschedule = setTimeout(async () => {
			try {
				const data = await searchPresetIngrs({ keyword: value });
				setFoods(data);
				setSchedule(null);
				setSelectedType("");
			} catch (e) {
				console.error("error", e);
			}
		}, 800);
		setSchedule(newschedule);
	};

	const onClickCategory = useCallback(
		type => async () => {
			try {
				const data = await searchPresetIngrs({ type });
				setText("");
				setSelectedType(type);
				setFoods(data);
			} catch (e) {
				console.error("error", e);
			}
		},
		[]
	);

	useEffect(() => {
		try {
			searchPresetIngrs().then(data => {
				setFoods(data);
				setText("");
				setSelectedType("");
			});
		} catch (e) {
			console.error("error", e);
		}
	}, []);

	return (
		<View style={{ height: "100%" }}>
			<View style={styleSheet.topSide}>
				<SearchInput
					text={text}
					onChangeText={onChangeInputs}
					placeholder={"재료 이름을 검색하세요"}
					onSubmitEditing={() => console.log(text)}
				/>
			</View>
			<SearchCategories type={selectedType} onClickCategory={onClickCategory} />
			<View style={styleSheet.content}>
				<Text style={styleSheet.info}>
					- - {text ? `' ${text} '로 검색한 결과` : "검색 결과"} - - - - - - - - - - - - -
					- -
				</Text>
				<FlatList
					style={styleSheet.searched}
					data={foods}
					keyExtractor={item => item.presetIngrNum}
					renderItem={({ item }) => <SearchedFood data={item} />}
				/>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	topSide: {
		width: "100%",
		height: 100,
		paddingVertical: 17,
		paddingHorizontal: 30,

		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.white
	},
	categories: {
		width: "100%",
		height: 80,
		padding: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.background
	},
	content: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		flex: 1,
		backgroundColor: Color.white
	},
	info: {
		color: Color.primary_3,
		marginBottom: 10
	},
	searched: {
		paddingHorizontal: 20
	}
});

export default Search;
