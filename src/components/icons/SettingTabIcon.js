import React from 'react';
import {
    View
} from 'react-native';
import { Color } from '~/Constant';
import { SvgXml } from 'react-native-svg';

const icon = (isFocused, color) => {
    const focusedString = isFocused ? `fill="${color}"` : `stroke="${color}" stroke-width="2"`;
    return `
        <svg width="34" height="32" viewBox="0 0 34 28" xmlns="http://www.w3.org/2000/svg">
        <path xmlns="http://www.w3.org/2000/svg" d="M19 15C11.271 15 5 19.7 5 25.5C5 27.435 7.087 29 9.667 29H28.333C30.913 29 33 27.435 33 25.5C33 19.7 26.729 15 19 15ZM12 6.25C12 3.35 15.134 1 19 1C22.866 1 26 3.35 26 6.25C26 9.15 22.866 11.5 19 11.5C15.134 11.5 12 9.15 12 6.25Z"
                ${focusedString}
                shape-rendering="crispEdges"
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
