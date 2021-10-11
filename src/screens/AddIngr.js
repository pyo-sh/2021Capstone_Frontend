import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SearchInput from '~/components/search/SearchInput';
import { Color, DefaultFont_KR } from '~/Constant';

const AddIngr = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return <View style={styleSheet.wrapper}>
        <View style={styleSheet.otherwise}>
            <Text style={[styleSheet.title, {fontSize: 16}]}>식자재 가져오기</Text>
            <View style={styleSheet.flexLine}>
                <TouchableOpacity style={styleSheet.otherBtn}>
                    <Text style={styleSheet.otherText}>쇼핑몰</Text>
                    <Text style={styleSheet.otherText}>주문목록</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSheet.otherBtn}>
                    <Text style={styleSheet.otherText}>영수증</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSheet.otherBtn}>
                    <Text style={styleSheet.otherText}>바코드</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styleSheet.controls}>
            <View style={styleSheet.flexLine}>
                <Text style={styleSheet.controlTitle}>
                    식자재 명
                </Text>
                <SearchInput
                    style={{flex: 1, height: 40}}
                    text={name}
                    onChangeText={(value) => setName(value)}
                    placeholder={"이름 입력"}
                    // onSubmitEditing={() => console.log(value)}
                />
            </View>
            <View style={styleSheet.flexLine}>
                <Text style={styleSheet.controlTitle}>
                    보관 방법
                </Text>
                <View style={styleSheet.radioBack}>
                    <RadioBtn
                        nowVal={type}
                        value={'a'}
                        setValue={setType}
                        text={"실온"}
                    />
                    <RadioBtn
                        nowVal={type}
                        value={'r'}
                        setValue={setType}
                        text={"냉장"}
                    />
                    <RadioBtn
                        nowVal={type}
                        value={'f'}
                        setValue={setType}
                        text={"냉동"}
                    />
                </View>
            </View>
            <View style={styleSheet.flexLine}>
                <Text style={styleSheet.controlTitle}>
                    유통 기한
                </Text>
            </View>
        </View>
    </View>
}

const RadioBtn = ({style, nowVal, value, setValue, text}) => {
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
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.background,
    },
    otherwise: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 8,
        marginVertical: 10,
        backgroundColor: Color.white,
    },
    title: {
        marginBottom: 12,
        ...DefaultFont_KR,
        color: Color.primary_4,
    },
    flexLine: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otherBtn: {
        height: 72,
        padding: 10,
        margin: 5,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.primary_4,
    },
    otherText: {
        ...DefaultFont_KR,
        color: Color.primary_1,
    },
    controls: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 35,
        backgroundColor: Color.white,
    },
    controlTitle: {
        ...DefaultFont_KR,
        color: Color.primary_4,
        fontSize: 15,
        marginRight: 16,
    },
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
    radioBack: {
        height: 40,
        flex: 1,
        backgroundColor: Color.background,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    }
});

export default AddIngr;
