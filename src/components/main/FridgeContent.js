import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import EnrollIngr from "@src/components/main/EnrollIngr";

const FridgeContent = ({ refInfos, enrollIngrs }) => {
	const refColor = refInfos?.colorCode ?? "#ffffff";
	const refNum = refInfos?.refNum;

	return (
		<View style={styleSheet.wrapper}>
			<FlatList
				// style={styleSheet.searched}
				data={enrollIngrs}
				keyExtractor={item => `Enroll-${refInfos?.refNum}-${item.ingrOrnu}`}
				renderItem={({ index, item }) => {
					const beforeDate = enrollIngrs[index - 1]?.expyDate ?? "";
					const isSameDate = beforeDate === item.expyDate;
					return (
						<EnrollIngr
							ingr={item}
							refInfos={refInfos}
							refNum={refNum}
							refColor={refColor}
							isSameDate={isSameDate}
						/>
					);
				}}
			/>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		overflow: "hidden",
		paddingBottom: 100
	},
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
