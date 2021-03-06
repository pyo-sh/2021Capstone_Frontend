import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";

const LoginInput = props => {
	const { text, onChangeText, placeholder, onSubmitEditing } = props;

	return (
		<View style={styleSheet.alignIcon}>
			<TextInput
				style={styleSheet.loginbuttonIcon}
				value={text}
				onChangeText={onChangeText}
				placeholder={placeholder}
				onSubmitEditing={onSubmitEditing}
			/>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	alignIcon: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},

	// 로그인 아이콘 생성
	loginbuttonIcon: {
		width: "70%",
		fontSize: 17,
		fontWeight: "bold",
		borderBottomWidth: 3,
		borderBottomColor: Color.primary_3,
		color: Color.primary_1,
		...DefaultFont_KR
	},

	textAlign: {
		padding: 10,
		flexDirection: "row"
	}
});

export default LoginInput;
