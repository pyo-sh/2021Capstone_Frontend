import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	TouchableOpacity,
	Alert
} from "react-native";
import Loading from "@src/components/Loading";
import Star from "@src/components/icons/Star";
import { readRecipe } from "@src/apis/recipes";
import { Actions } from "react-native-router-flux";
import { Color, DefaultFont_KR } from "@src/Constant";
import { createBookmark, readIsBookmark } from "@src/apis/recipes";
import RecipeProc from "@src/components/recipe/RecipeProc";
import { useSelector } from "react-redux";

const makeTime = string => {
	if (!string) return "";
	const time = string.split(":");
	const hour = time[0] ? `${time[0]}시간` : "";
	const minute = time[1] ? ` ${time[1]}분` : "";
	const second = time[2] ? ` ${time[2]}초` : "";
	return `${hour}${minute}${second}`;
};

const RecipeInfo = ({ recipeNum }) => {
	const [isBookmark, setIsBookmark] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [pressLoading, setPressLoading] = useState(false);
	const [rcp, setRcp] = useState({});
	const uid = useSelector(state => state.user.uid);

	useEffect(() => {
		// API 요청 이후 isLoading false
		if (!recipeNum) Actions.recipes();
		readRecipe({ recipeNum })
			.then(data => {
				setIsLoading(false);
				setRcp(data);
			})
			.catch(() => {
				Actions.recipes();
			});

		const readFirst = async () => {
			const data = await readIsBookmark({ userNum: uid, recipeNum: recipeNum });
			setIsBookmark(data.isBookmark);
		};
		readFirst();
	}, []);

	const onPress = () => {
		setPressLoading(true);

		if (isBookmark) {
			deleteBookmark({ userNum: item.userNum, bookmarkOrnu: item.bookmarkOrnu })
				.then(() => {
					setPressLoading(false);
					setIsBookmark(!isBookmark);
				})
				.catch(e => {
					setPressLoading(false);
					Alert.alert("삭제 오류", "다시 요청해주세요");
				});
		} else {
			createBookmark({ userNum: uid, recipeNum: recipeNum })
				.then(result => {
					setPressLoading(false);
					setIsBookmark(!isBookmark);
				})
				.catch(e => {
					setPressLoading(false);
					Alert.alert("즐겨찾기 등록 실패", "다시 시도해주세요");
				});
		}
	};

	if (isLoading) return <Loading />;
	return (
		<SafeAreaView style={styleSheet.wrapper}>
			<ScrollView>
				<Image style={styleSheet.image} source={{ uri: rcp?.picPath }} />
				<View style={styleSheet.pad}>
					<TouchableOpacity
						disabled={pressLoading}
						style={styleSheet.bookmark}
						onPress={onPress}
					>
						<Star color={Color.white} width={15} />
					</TouchableOpacity>
					<Text style={styleSheet.title}>{rcp?.title ?? ""}</Text>
					<Text style={styleSheet.subTitle}>소요시간: {makeTime(rcp?.reqTime)}</Text>
					<Text style={styleSheet.subTitle}>인분: {rcp?.serve}인분</Text>
					<View style={styleSheet.ingrsContainer}>
						<Text style={styleSheet.ingrSubTitle}>재료:</Text>
						<Text style={styleSheet.ingrs}>
							{rcp?.recipeIngrs
								?.map(ingr => {
									const name = ingr?.ingrName ?? "";
									const unit = ingr?.quantityUnit ? ` ${ingr.quantityUnit}` : "";
									return `${name} ${unit}`;
								})
								.join(", ")}
						</Text>
					</View>
					<View style={styleSheet.contents}>
						{rcp?.recipeProcs?.map((proc, index) => {
							return (
								<RecipeProc
									key={proc?.procOrnu}
									index={index}
									picPath={proc?.picPath}
									explan={proc?.explan}
								/>
							);
						})}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	image: {
		padding: 10,
		width: "100%",
		aspectRatio: 1.5
	},
	pad: {
		padding: 25,
		backgroundColor: Color.white
	},
	title: {
		marginBottom: 10,
		...DefaultFont_KR,
		fontSize: 20,
		color: Color.primary_1
	},
	subTitle: {
		...DefaultFont_KR,
		fontSize: 16,
		marginBottom: 5
	},
	ingrsContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start"
	},
	ingrSubTitle: {
		width: 40,
		...DefaultFont_KR,
		fontSize: 16,
		marginRight: 5,
		flexBasis: "auto",
		flexGrow: 0,
		flexShrink: 0
	},
	ingrs: {
		flexShrink: 1
	},
	contents: {
		marginTop: 40
	},
	bookmark: {
		position: "absolute",
		top: -21,
		right: 20,
		width: 43,
		height: 43,
		backgroundColor: "#FFEE81",
		borderRadius: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 1,
		shadowRadius: 5,
		elevation: 5
	}
});

export default RecipeInfo;
