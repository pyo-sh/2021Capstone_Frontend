import React from 'react';
import {
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const icon = (color) => {
    return `
        <svg width="13" height="25" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 19.678L19.6777 2.00031" stroke="${color}" stroke-width="4"/>
            <path d="M2 17.678L19.6777 35.3556" stroke="${color}" stroke-width="4"/>
        </svg>
    `;
}
const LeftArrowIcon = (props) => {
    return <View>
        <SvgXml xml={icon(props.color)}/>
    </View>
}

export default LeftArrowIcon;
