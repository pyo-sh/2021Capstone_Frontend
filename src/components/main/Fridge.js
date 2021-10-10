import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Color, DefaultFont_KR } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const getDummyIngrs = (ref) => ([]);

const Fridge = ({ refInfos }) => {
    const [enrollIngrs, setEnrollIngrs] = useState([]);

    useEffect(() => {
        setEnrollIngrs(getDummyIngrs(refInfos?.refNum));
    }, []);

    return (
        <View style={styleSheet.wrapper}>
            <View style={styleSheet.fridge}>
                <Text style={[
                    styleSheet.title,
                    { backgroundColor: refInfos?.colorCode ?? "#ffffff" },
                    DefaultFont_KR
                ]}>
                    {refInfos?.refName}
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
