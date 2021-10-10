import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Color, DefaultFont_KR } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const getDummyRefs = (refNum) => {
    return [
        {
            refNum : "202005060001",
            refName : "일반냉장고",
            explan : "주방 첫번째 냉장고",
            refType : "h",
            ownerNum : "2005060001",
            colorCode : "#225685",
            enrollIngrs: [],
        },
        {
            refNum : "202005060002",
            refName : "비밀 냉장고",
            explan : "아무도 모르는 냉장고",
            refType : "r",
            ownerNum : "2005060001",
            colorCode : "#9DD6EB",
            enrollIngrs: [],
        },
    ].filter((obj) => obj?.refNum == refNum)[0] ?? {};
};

const Fridge = ({ refNum }) => {
    const [datas, setDatas] = useState({});

    useEffect(() => {
        setDatas(getDummyRefs(refNum));
    }, []);

    return (
        <View style={styleSheet.wrapper}>
            <View style={styleSheet.fridge}>
                <Text style={[
                    styleSheet.title,
                    { backgroundColor: datas?.colorCode ?? "#ffffff" },
                    DefaultFont_KR
                ]}>
                    {datas?.refName}
                </Text>
            </View>
        </View>
    );
}

const styleSheet = StyleSheet.create({
    wrapper: {
        paddingTop: 35,
        paddingBottom: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    fridge: {
        width: '80%',
        height: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        
        borderRadius: 35,
        backgroundColor: Color.white,
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    title: {
        padding: 17,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 24,
        borderRadius: 12,
    },
});


export default Fridge;
