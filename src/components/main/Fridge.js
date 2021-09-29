import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Color, DefaultFont_KR } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const fridge = {
    refNum : "202005060001",
    refName : "일반냉장고",
    explan : "주방 첫번째 냉장고",
    refType : "h", 
    ownerNum : "2005060001",
    colorCode : "#F6CA50",
    enrollIngrs: []
}

const Fridge = () => {
    return (
        <View style={styleSheet.wrapper}>
            <View style={styleSheet.fridge}>
                <Text style={[
                    styleSheet.title,
                    { backgroundColor: fridge.colorCode },
                    DefaultFont_KR
                ]}>
                    {fridge.refName}
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
