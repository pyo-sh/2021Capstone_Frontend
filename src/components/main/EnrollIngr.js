import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { getDateRemaining } from "@src/utils/date";
import { getTextColorByBackgroundColor } from "@src/utils/color";
import PencilIcon from "@src/components/icons/PencilIcon";
import PlusIcon from "@src/components/icons/PlusIcon";
import { Color, DefaultFont_EN } from "@src/Constant";
import { deleteRefEnrollIngr } from "@src/apis/ingrs";

const EnrollIngr = ({ ingr, refNum, refColor, isSameDate, deleteIngrItem }) => {
	const [isLoading, setIsLoading] = useState(false);
	const dDay = getDateRemaining(ingr.expyDate);
	const isPlus = dDay >= 0;

	const deleteSelf = () => {
		if (isLoading) return;
		setIsLoading(true);
		const ingrOrnu = ingr.ingrOrnu;
		deleteRefEnrollIngr({ refNum, ingrOrnu })
			.then(() => {
				setIsLoading(false);
				deleteIngrItem(ingrOrnu);
			})
			.catch(e => {
				console.error(e);
				setIsLoading(false);
			});
	};

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
				<Text style={{ flex: 2 }}>{ingr.ingrName}</Text>
				<Text style={{ flex: 1, display: "flex", justifyContent: "center" }}>
					{ingr.quantity}
				</Text>
				<View style={styleSheet.flexView}>
					<TouchableOpacity style={{ marginRight: 10 }}>
						<PencilIcon color={Color.gray} width={15} height={16} />
					</TouchableOpacity>
					<TouchableOpacity onPress={deleteSelf}>
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
		marginTop: 15,
		marginBottom: 8
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
		flex: 1,
		display: "flex",
		justifyContent: "flex-end",
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
