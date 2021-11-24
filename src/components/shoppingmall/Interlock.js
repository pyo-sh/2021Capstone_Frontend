import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, Modal, TextInput } from "react-native";
import { Color, DefaultFont_KR } from "@src/Constant";
import { SvgXml } from "react-native-svg";
import PersonIcon from "@src/components/icons/PersonIcon";
import { useSelector, useDispatch } from "react-redux";
import { setLinkId } from "@src/reducers/user";
import { linkUser } from "@src/apis/user";

const Interlock = ({ setRefs }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [title, setTitle] = useState("");

	const [explain, setExplain] = useState("");
	const [color, setColor] = useState("#225685");
	const [canSubmit, setCanSubmit] = useState(false);

	const { uid, name, email, nick_name, linkId } = useSelector(state => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		setCanSubmit(!(!title || !explain || !color));
	}, [title, explain, color]);

	const onPress = () => {
		linkUser(uid)
			.then(() => {
				dispatch(setLinkId());
			})
			.catch(e => {
				Alert.alert("연동 실패하였습니다.");
			});
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
						{linkId === null ? "연동 필요" : ""}
					</Text>
				</View>
				{linkId === null ? (
					<TouchableOpacity style={{ marginRight: 10, marginLeft: 1 }} onPress={onPress}>
						<Text
							style={[
								DefaultFont_KR,
								styleSheet.button,
								{ backgroundColor: Color.primary_4 }
							]}
						>
							연동
						</Text>
					</TouchableOpacity>
				) : (
					<View style={{ marginRight: 10, marginLeft: 1 }}>
						<Text
							style={[
								DefaultFont_KR,
								styleSheet.button,
								{ backgroundColor: Color.pointed_red }
							]}
						>
							해지
						</Text>
					</View>
				)}
			</View>
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
