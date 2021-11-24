import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Color } from "@src/Constant";

const icon = (isFocused, color) => {
	const focusedString = isFocused ? `fill="${color}"` : `stroke="${color}" stroke-width="2"`;
	return `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 24 24">
    <path ${focusedString} d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
    </svg>
  `;
};
const StarTabIcon = props => {
	return (
		<View style={props?.style ?? {}}>
			<SvgXml xml={icon(props.focused, Color.primary_1)} />
		</View>
	);
};

export default StarTabIcon;
