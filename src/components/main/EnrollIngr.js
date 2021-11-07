import React from "react";
import { StyleSheet, View, Text } from "react-native";

const EnrollIngr = ({ ingrs }) => {
	return (
		<View style={styleSheet.wrapper}>
			<Text>{ingrs.ingrName}</Text>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {}
});

export default EnrollIngr;
