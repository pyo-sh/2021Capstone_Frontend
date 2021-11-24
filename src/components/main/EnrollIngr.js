import React from "react";
import { Actions } from "react-native-router-flux";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteIngrRequest } from "@src/reducers/refs";
import { getDateRemaining } from "@src/utils/date";
import { getTextColorByBackgroundColor } from "@src/utils/color";
import PencilIcon from "@src/components/icons/PencilIcon";
import PlusIcon from "@src/components/icons/PlusIcon";
import { Color, DefaultFont_EN } from "@src/Constant";

const EnrollIngr = ({ ingr, refInfos, refNum, refColor, isSameDate }) => {
	const isRefsLoading = useSelector(state => state.refs.isRefsLoading);
	const dispatch = useDispatch();
	const dDay = getDateRemaining(ingr.expyDate);
	const isPlus = dDay >= 0;

	const updateSelf = () => {
		Actions.addingr({
			refInfos,
			pName: ingr.ingrName,
			pType: ingr?.storageMthdType,
			pDate: ingr.expyDate,
			pCount: ingr.quantity,
			pIngrNum: ingr?.presetIngrNum,
			updateNum: ingr.ingrOrnu
		});
	};

	const deleteSelf = () => {
		if (isRefsLoading) return;
		const ingrOrnu = ingr.ingrOrnu;
		dispatch(deleteIngrRequest({ refNum, ingrOrnu }));
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
					<TouchableOpacity style={{ marginRight: 10 }} onPress={updateSelf}>
						<PencilIcon color={Color.gray} width={15} height={16} />
					</TouchableOpacity>
					<TouchableOpacity onPress={deleteSelf} disabled={isRefsLoading}>
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
		marginBottom: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#F8F8FA",
		borderRadius: 10
	}
});

export default EnrollIngr;
