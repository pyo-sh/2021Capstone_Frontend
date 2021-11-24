import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color } from "@src/Constant";

const ImnIngrItem = ({ isSelected, ingrName, setIngredient }) => {
	return (
		<View style={styleSheet.wrapper}>
			<TouchableOpacity
				style={[
					styleSheet.button,
					isSelected ? styleSheet.selected : styleSheet.notSelected
				]}
				onPress={setIngredient}
			>
				<Text style={{ fontSize: 14 }}>{ingrName}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		width: 50,
		height: 30
	},
	button: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		borderColor: "#c1c1c1",
		color: "#a1a1a1"
	},
	selected: {
		backgroundColor: Color.primary_2
	},
	notSelected: {
		borderWidth: 1,
		borderColor: "#c1c1c1"
	}
});

export default ImnIngrItem;
