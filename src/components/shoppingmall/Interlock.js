import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";
import { SvgXml } from "react-native-svg";
import PersonIcon from "@src/components/icons/PersonIcon";
import { useSelector } from "react-redux";

const Interlock = ({ setRefs }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [title, setTitle] = useState("");

	const [explain, setExplain] = useState("");
	const [color, setColor] = useState("#225685");
	const [canSubmit, setCanSubmit] = useState(false);

	const openModal = useCallback(() => {
		setModalVisible(true);
	}, []);
	const closeModal = useCallback(() => {
		setModalVisible(false);
	}, []);
	const { name, email, nick_name } = useSelector(state => state.user);

	useEffect(() => {
		setCanSubmit(!(!title || !explain || !color));
	}, [title, explain, color]);

	const submitRef = () => {
		if (canSubmit) {
			setRefs(prev => [
				...prev,
				{
					refNum: (202005060002 + prev.length).toString(),
					refName: title,
					explan: explain,
					refType: "r",
					ownerNum: "2005060001",
					colorCode: color,
					enrollIngrs: []
				}
			]);
			setTitle("");
			setExplain("");
			closeModal();
		}
	};

	return (
		<View style={styleSheet.wrapper}>
			<View style={styleSheet.profile}>
				<View style={styleSheet.profileImage}>
					<PersonIcon color={Color.primary_3} />
				</View>
				<View style={styleSheet.profileInfo}>
					<Text style={[DefaultFont_KR, { fontSize: 22, color: Color.primary_4 }]}>
						XX 쇼핑몰
					</Text>
					<Text style={[DefaultFont_KR, { fontSize: 15, color: Color.pointed_red }]}>
						연동 필요
					</Text>
				</View>
				<TouchableOpacity style={{ marginRight: 10, marginLeft: 1 }} onPress={openModal}>
					<Text style={([DefaultFont_KR], styleSheet.button)}>연동</Text>
				</TouchableOpacity>
			</View>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={closeModal}
			>
				<View style={styleSheet.centeredView}>
					<View style={styleSheet.modalView}>
						<View style={[styleSheet.betweenView, { marginBottom: 20 }]}>
							<Text
								style={[{ fontSize: 25, color: Color.primary_4 }, DefaultFont_KR]}
							>
								연동하기
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
							<TextInput
								value={title}
								onChangeText={setTitle}
								style={[{ width: 270 }, styleSheet.modalInput]}
								placeholder={"ID"}
							/>
						</View>
						<View style={styleSheet.betweenView}>
							<TextInput
								value={title}
								onChangeText={setTitle}
								style={[{ width: 270 }, styleSheet.modalInput]}
								placeholder={"Password"}
							/>
						</View>
						<TouchableOpacity
							disabled={canSubmit}
							style={styleSheet.submit}
							onPress={closeModal}
						>
							<Text
								style={[
									DefaultFont_KR,
									{
										fontSize: 20,
										color: canSubmit ? Color.primary_3 : Color.primary_4
									}
								]}
							>
								로그인
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		paddingBottom: 70,
		display: "flex",
		backgroundColor: Color.background,
		width: "100%",
		height: "100%"
	},
	button: {
		fontSize: 15,
		color: Color.white,
		height: 80,
		width: 60,
		paddingVertical: 30,
		paddingHorizontal: 15,
		backgroundColor: Color.primary_4,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center"
	},
	plus: {
		width: 60,
		height: 0,
		borderWidth: 2,
		borderColor: "#cccccc"
	},
	rotate: {
		position: "relative",
		bottom: 4,
		transform: [
			{
				rotate: "90deg"
			}
		]
	},
	centeredView: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
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
		borderBottomWidth: 3,
		borderBottomColor: Color.primary_3,
		paddingBottom: 10,
		padding: 20,
		fontSize: 18
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
	},
	profile: {
		height: 100,
		marginBottom: 20,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Color.white,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	profileImage: {
		width: 70,
		height: 70,
		marginHorizontal: 35,

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		borderColor: Color.primary_3,
		borderWidth: 2,
		borderRadius: 50
	},
	profileInfo: {
		flex: 1
	},
	listItem: {
		width: "100%",
		height: 65,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",

		borderBottomColor: Color.primary_3,
		borderBottomWidth: 1,

		backgroundColor: Color.white
	},
	listIcon: {
		marginHorizontal: 30
	},
	listTitle: {
		...DefaultFont_KR,
		color: Color.primary_4,
		fontSize: 20,
		flex: 1
	}
});

export default Interlock;
