import React from 'react';
import {
    View
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const icon = (isFocused, color) => {
    const focusedString = isFocused ? `fill="${color}"` : `stroke="${color}" stroke-width="2"`;
    return `
        <svg width="34" height="32" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11.5H30V29H2V11.5ZM17.75 8H30L26.5 1H17.75V8ZM14.25 1H5.5L2 8H14.25V1Z"
                ${focusedString}
            />
        </svg>
    `
}
const MainTabIcon = (props) => {
    return <View>
        <SvgXml xml={icon(props.focused, Color.primary_1)}/>
    </View>
}

export default MainTabIcon;
