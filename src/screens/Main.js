import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import RightArrowIcon from "@src/components/icons/RightArrowIcon";
import LeftArrowIcon from "@src/components/icons/LeftArrowIcon";
import Fridge from "@src/components/main/Fridge";
import EasyModal from "@src/components/custom/EasyModal";
import ModifyFridge from "@src/components/main/ModifyFridge";
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
				<EasyModal
					key="Additional-Page"
					renderModalButton={({ openModal }) => (
						<View style={styleSheet.addBtnWrapper}>
							<TouchableOpacity style={styleSheet.dotButton} onPress={openModal}>
								<View style={styleSheet.plus}></View>
								<View style={[styleSheet.plus, styleSheet.rotate]}></View>
							</TouchableOpacity>
						</View>
					)}
					renderModalContent={({ closeModal }) => (
						<ModifyFridge closeModal={closeModal} setRefs={setRefs} />
					)}
				/>
			]}
		</Swiper>
	);
};

const styleSheet = StyleSheet.create({
	addBtnWrapper: {
		paddingTop: 35,
		paddingBottom: 70,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.background
	},
	dotButton: {
		width: "80%",
		height: "100%",
		paddingVertical: 20,
		paddingHorizontal: 15,

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		borderRadius: 35,
		borderWidth: 4,
		borderStyle: "dotted",
		borderColor: "#cccccc"
	},
	plus: {
		width: 60,
		height: 0,
		borderWidth: 2,
		borderColor: "#cccccc"
	},
	rotate: {
		position: "relative",
		bottom: 4,
		transform: [
			{
				rotate: "90deg"
			}
		]
	}
});

export default Main;
