import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Color, DefaultFont_KR } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const getDummyIngrs = (ref) => ([]);

const plusButton = (color) => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 42 45" fill="none">
            <path d="M21 1.97705V43.0231V1.97705Z" fill="${color}"/>
            <path d="M21 1.97705V43.0231" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.05701 22.5H39.942H2.05701Z" fill="${color}"/>
            <path d="M2.05701 22.5H39.942" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

const Fridge = ({ refInfos }) => {
    const [enrollIngrs, setEnrollIngrs] = useState([]);

    useEffect(() => {
        setEnrollIngrs(getDummyIngrs(refInfos?.refNum));
    }, []);

    return (
        <View style={styleSheet.wrapper}>
            <TouchableOpacity index={1} onPress={() => {}} style={styleSheet.addButton}>
                <SvgXml xml={plusButton(Color.white)}/>
            </TouchableOpacity>
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
    addButton: {
        width: 60,
        height: 60,
        position: 'absolute',
        marginHorizontal: 'auto',
        // right: 16,
        bottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Color.primary_2,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        elevation: 5,
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
