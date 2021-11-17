import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { Actions } from "react-native-router-flux";
import { Color } from "@src/Constant";
import LoginInput from "@src/components/login/LoginInput";

const SignUp = () => {
	const [textid, setTextid] = useState("");
	const [textnickname, setTextnickname] = useState("");
	const [textpw, setTextpw] = useState("");
	const [textcheckpw, setTextcheckpw] = useState("");
	const [textemail, setTextemail] = useState("");
	const [passwordError, setPasswordError] = useState(false);

	const onSubmit = e => {
		e.preventDefault();

		if (textpw !== textcheckpw) {
			return setPasswordError(true);
		}
	};

	const onChangeId = e => {
		setTextid(e.target.value);
	};
	const onChangeNick = e => {
		setTextnickname(e.target.value);
	};
	const onChangePassword = e => {
		setTextpw(e.target.value);
	};
	const onChangePasswordChk = e => {
		//비밀번호를 입력할때마다 password 를 검증하는 함수
		setPasswordError(e.target.value !== textpw);
		setTextcheckpw(e.target.value);
	};

	return (
		<View style={styleSheet.wrapper}>
			<View style={styleSheet.wrapperalign} onSubmit={onSubmit}>
				<View>
					<LoginInput
						value={textid}
						onChangeText={value => setTextid(value)}
						placeholder={"ID"}
						onSubmitEditing={() => console.log(textid)}
						onChange={onChangeId}
					/>
				</View>
				<View>
					<LoginInput
						value={textnickname}
						onChangeText={value => setTextnickname(value)}
						placeholder={"닉네임 입력"}
						onSubmitEditing={() => console.log(textnickname)}
						onChange={onChangeNick}
					/>
				</View>
				<View>
					<LoginInput
						value={textpw}
						onChangeText={value => setTextpw(value)}
						placeholder={"비밀번호 입력(8~15자)"}
						onSubmitEditing={() => console.log(textpw)}
						onChange={onChangePassword}
					/>
				</View>
				<View>
					<LoginInput
						value={textcheckpw}
						onChangeText={value => setTextcheckpw(value)}
						placeholder={"비밀번호 확인"}
						onSubmitEditing={() => console.log(textcheckpw)}
						onChange={onChangePasswordChk}
					/>
					{passwordError && (
						<Text
							style={{
								color: Color.pointed_red,
								padding: 5,
								paddingLeft: 155
							}}
						>
							비밀번호가 일치하지 않습니다.
						</Text>
					)}
				</View>
				<View>
					<LoginInput
						value={textemail}
						onChangeText={value => setTextemail(value)}
						placeholder={"이메일 입력"}
						onSubmitEditing={() => console.log(textemail)}
					/>
				</View>
				<View>
					<TouchableOpacity
						onPress={() => Actions.main()}
						style={{
							padding: 5,
							paddingLeft: 190
						}}
					>
						<Text
							style={{
								color: Color.primary_1
							}}
						>
							가입한적이 없으신가요?
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						padding: "10%"
					}}
				>
					<TouchableOpacity onPress={() => Actions.main()} style={styleSheet.button}>
						<SvgXml
							xml={`
                            <svg xmlns="http://www.w3.org/2000/svg" width="277" height="55" viewBox="0 0 277 55">
                            <g id="회원가입_버튼" data-name="회원가입 버튼" transform="translate(-57 -584)">
                            <path id="패스_7725" data-name="패스 7725" d="M27.5,0h222a27.5,27.5,0,0,1,0,55H27.5a27.5,27.5,0,0,1,0-55Z" transform="translate(57 584)" fill="#b0d8e7"/>
                            <text id="회원가입" transform="translate(153 622)" fill="#075063" font-size="23" font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" font-weight="700"><tspan x="0" y="0">회원가입</tspan></text>
                            </g>
                            </svg>
                        `}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styleSheet = StyleSheet.create({
	wrapper: {
		backgroundColor: Color.background,
		width: "100%",
		height: "100%"
	},

	wrapperalign: {
		justifyContent: "center",
		height: "100%"
	},

	Message: {
		color: Color.primary_1,
		fontSize: 12,
		flexDirection: "row"
	},

	button: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "1%"
	}
});

export default SignUp;
