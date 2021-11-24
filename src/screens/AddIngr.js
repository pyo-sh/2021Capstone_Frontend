import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import { addIngrRequest, updateIngrRequest } from "@src/reducers/refs";
import OtherButtons from "@src/components/add-ingr/OtherButtons";
import SubmitButton from "@src/components/add-ingr/SubmitButton";
import FormName from "@src/components/add-ingr/FormName";
import FormType from "@src/components/add-ingr/FormType";
import FormDate from "@src/components/add-ingr/FormDate";
import FormCount from "@src/components/add-ingr/FormCount";
import FormRef from "@src/components/add-ingr/FormRef";
import { Color } from "@src/Constant";
import { dateToString, isBefore } from "@src/utils/date";

const AddIngr = ({ refInfos, pName, pType, pIngrNum, updateNum }) => {
	const dispatch = useDispatch();
	const refs = useSelector(state => state.refs.refs);
	const isIngrLoading = useSelector(state => state.refs.isIngrLoading);
	const loadIngrErrorReason = useSelector(state => state.refs.loadIngrErrorReason);
	const [isPressed, setIsPressed] = useState(false);
	const [name, setName] = useState(pName ?? "");
	const [type, setType] = useState(pType ?? "");
	const [date, setDate] = useState(new Date());
	const [count, setCount] = useState(1);
	const [refNum, setRefNum] = useState(refInfos?.refNum ?? null);
	const [canSubmit, setCanSubmit] = useState(false);

	useEffect(() => {
		const hasName = name !== "";
		const hasType = type !== "";
		const canDate = isBefore(Date.now(), date);
		const hasCount = count !== 0;
		const hasRef = refs.findIndex(obj => obj.refNum === refNum) !== -1;
		setCanSubmit(hasName && hasType && canDate && hasCount && hasRef && !isPressed);
	}, [name, type, date, count, refNum, isPressed]);

	useEffect(() => {
		if (isIngrLoading || !isPressed) return;
		if (!loadIngrErrorReason) {
			setIsPressed(false);
			Actions.main();
		} else {
			setIsPressed(false);
			Alert.alert("연결 문제", "다시 시도 해주세요!");
		}
	}, [isIngrLoading]);

	const onPressAdd = () => {
		if (!canSubmit) return;
		setIsPressed(true);
		const data = {
			refNum,
			ingrName: name,
			expyDate: dateToString(date),
			quantity: count,
			storageMthdType: type
		};
		if (pIngrNum) data.presetIngrNum = pIngrNum;

		if (!updateNum) dispatch(addIngrRequest({ ingr: data }));
		else {
			data.ingrOrnu = updateNum;
			dispatch(updateIngrRequest({ ingr: data }));
		}
	};

	return (
		<View style={styleSheet.wrapper}>
			<OtherButtons />
			<View style={styleSheet.controls}>
				<FormName name={name} setName={setName} />
				<FormType type={type} setType={setType} />
				<FormDate date={date} setDate={setDate} />
				<View style={styleSheet.flexLine}>
					<FormCount count={count} setCount={setCount} />
					<FormRef refs={refs} refNum={refNum} setRefNum={setRefNum} />
				</View>
			</View>
			<SubmitButton canSubmit={canSubmit} onPressSubmit={onPressAdd} />
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		width: "100%",
		height: "100%",
		backgroundColor: Color.background
	},
	controls: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 35,
		backgroundColor: Color.white
	},
	flexLine: {
		width: "100%",
		marginVertical: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	}
});

export default AddIngr;
