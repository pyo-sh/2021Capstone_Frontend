import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Color } from "@src/Constant";

const icon = (isFocused, color) => {
	const focusedString = isFocused ? `fill="${color}"` : `stroke="${color}" stroke-width="2"`;
	return `
        <svg width="34" height="32" viewBox="0 0 32 30" xmlns="http://www.w3.org/2000/svg">
        <path xmlns="http://www.w3.org/2000/svg" d="M28.1311 24.8269L21.5001 19.1859C20.9658 18.6482 20.2458 18.3358 19.4881 18.3129C21.2485 16.2489 22.1418 13.5836 21.9807 10.8756C21.8197 8.1676 20.6168 5.62702 18.6241 3.78625C16.6314 1.94547 14.0036 0.947367 11.2914 1.00108C8.57909 1.0548 5.99288 2.15617 4.07465 4.0744C2.15642 5.99264 1.05505 8.57885 1.00133 11.2911C0.947611 14.0034 1.94572 16.6312 3.78649 18.6238C5.62727 20.6165 8.16784 21.8194 10.8758 21.9805C13.5839 22.1416 16.2491 21.2483 18.3131 19.4879C18.336 20.2455 18.6485 20.9656 19.1861 21.4999L24.8271 28.1319C25.0317 28.3956 25.29 28.6128 25.585 28.7689C25.8799 28.9251 26.2048 29.0167 26.5379 29.0377C26.871 29.0586 27.2047 29.0085 27.5169 28.8905C27.8291 28.7725 28.1127 28.5894 28.3487 28.3534C28.5847 28.1174 28.7678 27.8339 28.8857 27.5217C29.0037 27.2095 29.0539 26.8757 29.0329 26.5426C29.012 26.2095 28.9204 25.8847 28.7642 25.5897C28.608 25.2948 28.3908 25.0364 28.1271 24.8319L28.1311 24.8269ZM11.5001 18.5009C10.1156 18.5009 8.76226 18.0903 7.61112 17.3212C6.45997 16.552 5.56277 15.4587 5.03295 14.1797C4.50314 12.9006 4.36452 11.4931 4.63461 10.1352C4.90471 8.77737 5.5714 7.53009 6.55036 6.55112C7.52933 5.57215 8.77661 4.90547 10.1345 4.63537C11.4923 4.36527 12.8998 4.5039 14.1789 5.03371C15.458 5.56352 16.5512 6.46073 17.3204 7.61187C18.0896 8.76302 18.5001 10.1164 18.5001 11.5009C18.5001 13.3574 17.7626 15.1379 16.4499 16.4506C15.1371 17.7634 13.3566 18.5009 11.5001 18.5009V18.5009Z"
                ${focusedString}
            />
        </svg>
    `;
};
const SearchTabIcon = props => {
	return (
		<View style={props?.style ?? {}}>
			<SvgXml xml={icon(props.focused, Color.primary_1)} />
		</View>
	);
};

export default SearchTabIcon;
