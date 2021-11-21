import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RadioBtn from "@src/components/add-ingr/RadioBtn";
import { Color, DefaultFont_KR } from "@src/Constant";

const FormType = ({ type, setType }) => {
	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>보관 방법</Text>
			<View style={styleSheet.radioWrapper}>
				<RadioBtn nowVal={type} value={"a"} setValue={setType} text={"실온"} />
				<RadioBtn nowVal={type} value={"r"} setValue={setType} text={"냉장"} />
				<RadioBtn nowVal={type} value={"f"} setValue={setType} text={"냉동"} />
			</View>
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
	radioWrapper: {
		flex: 1,
		height: 40,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.background,
		borderRadius: 8
	}
});

export default FormType;
