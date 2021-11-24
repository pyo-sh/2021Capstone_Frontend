import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import EnrollIngr from "@src/components/main/EnrollIngr";
import { DefaultFont_KR } from "@src/Constant";

const FridgeContent = ({ refInfos, enrollIngrs }) => {
	const refColor = refInfos?.colorCode ?? "#ffffff";
	const refNum = refInfos?.refNum;

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
			{enrollIngrs?.map((ingr, index) => {
				const beforeDate = enrollIngrs[index - 1]?.expyDate ?? "";
				const isSameDate = beforeDate === ingr.expyDate;
				return (
					<EnrollIngr
						key={`Enroll-${refInfos?.refNum}-${ingr.ingrOrnu}`}
						ingr={ingr}
						refInfos={refInfos}
						refNum={refNum}
						refColor={refColor}
						isSameDate={isSameDate}
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
