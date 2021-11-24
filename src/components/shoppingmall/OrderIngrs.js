import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert, Text } from "react-native";
import { useSelector } from "react-redux";
import { Color, DefaultFont_KR } from "@src/Constant";
import { readOrders } from "@src/apis/order";
import SearchedFood from "@src/components/search/SearchedFood";
import Loading from "@src/components/Loading";

const OrderIngrs = ({ closeModal }) => {
	const uid = useSelector(state => state.user.uid);
	const [isLoading, setIsLoading] = useState(true);
	const [ingrs, setIngrs] = useState({});

	useEffect(() => {
		readOrders(uid)
			.then(data => {
				if (!data?.length) {
					setIsLoading(false);
					Alert.alert("주문 정보가 없습니다!");
					return closeModal();
				}
				const ingrProducts = data.reduce((result, cur) => {
					cur?.orderProducts.forEach(prod => {
						prod.orderDate = cur?.orderDate;
						prod.index = result.length;
						result.push(prod);
					});
					return result;
				}, []);

				setIngrs(ingrProducts);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
				closeModal();
			});
	}, []);

	if (isLoading)
		return (
			<View style={styleSheet.modalView}>
				<Loading />
			</View>
		);
	return (
		<View style={styleSheet.modalView}>
			<Text style={styleSheet.title}>주문 목록</Text>
			<FlatList
				style={styleSheet.searched}
				data={ingrs}
				keyExtractor={item => `Order-${item?.index}`}
				renderItem={({ item }) => {
					const { productName: presetIngrName, quantity } = item;
					const beforeItem = ingrs[item.index - 1] ?? {};
					const nowOrderDate = item.orderDate;
					return (
						<>
							{beforeItem?.orderDate !== nowOrderDate ? (
								<Text style={styleSheet.date}>{nowOrderDate}</Text>
							) : (
								<></>
							)}
							<SearchedFood data={{ presetIngrName, quantity }} />
						</>
					);
				}}
			/>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	modalView: {
		width: 340,
		height: "80%",
		margin: 20,

		backgroundColor: Color.background,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Color.primary_1,
		overflow: "hidden",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	title: {
		paddingHorizontal: 25,
		paddingTop: 25,
		fontSize: 25,
		color: Color.primary_4,
		backgroundColor: Color.white,
		...DefaultFont_KR
	},
	date: {
		textAlign: "center",
		fontSize: 17,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 20,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: Color.primary_2,
		backgroundColor: Color.primary_2
	},
	searched: {
		paddingHorizontal: 35,
		paddingBottom: 35,
		backgroundColor: Color.white
	}
});

export default OrderIngrs;
