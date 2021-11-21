import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PlusIcon from "@src/components/icons/PlusIcon";
import MinusIcon from "@src/components/icons/MinusIcon";
import { Color, DefaultFont_KR } from "@src/Constant";

const FormCount = ({ count, setCount }) => {
	const onPressMinus = () => {
		setCount(prev => {
			if (prev == 0) return 0;
			else return prev - 1;
		});
	};
	const onPressPlus = () => {
		setCount(prev => prev + 1);
	};

	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>수량</Text>
			<View style={styleSheet.content}>
				<TouchableOpacity style={styleSheet.circleButton} onPress={onPressMinus}>
					<MinusIcon color={Color.white} width={15} height={2} />
				</TouchableOpacity>
				<Text>{count}</Text>
				<TouchableOpacity style={styleSheet.circleButton} onPress={onPressPlus}>
					<PlusIcon color={Color.white} width={15} height={15} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		marginRight: 15
	},
	title: {
		...DefaultFont_KR,
		fontSize: 15,
		marginBottom: 15
	},
	content: {
		width: 130,
		paddingHorizontal: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	circleButton: {
		width: 30,
		height: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		backgroundColor: Color.primary_2
	}
});

export default FormCount;
