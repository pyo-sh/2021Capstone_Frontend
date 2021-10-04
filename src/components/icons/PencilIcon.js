import React from 'react';
import {
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const icon = (color) => {
    return `
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="${color}" d="M26.4 7.17703L26.125 7.45203L21.115 2.43903L21.389 2.16503C21.7388 1.71427 22.1779 1.34058 22.6788 1.06733C23.1797 0.794082 23.7316 0.627165 24.3 0.577026C24.7751 0.598053 25.241 0.715241 25.6695 0.921501C26.098 1.12776 26.4802 1.41881 26.793 1.77703C29.724 4.71203 26.4 7.17703 26.4 7.17703ZM24.482 9.09703L7.42 26.166L0 28.577L2.412 21.152L19.472 4.08303L19.693 4.30403L24.482 9.09703ZM2.415 26.162L6.122 25.095L3.59 22.395L2.415 26.162Z"/>
        </svg>
    `;
}

const PencilIcon = (props) => {
    return <View style={props?.style ?? {}}>
        <SvgXml xml={icon(props.color)}/>
    </View>
}

export default PencilIcon;