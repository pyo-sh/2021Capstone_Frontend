import React, { useCallback, useState } from "react";
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	Modal,
	TouchableOpacity
} from "react-native";
import { Color, DefaultFont_KR } from "~/Constant";
import { CromaColorPicker as ColorPicker } from "croma-color-picker";

const ColorPickerScreen = ({ color, setColor }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [tempColor, setTempColor] = useState("#db0a5b");

	const openModal = useCallback(() => {
		setModalVisible(true);
	}, []);
	const closeModal = useCallback(() => {
		setModalVisible(false);
	}, []);

	return (
		<View>
			<TouchableOpacity style={styleSheet.button} onPress={openModal}>
				<View
					style={{
						width: "100%",
						height: 32,
						borderRadius: 10,
						backgroundColor: color
					}}
				></View>
			</TouchableOpacity>
			<Modal
				animationType="fade"
				transparent={false}
				visible={modalVisible}
				onRequestClose={closeModal}
			>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styleSheet.wrapper}>
						<View style={styleSheet.container}>
							<Text style={[DefaultFont_KR, styleSheet.title]}>
								색상 선택
							</Text>
							<ColorPicker
								onChangeColor={color => {
									setTempColor(color);
								}}
								style={[{ height: 350 }]}
							/>
							<View style={styleSheet.linear}>
								<TouchableOpacity
									onPress={() => {
										setColor(tempColor);
										closeModal();
									}}
									style={styleSheet.selectButton}
								>
									<Text
										style={[
											DefaultFont_KR,
											styleSheet.buttonText
										]}
									>
										선택
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={closeModal}
									style={styleSheet.selectButton}
								>
									<Text
										style={[
											DefaultFont_KR,
											styleSheet.buttonText
										]}
									>
										취소
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</Modal>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		width: 220
	},
	container: {
		flexDirection: "column",
		margin: 20
	},
	title: {
		marginBottom: 20,
		fontSize: 26,
		color: Color.primary_4
	},
	linear: {
		marginTop: 20,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	selectButton: {
		marginHorizontal: 10,
		flex: 1,
		height: 40,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.background,
		borderRadius: 10
	},
	buttonText: {
		color: Color.primary_4,
		fontSize: 16
	}
});

export default ColorPickerScreen;
