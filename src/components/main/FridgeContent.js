import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import EnrollIngr from "@src/components/main/EnrollIngr";
import { DefaultFont_KR } from "@src/Constant";

const FridgeContent = ({ refInfos, enrollIngrs }) => {
	const refColor = refInfos?.colorCode ?? "#ffffff";
	const refNum = refInfos.refNum;
	const [ingrs, setIngrs] = useState(enrollIngrs ?? []);

	const deleteIngrItem = ingrOrnu => {
		setIngrs(prev => prev.filter(i => i.ingrOrnu !== ingrOrnu));
	};

	return (
		<View style={styleSheet.wrapper}>
			<View style={styleSheet.header(refColor)}>
				<Text style={[DefaultFont_KR, { flex: 2 }]}>식자재</Text>
				<Text
					style={[DefaultFont_KR, { flex: 1, display: "flex", justifyContent: "center" }]}
				>
					수량
				</Text>
				<View style={{ flex: 1 }}></View>
			</View>
			{ingrs.map((ingr, index) => {
				const beforeDate = ingrs[index - 1] ?? "";
				const isSameDate = beforeDate === ingr.exprDate;
				return (
					<EnrollIngr
						key={`${refInfos?.refNum}-${ingr.ingrOrnu}`}
						ingr={ingr}
						refNum={refNum}
						refColor={refColor}
						isSameDate={isSameDate}
						deleteIngrItem={deleteIngrItem}
					/>
				);
			})}
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {},
	header: color => ({
		padding: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomColor: color,
		borderBottomWidth: 1
	})
});

export default FridgeContent;
