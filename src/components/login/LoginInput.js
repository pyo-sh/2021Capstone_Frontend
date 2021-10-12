import React, { useRef, useEffect, Children } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';


const LoginInput = (props) => {
    const { text, onChangeText, placeholder, onSubmitEditing } = props;

    return <View style={styleSheet.alignIcon}>
        <TextInput
            style = {styleSheet.loginbuttonIcon}
            value = {text}
            onChangeText = {onChangeText}
            placeholder = {placeholder}
            onSubmitEditing = {onSubmitEditing}
        />
    </View>
}

const styleSheet = StyleSheet.create({
    alignIcon: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },

    // 로그인 아이콘 생성
    loginbuttonIcon: {
        width : "70%",
        fontSize : 20,
        fontWeight : 'bold',
        borderBottomWidth: 3,
        borderBottomColor: Color.primary_3,
        color : Color.primary_1,
    },

    textAlign : {
        padding : 10,
        flexDirection: 'row',
    },
});


export default LoginInput;

