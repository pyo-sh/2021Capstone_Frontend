import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";

const FormName = ({ name, setName }) => {
	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>식자재 명</Text>
			<TextInput
				style={styleSheet.input}
				value={name}
				onChangeText={value => setName(value)}
				placeholder={"이름 입력"}
			/>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		marginBottom: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		...DefaultFont_KR,
		fontSize: 15,
		marginRight: 16
	},
	input: {
		flex: 1,
		height: 40,
		paddingHorizontal: 15,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: Color.background
	}
});

export default FormName;
