import React from 'react';
import {
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const icon = (color, width, height) => {
    return `
    <svg width="${width ?? 30}" height="${height ?? 35}" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 1.97705V43.0231V1.97705Z" fill="${color}"/>
        <path d="M21 1.97705V43.0231" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.05701 22.5H39.942H2.05701Z" fill="${color}"/>
        <path d="M2.05701 22.5H39.942" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
}

const PlusIcon = (props) => {
    return <View style={props?.style ?? {}}>
        <SvgXml xml={icon(props.color, props?.width, props?.height)}/>
    </View>
}

export default PlusIcon;