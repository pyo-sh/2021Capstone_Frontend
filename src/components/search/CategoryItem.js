import React from "react";
import { View, Text } from "react-native";

const CategoryItem = ({ title, Icon }) => {
	console.log(title);
	return (
		<View
			style={{
				width: 58,
				height: 58,
				paddingBottom: 5,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				alignItems: "center",
				backgroundColor: "#fff",
				borderRadius: 10
			}}
		>
			<Icon />
			<Text style={{ fontSize: 11 }}>{title ?? ""}</Text>
		</View>
	);
};

export default CategoryItem;
