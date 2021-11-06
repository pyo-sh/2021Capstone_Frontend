import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import PersonIcon from "@src/components/icons/PersonIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import EmailIcon from "@src/components/icons/EmailIcon";
import ShippingIcon from "@src/components/icons/ShippingIcon";
import CheckIcon from "@src/components/icons/CheckIcon";
import SettingIcon from "@src/components/icons/SettingIcon";
import RightArrowIcon from "@src/components/icons/RightArrowIcon";
import { Color, DefaultFont_KR } from "@src/Constant";

const Setting = () => {
	const { name, email, nick_name } = useSelector(state => state.user);

	return (
		<View style={styleSheet.wrapper}>
			<View style={styleSheet.profile}>
				<View style={styleSheet.profileImage}>
					<PersonIcon color={Color.primary_3} />
				</View>
				<View style={styleSheet.profileInfo}>
					<Text style={[DefaultFont_KR, { fontSize: 22, color: Color.primary_4 }]}>
						{name}
					</Text>
					<Text style={[DefaultFont_KR, { fontSize: 16, color: Color.primary_3 }]}>
						{nick_name}
					</Text>
				</View>
				<TouchableOpacity style={{ marginRight: 35, marginLeft: 10 }}>
					<PencilIcon color={Color.primary_1} />
				</TouchableOpacity>
			</View>
			<View style={styleSheet.list}>
				<View style={styleSheet.listItem}>
					<EmailIcon style={styleSheet.listIcon} color={Color.primary_1} />
					<Text style={styleSheet.listTitle}>이메일</Text>
					<Text
						style={[
							DefaultFont_KR,
							{ fontSize: 16, color: Color.primary_1, marginRight: 30 }
						]}
					>
						{email}
					</Text>
				</View>
				<View style={styleSheet.listItem}>
					<ShippingIcon style={styleSheet.listIcon} color={Color.primary_1} />
					<Text style={styleSheet.listTitle}>쇼핑몰 연동</Text>
					<RightArrowIcon style={{ marginHorizontal: 15 }} color={Color.primary_1} />
				</View>
				<View style={styleSheet.listItem}>
					<CheckIcon style={styleSheet.listIcon} color={Color.primary_1} />
					<Text style={styleSheet.listTitle}>문의 및 안내</Text>
					<RightArrowIcon style={{ marginHorizontal: 15 }} color={Color.primary_1} />
				</View>
				<View style={[styleSheet.listItem, { borderBottomWidth: 0 }]}>
					<SettingIcon style={styleSheet.listIcon} color={Color.primary_1} />
					<Text style={styleSheet.listTitle}>설정</Text>
					<RightArrowIcon style={{ marginHorizontal: 15 }} color={Color.primary_1} />
				</View>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Color.background
	},
	profile: {
		height: 130,
		marginBottom: 20,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Color.white
	},
	profileImage: {
		width: 90,
		height: 90,
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
	list: {
		backgroundColor: Color.white
	},
	listItem: {
		width: "100%",
		height: 65,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",

		borderBottomColor: Color.primary_3,
		borderBottomWidth: 1
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

export default Setting;
