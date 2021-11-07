import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EnrollIngr from "@src/components/main/EnrollIngr";

const FridgeContent = ({ refInfos, enrollIngrs }) => {
	console.log(enrollIngrs);
	console.log(refInfos);
	return (
		<View style={styleSheet.wrapper}>
			{enrollIngrs.map((ingrs, index) => {
				const beforeDate = enrollIngrs[index - 1] ?? "";
				const isSameDate = beforeDate === ingrs.exprDate;
				return (
					<EnrollIngr
						key={`${refInfos?.refNum}-${enrollIngrs.ingrOrnu}`}
						ingrs={ingrs}
						refColor={refInfos?.colorCode}
						isSameDate={isSameDate}
					/>
				);
			})}
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {}
});

export default FridgeContent;
