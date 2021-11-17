import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Color } from "@src/Constant";

const icon = (isFocused, color) => {
	const focusedString = isFocused ? `fill="${color}"` : `stroke="${color}" stroke-width="2"`;
	return `
        <svg width="34" height="32" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 5.50007V28.2501H6C5.25486 28.2965 4.52153 28.0467 3.95966 27.5551C3.3978 27.0635 3.05288 26.3698 3 25.6251C3.05288 24.8803 3.3978 24.1867 3.95966 23.695C4.52153 23.2034 5.25486 22.9536 6 23.0001H25V2.00007H5C4.00719 1.94114 3.03106 2.27524 2.28258 2.93016C1.5341 3.58508 1.07338 4.50822 1 5.50007V26.5001C1.07338 27.4919 1.5341 28.4151 2.28258 29.07C3.03106 29.7249 4.00719 30.059 5 30.0001H29V5.50007H27Z"
                ${focusedString}
            />
        </svg>
    `;
};
const RecipesTabIcon = props => {
	return (
		<View style={props?.style ?? {}}>
			<SvgXml xml={icon(props.focused, Color.primary_1)} />
		</View>
	);
};

export default RecipesTabIcon;
