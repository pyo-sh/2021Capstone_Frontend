import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { SvgXml } from "react-native-svg";
import { Color } from "@src/Constant";

const SearchInput = ({ data }) => {
	const goAdd = () => {
		// shelfLife?
		Actions.addingr({
			pName: data.presetIngrName,
			pIngrNum: data.presetIngrName
		});
	};

	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>{data?.presetIngrName ?? ""}</Text>
			<TouchableOpacity style={styleSheet.button} onPress={goAdd}>
				<SvgXml
					xml={`
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
              <path d="M9 5.192H5.143V9.049H3.857V5.192H0V3.906H3.857V0.048996H5.143V3.906H9V5.192Z" fill="white"/>
            </svg>
          `}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		width: "100%",
		paddingVertical: 10,
		marginBottom: 1,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		borderBottomWidth: 1,
		borderBottomColor: Color.mid_gray
	},
	title: {
		fontSize: 20
	},
	button: {
		width: 25,
		height: 25,

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		borderRadius: 50,
		backgroundColor: Color.primary_2
	}
});

export default React.memo(SearchInput);
