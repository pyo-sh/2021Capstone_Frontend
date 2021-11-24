import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";

const RecipeProc = ({ picPath, explan, index }) => {
	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>STEP {index + 1}</Text>
			<Text style={styleSheet.explain}>{explan}</Text>
			<View style={styleSheet.imageWrapper}>
				{picPath ? (
					<Image
						style={styleSheet.image}
						source={{
							uri: picPath ?? "https://avatars.githubusercontent.com/u/55688122?v=4"
						}}
					/>
				) : (
					<></>
				)}
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		marginVertical: 10
	},
	title: {
		...DefaultFont_KR,
		fontSize: 20,
		color: Color.primary_1,
		marginBottom: 5
	},
	imageWrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		width: "100%",
		aspectRatio: 1.5,
		borderRadius: 10
	},
	explain: {
		...DefaultFont_KR,
		marginBottom: 5,
		lineHeight: 20
	}
});

export default RecipeProc;
