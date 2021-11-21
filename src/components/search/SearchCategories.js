import React from "react";
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { Color } from "@src/Constant";
import CategoryItem from "@src/components/search/CategoryItem";
import VegetableIcon from "@src/components/icons/VegetableIcon";
import FruitIcon from "@src/components/icons/FruitIcon";
import MeatIcon from "@src/components/icons/MeatIcon";
import SeafoodIcon from "@src/components/icons/SeafoodIcon";
import CondimentIcon from "@src/components/icons/CondimentIcon";
import SauceIcon from "@src/components/icons/SauceIcon";
import DairyIcon from "@src/components/icons/DairyIcon";
import GrainIcon from "@src/components/icons/GrainIcon";
import OtherIcon from "@src/components/icons/OtherIcon";

const CATEGORIES = [
	{ id: 1, type: "v", name: "Vegetable", icon: VegetableIcon },
	{ id: 2, type: "f", name: "Fruit", icon: FruitIcon },
	{ id: 3, type: "m", name: "Meat", icon: MeatIcon },
	{ id: 4, type: "a", name: "Seafood", icon: SeafoodIcon },
	{ id: 5, type: "s", name: "Sauce", icon: SauceIcon },
	{ id: 6, type: "c", name: "Condiment", icon: CondimentIcon },
	{ id: 7, type: "d", name: "Dairy", icon: DairyIcon },
	{ id: 8, type: "g", name: "Grain", icon: GrainIcon },
	{ id: 9, type: "e", name: "Others", icon: OtherIcon }
];

const SearchCategories = ({ type, onClickCategory }) => {
	return (
		<View>
			<SafeAreaView style={styleSheet.categories}>
				<FlatList
					data={CATEGORIES}
					renderItem={({ item }) => (
						<CategoryItem
							isSelected={item.type === type}
							onClickCategory={onClickCategory(item.type)}
							title={item?.name}
							Icon={item?.icon}
						/>
					)}
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
