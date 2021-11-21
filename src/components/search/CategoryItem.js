import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Color } from "@src/Constant";

const CategoryItem = ({ isSelected, onClickCategory, title, Icon }) => {
	return (
		<TouchableOpacity
			onPress={onClickCategory}
			style={{
				width: 58,
				height: 58,
				paddingBottom: 5,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				alignItems: "center",
				backgroundColor: isSelected ? Color.primary_3 : Color.white,
				borderRadius: 10
			}}
		>
			<Icon color={isSelected ? Color.white : Color.black} />
			<Text style={{ color: isSelected ? Color.white : "#394847", fontSize: 11 }}>
				{title ?? ""}
			</Text>
		</TouchableOpacity>
	);
};

export default CategoryItem;
