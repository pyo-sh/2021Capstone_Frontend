import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Actions } from "react-native-router-flux";
import OtherButtons from "@src/components/add-ingr/OtherButtons";
import SearchInput from "@src/components/search/SearchInput";
import CalendarInput from "@src/components/add-ingr/CalendarInput";
import RadioBtn from "@src/components/add-ingr/RadioBtn";
import PlusIcon from "@src/components/icons/PlusIcon";
import MinusIcon from "@src/components/icons/MinusIcon";
import { Color, DefaultFont_KR } from "@src/Constant";
import { dateToString, isBefore } from "@src/utils/date";
import { createRefEnrollIngr } from "@src/apis/ingrs";

const AddIngr = ({ refs, refInfos }) => {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [date, setDate] = useState(new Date());
	const [count, setCount] = useState(0);
	const [refNum, setRefNum] = useState(refInfos.refNum);
	const [canSubmit, setCanSubmit] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const hasName = name !== "";
		const hasType = type !== "";
		const canDate = isBefore(Date.now(), date);
		const hasCount = count !== 0;
		const hasRef = refs.findIndex(obj => obj.refNum === refNum) !== -1;
		setCanSubmit(hasName && hasType && canDate && hasCount && hasRef && !isLoading);
	}, [name, type, date, count, refNum, isLoading]);

	const onPressAdd = () => {
		if (!canSubmit) return;
		setIsLoading(true);
		const data = {
			refNum,
			ingrName: name,
			expyDate: dateToString(date),
			quantity: count,
			storageMthdType: type
		};
		createRefEnrollIngr(data)
			.then(body => {
				Actions.main({ addedIngr: body });
			})
			.catch(() => {
				setIsLoading(false);
				Alert.alert("연결 문제", "다시 시도 해주세요!");
			});
	};

	return (
		<View style={styleSheet.wrapper}>
			<OtherButtons />
			<View style={styleSheet.controls}>
				<View style={styleSheet.flexLine}>
					<Text style={styleSheet.controlTitle}>식자재 명</Text>
					<SearchInput
						style={{ flex: 1, height: 40 }}
						text={name}
						onChangeText={value => setName(value)}
						placeholder={"이름 입력"}
						// onSubmitEditing={() => console.log(value)}
					/>
				</View>
				<View style={styleSheet.flexLine}>
					<Text style={styleSheet.controlTitle}>보관 방법</Text>
					<View style={styleSheet.radioBack}>
						<RadioBtn nowVal={type} value={"a"} setValue={setType} text={"실온"} />
						<RadioBtn nowVal={type} value={"r"} setValue={setType} text={"냉장"} />
						<RadioBtn nowVal={type} value={"f"} setValue={setType} text={"냉동"} />
					</View>
				</View>
				<View style={styleSheet.flexLine}>
					<Text style={styleSheet.controlTitle}>유통 기한</Text>
					<CalendarInput date={date} setDate={setDate} />
				</View>
				<View style={[styleSheet.flexLine, { justifyContent: "space-between" }]}>
					<View style={styleSheet.flexSquare}>
						<Text style={[styleSheet.controlTitle, { marginBottom: 15 }]}>수량</Text>
						<View
							style={[
								styleSheet.flexLine,
								{
									width: 130,
									paddingHorizontal: 10,
									justifyContent: "space-between"
								}
							]}
						>
							<TouchableOpacity
								style={styleSheet.countBtn}
								onPress={() => {
									setCount(prev => {
										if (prev == 0) return 0;
										else return prev - 1;
									});
								}}
							>
								<MinusIcon color={Color.white} width={15} height={2} />
							</TouchableOpacity>
							<Text>{count}</Text>
							<TouchableOpacity
								style={styleSheet.countBtn}
								onPress={() => {
									setCount(prev => prev + 1);
								}}
							>
								<PlusIcon color={Color.white} width={15} height={15} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styleSheet.flexSquare}>
						<Text style={[styleSheet.controlTitle, { marginBottom: 15 }]}>
							보관할 냉장고
						</Text>
						<View>
							<SelectDropdown
								buttonStyle={styleSheet.dropdown}
								rowStyle={styleSheet.dropdown}
								buttonTextStyle={styleSheet.dropdownText}
								rowTextStyle={styleSheet.dropdownText}
								data={refs}
								defaultValueByIndex={refs.findIndex(ref => ref?.refNum === refNum)}
								onSelect={selectedItem => {
									setRefNum(selectedItem?.refNum ?? -1);
								}}
								buttonTextAfterSelection={selectedItem => {
									return selectedItem.refName ?? "";
								}}
								rowTextForSelection={item => {
									return item.refName ?? "";
								}}
							/>
						</View>
					</View>
				</View>
			</View>
			<TouchableOpacity
				style={styleSheet.submitBtn}
				onPress={onPressAdd}
				disabled={!canSubmit}
			>
				<Text
					style={[
						styleSheet.controlTitle,
						{
							fontSize: 20,
							marginRight: 0,
							color: canSubmit ? Color.primary_4 : Color.gray
						}
					]}
				>
					등록하기
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		width: "100%",
		height: "100%",
		backgroundColor: Color.background
	},
	flexLine: {
		marginBottom: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	controls: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 35,
		backgroundColor: Color.white
	},
	controlTitle: {
		...DefaultFont_KR,
		fontSize: 15,
		marginRight: 16
	},
	radioBack: {
		height: 40,
		flex: 1,
		backgroundColor: Color.background,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8
	},
	flexSquare: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	countBtn: {
		width: 30,
		height: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		backgroundColor: Color.primary_2
	},
	submitBtn: {
		width: "100%",
		height: 55,
		marginTop: "auto",
		marginBottom: 15,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.primary_2
	},
	dropdown: {
		backgroundColor: Color.background,
		borderRadius: 10
	},
	dropdownText: {
		...DefaultFont_KR,
		fontSize: 17,
		color: Color.primary_4
	}
});

export default AddIngr;
