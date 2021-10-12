import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color, DefaultFont_KR } from '~/Constant';

const RadioBtn = (props) => {
    const {style, nowVal, value, setValue, text } = props;
    const isClicked = nowVal === value;

    return (
        <TouchableOpacity
            onPress={() => setValue(value)}
            style={[
                styleSheet.defaultBtn,
                isClicked ? styleSheet.activeBtn : {},
                style ?? {},
            ]}>
            <Text style={[
                DefaultFont_KR,
                {color: isClicked ? Color.primary_4 : Color.primary_2}
            ]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styleSheet = StyleSheet.create({
    defaultBtn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeBtn: {
        padding: 5,
        margin: 1,
        backgroundColor: Color.primary_2,
        borderRadius: 8,
    },

});

export default RadioBtn;
