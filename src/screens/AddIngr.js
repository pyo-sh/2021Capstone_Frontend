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
            
        </View>
    </View>
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
});

export default AddIngr;
