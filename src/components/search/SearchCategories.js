import React from "react";
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { Color } from "@src/Constant";

const tempIcon = ({ title, color }) => {
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
			<Text style={{ fontSize: 11 }}>{title}</Text>
		</View>
	);
};

const categories = [
	{ id: 1, name: "Vegetable", icon: tempIcon },
	{ id: 2, name: "Fruit", icon: tempIcon },
	{ id: 3, name: "Meat", icon: tempIcon },
	{ id: 4, name: "Seafood", icon: tempIcon },
	{ id: 5, name: "Sauce", icon: tempIcon },
	{ id: 6, name: "Condiment", icon: tempIcon },
	{ id: 7, name: "Dairy", icon: tempIcon },
	{ id: 8, name: "Grain", icon: tempIcon },
	{ id: 9, name: "Others", icon: tempIcon }
];

const SearchCategories = () => {
	return (
		<View>
			<SafeAreaView style={styleSheet.categories}>
				<FlatList
					data={categories}
					renderItem={({ item }) => <item.icon title={item.name}></item.icon>}
					keyExtractor={item => item.id}
					horizontal={true}
					ItemSeparatorComponent={() => {
						return <View style={{ width: 10 }}></View>;
					}}
					showsHorizontalScrollIndicator={false}
				/>
			</SafeAreaView>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	categories: {
		width: "100%",
		height: 80,
		padding: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.background
	}
});

export default React.memo(SearchCategories);
