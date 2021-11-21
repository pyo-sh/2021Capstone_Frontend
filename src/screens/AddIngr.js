import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import OtherButtons from "@src/components/add-ingr/OtherButtons";
import SubmitButton from "@src/components/add-ingr/SubmitButton";
import FormName from "@src/components/add-ingr/FormName";
import FormType from "@src/components/add-ingr/FormType";
import FormDate from "@src/components/add-ingr/FormDate";
import FormCount from "@src/components/add-ingr/FormCount";
import FormRef from "@src/components/add-ingr/FormRef";
import { Color } from "@src/Constant";
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
