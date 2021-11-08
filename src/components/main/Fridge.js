import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { Color, DefaultFont_KR } from "@src/Constant";
import PlusIcon from "@src/components/icons/PlusIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import FridgeContent from "@src/components/main/FridgeContent";
import { getTextColorByBackgroundColor } from "@src/utils/color";
import EasyModal from "@src/components/custom/EasyModal";
import ModifyFridge from "@src/components/main/ModifyFridge";

const Fridge = ({ setRefs, refs, refInfos }) => {
	return (
		<View style={styleSheet.wrapper}>
			<View style={styleSheet.fridge}>
				<Text
					style={[
						styleSheet.title,
						{
							backgroundColor: refInfos?.colorCode ?? "#ffffff",
							color: getTextColorByBackgroundColor(refInfos?.colorCode ?? "#ffffff")
						},
						DefaultFont_KR
					]}
				>
					{refInfos?.refName}
				</Text>
				<FridgeContent refInfos={refInfos} enrollIngrs={refInfos?.enrollIngrs} />
				<View style={styleSheet.controlSection}>
					<EasyModal
						renderModalButton={({ openModal }) => (
							<TouchableOpacity
								index={1}
								onPress={openModal}
								style={styleSheet.bigBtn}
							>
								<PencilIcon color={Color.white} />
							</TouchableOpacity>
						)}
						renderModalContent={({ closeModal }) => (
							<ModifyFridge
								closeModal={closeModal}
								setRefs={setRefs}
								refInfos={refInfos}
							/>
						)}
					/>
					<TouchableOpacity
						index={1}
						onPress={() => {
							Actions.addingr({ refs, refInfos });
						}}
						style={[styleSheet.bigBtn, { marginLeft: 10 }]}
					>
						<PlusIcon color={Color.white} />
					</TouchableOpacity>
				</View>
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
	},
	controlSection: {
		position: "absolute",
		marginHorizontal: "auto",
		right: 0,
		bottom: -25,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center"
	},
	bigBtn: {
		width: 50,
		height: 50,
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: Color.primary_2,
		borderRadius: 50,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.25,
		elevation: 5
	}
});

export default Fridge;
