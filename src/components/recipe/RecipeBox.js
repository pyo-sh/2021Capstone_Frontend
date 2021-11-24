import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Color, DefaultFont_KR } from "@src/Constant";

const RecipeBox = ({ recipeNum, title, picPath }) => {
	return (
		<TouchableOpacity
			style={styleSheet.wrapper}
			onPress={() => {
				Actions.recipeinfo({ recipeNum });
			}}
		>
			<View style={styleSheet.imageWrapper}>
				<Image
					style={styleSheet.image}
					source={{
						uri: picPath ?? "https://avatars.githubusercontent.com/u/55688122?v=4"
					}}
				/>
			</View>
			<View style={styleSheet.contentWrapper}>
				<Text style={styleSheet.title}>{title ?? ""}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		margin: 10
	},
	image: {
		width: 155,
		height: 155,
		backgroundColor: Color.primary_4,
		borderRadius: 15
	},
	imageWrapper: {
		width: 155,
		height: 155,
		overflow: "hidden",
		borderRadius: 15
	},
	contentWrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start"
	},
	title: {
		...DefaultFont_KR,
		marginTop: 5,
		fontSize: 17,
		fontWeight: "bold",
		color: Color.primary_1
	},
	ingrs: {
		marginTop: 5,
		...DefaultFont_KR,
		color: "#394847"
	}
});

export default RecipeBox;
