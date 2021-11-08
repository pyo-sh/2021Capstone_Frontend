import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { SvgXml } from "react-native-svg";
import { Color, DefaultFont_KR } from "@src/Constant";
import ColorPickerScreen from "@src/components/main/ColorPicker";
import { createRef } from "@src/apis/fridge";

const ModifyFridge = ({ setRefs, closeModal, refNum }) => {
	const { uid } = useSelector(state => state.user);
	const [title, setTitle] = useState("");
	const [explain, setExplain] = useState("");
	const [color, setColor] = useState("#225685");
	const [canSubmit, setCanSubmit] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const isNew = !refNum;

	useEffect(() => {
		setCanSubmit(!(!title || !explain || !color || isLoading));
	}, [title, explain, color]);

	const submitRef = () => {
		if (!canSubmit) return;
		setIsLoading(true);

		createRef({
			refName: title,
			explan: explain,
			refType: "h",
			ownerNum: uid,
			colorCode: color,
			enrollIngrs: []
		}).then(ref => {
			setRefs(prev => [...prev, ref]);
			setIsLoading(false);
			setTitle("");
			setExplain("");
			closeModal();
		});
	};

	return (
		<View style={styleSheet.modalView}>
			<View style={[styleSheet.betweenView, { marginBottom: 20 }]}>
				<Text style={[{ fontSize: 25, color: Color.primary_4 }, DefaultFont_KR]}>
					{isNew ? "냉장고 추가" : "냉장고 수정"}
				</Text>
				<TouchableOpacity style={styleSheet.modalButton} onPress={closeModal}>
					<SvgXml
						xml={`
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L20 20" stroke="#4C7885" stroke-width="3"/>
                  <path d="M20 2L2 20" stroke="#4C7885" stroke-width="3"/>
              </svg>
            `}
					/>
				</TouchableOpacity>
			</View>
			<View style={styleSheet.betweenView}>
				<Text style={[{ fontSize: 17, color: Color.primary_1 }, DefaultFont_KR]}>별명</Text>
				<TextInput
					value={title}
					onChangeText={setTitle}
					style={[{ width: 220 }, styleSheet.modalInput]}
				/>
			</View>
			<View style={styleSheet.betweenView}>
				<Text style={[{ fontSize: 17, color: Color.primary_1 }, DefaultFont_KR]}>색상</Text>
				<ColorPickerScreen color={color} setColor={setColor} />
			</View>
			<Text style={[{ fontSize: 17, color: Color.primary_1 }, DefaultFont_KR]}>
				냉장고 쓰임새
			</Text>
			<TextInput
				value={explain}
				onChangeText={setExplain}
				style={[styleSheet.modalInput, styleSheet.bigInput]}
				multiline
				numberOfLines={4}
			/>
			<TouchableOpacity disabled={!canSubmit} style={styleSheet.submit} onPress={submitRef}>
				<Text
					style={[
						DefaultFont_KR,
						{
							fontSize: 20,
							color: canSubmit ? Color.primary_4 : Color.gray
						}
					]}
				>
					저장하기
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	modalView: {
		width: 340,
		margin: 20,
		padding: 35,

		backgroundColor: Color.white,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Color.primary_1,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	betweenView: {
		marginBottom: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	modalInput: {
		height: 32,
		paddingVertical: 3,
		paddingHorizontal: 10,
		backgroundColor: Color.background,
		borderRadius: 10
	},
	bigInput: {
		height: 90,
		marginVertical: 15
	},
	submit: {
		padding: 10,
		marginTop: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.primary_2,
		borderRadius: 50
	}
});

export default ModifyFridge;
