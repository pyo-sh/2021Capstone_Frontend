import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, View, Text } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";

const FormRef = ({ refs, refNum, setRefNum }) => {
	return (
		<View style={styleSheet.wrapper}>
			<Text style={styleSheet.title}>보관할 냉장고</Text>
			<View>
				<SelectDropdown
					buttonStyle={styleSheet.dropdown}
					rowStyle={styleSheet.dropdown}
					buttonTextStyle={styleSheet.dropdownText}
					rowTextStyle={styleSheet.dropdownText}
					data={refs}
					defaultValueByIndex={refs.findIndex(ref => ref?.refNum === refNum)}
					onSelect={selectedItem => {
						setRefNum(selectedItem?.refNum ?? -1);
					}}
					buttonTextAfterSelection={selectedItem => {
						return selectedItem.refName ?? "";
					}}
					rowTextForSelection={item => {
						return item.refName ?? "";
					}}
				/>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		flex: 1,
		display: "flex",
		flexDirection: "column"
	},
	title: {
		...DefaultFont_KR,
		fontSize: 15,
		marginBottom: 15
	},
	dropdown: {
		width: "100%",
		backgroundColor: Color.background,
		borderRadius: 10
	},
	dropdownText: {
		...DefaultFont_KR,
		fontSize: 17,
		color: Color.primary_4
	}
});

export default FormRef;
