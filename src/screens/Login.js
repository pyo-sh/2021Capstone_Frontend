import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';
import { color } from 'react-native-reanimated';

const idinputIcon = (color) => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2">
            <line id="선_1" data-name="선 1" x2="296" transform="translate(0 1)" fill="${color}" stroke="${color}" stroke-width="2"/>
        </svg>
    `;
}

const pwinputIcon = (color) => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2">
            <line id="선_1" data-name="선 1" x2="296" transform="translate(0 1)" fill="${color}" stroke="${color}" stroke-width="2"/>
        </svg>
    `;
}

const loginbuttonIcon = () => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="277" height="55" viewBox="0 0 277 55">
            <g id="loginButton" transform="translate(-57 -584)">
                <path id="패스_7725" data-name="패스 7725" d="M27.5,0h222a27.5,27.5,0,0,1,0,55H27.5a27.5,27.5,0,0,1,0-55Z" transform="translate(57 584)" fill="#b0d8e7"/>
                <text id="로그인" transform="translate(164 622)" fill="#075063" font-size="23" font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" font-weight="700"><tspan x="0" y="0">로그인</tspan></text>
            </g>
        </svg>
    `;
}

// const onPress = () => setCount(prevCount => prevCount + 1);

const Login = () => {
    return <View style={styleSheet.wrapper}>
        <View style={styleSheet.loginwrapper}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.primary_3, padding: 5, paddingHorizontal: 15}}>ID</Text>
                <SvgXml xml={idinputIcon(Color.primary_3)} style={{padding : 6}}/>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.primary_3, padding: 5, paddingHorizontal: 15}}>PASSWORD</Text>
                <SvgXml xml={pwinputIcon(Color.primary_3)} style={{padding : 6}}/>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: Color.primary_3, textAlign: 'right'}}>가입한적이 없으신가요?</Text>
            </View>
            <TouchableOpacity style={styleSheet.loginbuttonIcon} /*</View>onPress={onPress}*/>
                <SvgXml xml={loginbuttonIcon()}/>
                    <View style={styleSheet.textAlign}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: Color.primary_3, textAlign: 'right'}}>아이디 찾기</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: Color.primary_3, textAlign: 'right'}}> | </Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: Color.primary_3, textAlign: 'right'}}>비밀번호 찾기</Text>
                    </View>
            </TouchableOpacity>
        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.background,
    },

    loginwrapper: {
        width : '100%',
        height : '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Color.background,
    },

    loginbuttonIcon: {
        height : 160,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    textAlign : {
        padding : 10,
        flexDirection: 'row',
    },
});


export default Login;
