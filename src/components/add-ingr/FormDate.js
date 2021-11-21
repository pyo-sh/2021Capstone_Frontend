import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CalendarInput from "@src/components/add-ingr/CalendarInput";
import { DefaultFont_KR } from "@src/Constant";

const FormDate = ({ date, setDate }) => {
	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>유통 기한</Text>
			<CalendarInput date={date} setDate={setDate} />
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
	}
});

export default FormDate;
