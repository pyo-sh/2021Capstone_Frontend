import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";
import Star from "@src/components/icons/Star";
import RightArrowIcon from "@src/components/icons/RightArrowIcon";
import { readBookmarks, deleteBookmark } from "@src/apis/recipes";
import { Actions } from "react-native-router-flux";
import { useSelector } from "react-redux";

const Bookmark = () => {
	const [bookmarks, setBookmarks] = useState([]);
	const uid = useSelector(state => state.user.uid);

	useEffect(() => {
		// 맨처음 한번만 실행됨
		const readFirst = async () => {
			const data = await readBookmarks(uid);
			setBookmarks(data);
		};
		readFirst();
	}, []);

	const onPress = async item => {
		deleteBookmark({ userNum: item.userNum, bookmarkOrnu: item.bookmarkOrnu })
			.then(() => {
				setBookmarks(prev => prev.filter(p => p.bookmarkOrnu !== item.bookmarkOrnu));
			})
			.catch(e => {
				Alert.alert("삭제 오류", "다시 요청해주세요");
			});
	};

	return (
		<View style={{ flex: 1, backgroundColor: Color.white }}>
			<FlatList
				data={bookmarks}
				keyExtractor={item => item?.bookmarkOrnu ?? ""}
				renderItem={({ item }) => (
					<View style={styleSheet.item}>
						<TouchableOpacity onPress={() => onPress(item)}>
							<Star color={Color.primary_2} width={15} />
						</TouchableOpacity>
						<Text style={styleSheet.title}>{item.recipe.title}</Text>
						<TouchableOpacity
							onPress={() => {
								Actions.recipeinfo({ recipeNum: item.recipe.recipeNum });
							}}
						>
							<RightArrowIcon color={Color.primary_1} width={2} />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	item: {
		paddingHorizontal: 15,
		paddingVertical: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: Color.primary_3,
		backgroundColor: Color.white,
		padding: 5
	},
	title: {
		flex: 1,
		paddingHorizontal: 30,
		...DefaultFont_KR,
		marginTop: 5,
		fontSize: 20,
		fontWeight: "bold",
		color: Color.primary_1
	}
});

export default Bookmark;
