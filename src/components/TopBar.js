import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Color } from "@src/Constant";
import LeftArrowIcon from "@src/components/icons/LeftArrowIcon";

const TopBar = props => {
	const { title, hasPop } = props;

	return (
		<View style={styleSheet.wrapper}>
			<View style={{ width: 40, marginLeft: 10 }}>
				{hasPop ? (
					<TouchableOpacity
						index={1}
						onPress={() => {
							Actions.pop();
						}}
					>
						<LeftArrowIcon color={Color.primary_1} />
					</TouchableOpacity>
				) : null}
			</View>
			<Text style={styleSheet.title}>{title}</Text>
			<View style={{ width: 40, marginRight: 10 }}></View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		width: "100%",
		height: 65,
		paddingTop: 5,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		backgroundColor: Color.white,
		shadowColor: Color.primary_1,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.25,
		elevation: 4
	},
	title: {
		flex: 1,
		textAlign: "center",
		color: Color.primary_1,
		fontSize: 23,
		fontFamily: "NotoSansKR"
	},
	mark: {
		width: 35,
		height: 35,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// borderWidth: 1,
		// borderColor: Color.primary_1,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 1,
		shadowRadius: 5,
		elevation: 5,
		backgroundColor: "#FFEE81"
	}
});

export default TopBar;
