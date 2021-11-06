import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const icon = color => {
	return `
        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.55703 38.4458C1.55703 38.4458 0.403027 20.8608 19.138 20.8608C37.873 20.8608 36.719 38.4418 36.719 38.4418" stroke="${color}" stroke-width="2"/>
            <path d="M19.638 20.9609C24.8847 20.9609 29.138 16.7076 29.138 11.4609C29.138 6.21423 24.8847 1.96094 19.638 1.96094C14.3913 1.96094 10.138 6.21423 10.138 11.4609C10.138 16.7076 14.3913 20.9609 19.638 20.9609Z" stroke="${color}" stroke-width="2"/>
        </svg>
    `;
};

const PersonIcon = props => {
	return (
		<View style={props?.style ?? {}}>
			<SvgXml xml={icon(props.color)} />
		</View>
	);
};

export default PersonIcon;
