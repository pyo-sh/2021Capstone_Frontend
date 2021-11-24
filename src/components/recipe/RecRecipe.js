import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { Color, DefaultFont_KR } from "@src/Constant";
import RecipeBox from "@src/components/recipe/RecipeBox";

const RecRecipe = () => {
	const recipes = useSelector(state => state.recipe.recRecipes);

	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>추천 레시피</Text>
			<FlatList
				data={recipes}
				keyExtractor={item =>
					`Rec-${item?.refNum}-${item?.ingrOrnu}-${item?.recipe?.recipeNum}` ?? ""
				}
				numColumns={2}
				renderItem={({ item }) => {
					const recipe = item?.recipe ?? {};
					return (
						<RecipeBox
							recipeNum={recipe?.recipeNum}
							title={recipe?.title}
							picPath={recipe?.picPath}
						/>
					);
				}}
			/>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		paddingTop: 25,
		paddingLeft: 20,
		paddingRight: 10,
		paddingBottom: 70,
		flex: 1,
		backgroundColor: Color.white
	},
	title: {
		...DefaultFont_KR,
		fontSize: 25,
		color: Color.primary_4,
		marginBottom: 20
	}
});

export default RecRecipe;
