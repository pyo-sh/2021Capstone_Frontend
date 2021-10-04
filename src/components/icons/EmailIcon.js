import React from 'react';
import {
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const icon = (color) => {
    return `
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="${color}" d="M0 0V20H28V0H0ZM24 2L14 10.2L4 2H24ZM2 4L9.89999 10L2 16V4ZM4 18L11.9 11.6L14 13.2L16.1 11.6L24 18H4ZM26 16L18.1 10L26 4V16Z"/>
        </svg>
    `;
}

const EmailIcon = (props) => {
    return <View style={props?.style ?? {}}>
        <SvgXml xml={icon(props.color)}/>
    </View>
}

export default EmailIcon;