import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Color, DefaultFont_KR } from "@src/Constant";
import PlusIcon from "@src/components/icons/PlusIcon";
import FridgeContent from "@src/components/main/FridgeContent";

const Fridge = ({ refs, refInfos }) => {
	return (
		<View style={styleSheet.wrapper}>
			<TouchableOpacity
				index={1}
				onPress={() => {
					Actions.addingr({ refs, refInfos });
				}}
				style={styleSheet.addButton}
			>
				<PlusIcon color={Color.white} />
			</TouchableOpacity>
			<View style={styleSheet.fridge}>
				<Text
					style={[
						styleSheet.title,
						{ backgroundColor: refInfos?.colorCode ?? "#ffffff" },
						DefaultFont_KR
					]}
				>
					{refInfos?.refName}
				</Text>
				<FridgeContent refNum={refInfos?.refNum} enrollIngrs={refInfos?.enrollIngrs} />
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		paddingTop: 35,
		paddingBottom: 70,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.background
	},
	addButton: {
		width: 60,
		height: 60,
		position: "absolute",
		marginHorizontal: "auto",
		// right: 16,
		bottom: 50,
		zIndex: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		backgroundColor: Color.primary_2,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.25,
		elevation: 5
	},
	fridge: {
		width: "80%",
		height: "100%",
		paddingVertical: 20,
		paddingHorizontal: 15,

		borderRadius: 35,
		backgroundColor: Color.white,
		shadowColor: Color.black,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 4
	},
	title: {
		padding: 17,
		marginBottom: 15,
		textAlign: "center",
		fontSize: 24,
		borderRadius: 12
	}
});

export default Fridge;
