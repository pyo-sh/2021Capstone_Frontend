import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import RightArrowIcon from "@src/components/icons/RightArrowIcon";
import LeftArrowIcon from "@src/components/icons/LeftArrowIcon";
import Fridge from "@src/components/main/Fridge";
import AddFridge from "@src/components/main/AddFridge";
import { Color } from "@src/Constant";
import { readRefsByUser } from "@src/apis/fridge";

const Main = () => {
	const { uid } = useSelector(state => state.user);
	const [refs, setRefs] = useState([]);

	useEffect(() => {
		try {
			readRefsByUser(uid).then(ref => {
				if (!ref) return;
				setRefs(ref);
			});
		} catch (e) {
			console.error(e);
		}
	}, []);

	return (
		<Swiper
			style={{}}
			showsButtons
			nextButton={<RightArrowIcon color={Color.primary_1} />}
			prevButton={<LeftArrowIcon color={Color.primary_1} />}
			activeDotColor={Color.primary_1}
			loop={false}
			index={1}
		>
			{/* Swiper 라이브러리 오류 */}
			{/* React 와 배열을 받으면 배열이 하나의 Component로 인식 */}
			{/* -> 배열 하나만 있으면 각 요소를 렌더링 */}
			{[
				<View
					key="Recommended-Recipe"
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#9DD6EB"
					}}
				>
					<Text
						style={{
							color: "#fff",
							fontSize: 30,
							fontWeight: "bold"
						}}
					>
						추천 레시피 페이지
					</Text>
				</View>,
				/* 임박한 식자재 페이지 필요 */
				...refs?.map((refInfos, index) => {
					return (
						<Fridge
							key={refInfos?.refNum ?? `Fridge-${index}`}
							refs={refs}
							refInfos={refInfos}
						/>
					);
				}),
				<AddFridge setRefs={setRefs} key="Additional-Page" />
			]}
		</Swiper>
	);
};

const styleSheet = StyleSheet.create({});

export default Main;
