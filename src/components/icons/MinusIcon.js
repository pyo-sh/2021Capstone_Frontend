import React from 'react';
import {
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const icon = (color, width, height) => {
    return `
        <svg width="${width ?? 18}" height="${height ?? 2}" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H18" stroke="${color}" stroke-width="2"/>
        </svg>
    `;
}

const MinusIcon = (props) => {
    return <View style={props?.style ?? {}}>
        <SvgXml xml={icon(props.color, props?.width, props?.height)}/>
    </View>
}

export default MinusIcon;