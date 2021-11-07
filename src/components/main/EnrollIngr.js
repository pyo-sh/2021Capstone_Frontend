import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { getDateRemaining } from "@src/utils/date";
import { getTextColorByBackgroundColor } from "@src/utils/color";
import PencilIcon from "@src/components/icons/PencilIcon";
import PlusIcon from "@src/components/icons/PlusIcon";
import { Color, DefaultFont_EN } from "@src/Constant";

const EnrollIngr = ({ ingrs, refColor, isSameDate }) => {
	const dDay = getDateRemaining(ingrs.expyDate);
	const isPlus = dDay >= 0;
	return (
		<>
			{isSameDate ? (
				<></>
			) : (
				<View style={styleSheet.dayWrapper}>
					<View style={styleSheet.dayCircle(refColor)}>
						<Text
							style={[
								DefaultFont_EN,
								{ color: getTextColorByBackgroundColor(refColor) }
							]}
						>
							D {isPlus ? "+" : "-"} {Math.abs(dDay)}
						</Text>
					</View>
				</View>
			)}
			<View style={styleSheet.ingrWrapper}>
				<Text>{ingrs.ingrName}</Text>
				<Text>{ingrs.quantity}</Text>
				<View style={styleSheet.flexView}>
					<TouchableOpacity>
						<PencilIcon color={Color.gray} width={15} height={16} />
					</TouchableOpacity>
					<TouchableOpacity>
						<PlusIcon
							style={{ transform: [{ rotate: "45deg" }] }}
							color={Color.primary_1}
							width={18}
							height={18}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styleSheet = StyleSheet.create({
	dayWrapper: {
		marginVertical: 15
	},
	dayCircle: color => ({
		width: 70,
		paddingVertical: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color,
		borderRadius: 20
	}),
	dayText: {
		...DefaultFont_EN,
		color: Color.black
	},
	flexView: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	ingrWrapper: {
		padding: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#F8F8FA",
		borderRadius: 10
	}
});

export default EnrollIngr;
