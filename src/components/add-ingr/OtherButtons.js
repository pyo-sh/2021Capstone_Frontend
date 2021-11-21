import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";

const OtherButtons = () => {
	return (
		<View style={styleSheet.wrapper}>
			<Text style={[styleSheet.title, { fontSize: 16 }]}>식자재 가져오기</Text>
			<View style={styleSheet.flexLine}>
				<TouchableOpacity style={styleSheet.Button}>
					<Text style={styleSheet.Text}>쇼핑몰</Text>
					<Text style={styleSheet.Text}>주문목록</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styleSheet.Button}>
					<Text style={styleSheet.Text}>영수증</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styleSheet.Button}>
					<Text style={styleSheet.Text}>바코드</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		width: "100%",
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 8,
		marginVertical: 10,
		backgroundColor: Color.white
	},
	title: {
		marginBottom: 12,
		...DefaultFont_KR,
		color: Color.primary_4
	},
	flexLine: {
		marginBottom: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	Button: {
		height: 72,
		padding: 10,
		margin: 5,
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: Color.primary_4
	},
	Text: {
		...DefaultFont_KR,
		color: Color.primary_1
	}
});

export default OtherButtons;
