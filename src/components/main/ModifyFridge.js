import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { SvgXml } from "react-native-svg";
import { Color, DefaultFont_KR } from "@src/Constant";
import ColorPickerScreen from "@src/components/main/ColorPicker";
import { createRef, updateRef, deleteRef } from "@src/apis/fridge";

const ModifyFridge = ({ setRefs, closeModal, refInfos }) => {
	const { refNum, colorCode, explan, refName } = refInfos || {};
	const { uid } = useSelector(state => state.user);
	const [title, setTitle] = useState(refName ?? "");
	const [explain, setExplain] = useState(explan ?? "");
	const [color, setColor] = useState(colorCode ?? "#225685");
	const [canSubmit, setCanSubmit] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const isNew = !refInfos;

	useEffect(
		() => () => {
			setIsLoading(false);
		},
		[]
	);

	useEffect(() => {
		setCanSubmit(!(!title || !explain || !color || isLoading));
	}, [title, explain, color]);

	const submitRef = () => {
		if (!canSubmit) return;
		if (isLoading) return;
		setIsLoading(true);

		const requestBody = {
			refName: title,
			explan: explain,
			refType: "h",
			ownerNum: uid,
			colorCode: color
		};
		if (isNew) {
			createRef(requestBody).then(ref => {
				setRefs(prev => [...prev, ref]);
				setTitle("");
				setExplain("");
				closeModal();
			});
		} else {
			updateRef({ ...requestBody, refNum }).then(ref => {
				setRefs(prev => {
					const nowIndex = prev.findIndex(obj => obj.refNum === refNum);
					const newData = [...prev];
					newData[nowIndex] = ref;
					return newData;
				});
				closeModal();
			});
		}
	};

	const deleteRefByNum = () => {
		if (isNew) return;
		if (isLoading) return;
		setIsLoading(true);

		const { refNum } = refInfos;
		deleteRef(refNum)
			.then(() => {
				setRefs(prev => prev.filter(obj => obj.refNum !== refNum));
				closeModal();
			})
			.catch(() => {
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
			<TouchableOpacity
				disabled={!canSubmit}
				style={[styleSheet.bigBtn, { backgroundColor: Color.primary_2 }]}
				onPress={submitRef}
			>
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
			{isNew ? (
				<></>
			) : (
				<TouchableOpacity
					style={[styleSheet.bigBtn, { backgroundColor: Color.pointed_red }]}
					onPress={deleteRefByNum}
				>
					<Text
						style={[
							DefaultFont_KR,
							{
								fontSize: 20,
								color: Color.white
							}
						]}
					>
						삭제하기
					</Text>
				</TouchableOpacity>
			)}
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
	bigBtn: {
		padding: 10,
		marginTop: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 6
	}
});

export default ModifyFridge;
