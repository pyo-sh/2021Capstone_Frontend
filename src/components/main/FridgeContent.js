import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EnrollIngr from "@src/components/main/EnrollIngr";

const FridgeContent = ({ refNum, enrollIngrs }) => {
	console.log(enrollIngrs);
	return (
		<View style={styleSheet.wrapper}>
			{enrollIngrs.map(ingrs => {
				return <EnrollIngr key={`${refNum}-${enrollIngrs.ingrOrnu}`} ingrs={ingrs} />;
			})}
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {}
});

export default FridgeContent;
