import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color } from "~/Constant";
import { SvgXml } from "react-native-svg";
import LoginInput from "~/components/login/LoginInput";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import { LogIn_User_Request } from "~/reducers/user";

const Login = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector(state => state.user.accessToken);
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");

	useEffect(() => {
		if (accessToken) {
			Actions.main();
		}
	}, [accessToken]);
	const loginUser = () => {
		// dispatch(LogIn_User_Request({ id, pw }));
		Actions.main();
	};

	return (
		<View style={styleSheet.wrapper}>
			<View style={styleSheet.wrapperalign}>
				<View>
					<LoginInput
						value={id}
						onChangeText={value => setId(value)}
						placeholder={"ID"}
						onSubmitEditing={() => console.log(id)}
					/>
				</View>
				<View>
					<LoginInput
						value={pw}
						onChangeText={value => setPw(value)}
						placeholder={"Password"}
						onSubmitEditing={() => console.log(pw)}
					/>
				</View>
				<View>
					<TouchableOpacity
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
					<TouchableOpacity
						onPress={loginUser}
						style={styleSheet.button}
					>
						<SvgXml
							xml={`
                            <svg xmlns="http://www.w3.org/2000/svg" width="277" height="55" viewBox="0 0 277 55">
                            <g id="loginButton" transform="translate(-57 -584)">
                                <path id="패스_7725" data-name="패스 7725" d="M27.5,0h222a27.5,27.5,0,0,1,0,55H27.5a27.5,27.5,0,0,1,0-55Z" transform="translate(57 584)" fill="#b0d8e7"/>
                                <text id="로그인" transform="translate(164 622)" fill="#075063" font-size="23" font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" font-weight="700"><tspan x="0" y="0">로그인</tspan></text>
                            </g>
                            </svg>               
                        `}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styleSheet.button}>
						<Text
							style={{
								color: Color.primary_1
							}}
						>
							Id / Password 찾기
						</Text>
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

export default Login;
