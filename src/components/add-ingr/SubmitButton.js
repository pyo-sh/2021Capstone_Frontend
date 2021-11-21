import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";

const SubmitButton = ({ canSubmit, onPressSubmit }) => {
	return (
		<View style={styleSheet.wrapper}>
			<TouchableOpacity
				style={styleSheet.button}
				onPress={onPressSubmit}
				disabled={!canSubmit}
			>
				<Text style={styleSheet.text(canSubmit)}>등록하기</Text>
			</TouchableOpacity>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingBottom: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-end"
	},
	button: {
		width: "100%",
		height: 55,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.primary_2
	},
	text: canSubmit => ({
		...DefaultFont_KR,
		fontSize: 20,
		color: canSubmit ? Color.primary_4 : Color.gray
	})
});

export default SubmitButton;
