import React from 'react';
import {
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const icon = (color) => {
    return `
        <svg width="13" height="25" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6776 17.6781L1.99994 35.3558" stroke="${color}" stroke-width="4"/>
            <path d="M19.6776 19.6781L1.99994 2.00043" stroke="${color}" stroke-width="4"/>
        </svg>
    `;
}
const RightArrowIcon = (props) => {
    return <View>
        <SvgXml xml={icon(props.color)}/>
    </View>
}

export default RightArrowIcon;
