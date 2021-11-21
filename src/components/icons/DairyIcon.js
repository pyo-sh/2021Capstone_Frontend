import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const icon = color => {
	return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" viewBox="0 0 70 70" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 70) scale(0.1, -0.1)" fill=${color ?? "#000000"} stroke="none">
        <path d="M122 668 c-14 -14 -16 -64 -2 -73 5 -3 1 -25 -11 -53 -37 -84 -49 -168 -49 -344 0 -122 3 -169 12 -175 7 -4 43 -6 80 -4 37 1 75 -2 85 -7 16 -8 355 20 391 33 8 3 12 33 12 104 l0 99 -59 51 -60 52 -80 -41 -81 -40 0 53 c0 59 -30 189 -54 236 -10 19 -12 32 -6 36 14 9 13 58 -2 73 -7 7 -42 12 -88 12 -46 0 -81 -5 -88 -12z m168 -38 c0 -18 -7 -20 -80 -20 -73 0 -80 2 -80 20 0 18 7 20 80 20 73 0 80 -2 80 -20z m2 -100 c14 -30 25 -56 24 -57 -1 -2 -16 3 -33 9 -26 10 -38 9 -71 -6 -36 -17 -42 -17 -70 -2 l-31 16 16 37 c24 59 31 64 87 61 l51 -3 27 -55z m3 -80 c34 -21 45 -58 45 -151 0 -36 -3 -40 -50 -64 l-50 -25 0 -85 0 -85 -80 0 -80 0 0 148 c0 131 11 257 24 269 2 3 20 -1 40 -8 30 -11 40 -10 68 3 43 22 45 22 83 -2z m241 -158 c4 4 21 -3 38 -15 l31 -22 -40 -6 c-33 -6 -43 -4 -56 13 -20 25 -64 19 -72 -10 -3 -15 -17 -20 -58 -25 -30 -2 -55 -4 -57 -2 -1 1 39 22 90 47 83 40 94 43 105 29 6 -9 15 -13 19 -9z m-46 -42 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m130 -61 c0 -30 -6 -46 -22 -59 -20 -15 -21 -21 -10 -44 9 -20 9 -26 -1 -26 -6 0 -70 -7 -142 -15 -72 -8 -143 -15 -158 -15 l-28 0 3 83 3 82 140 16 c77 9 157 17 178 18 37 1 37 1 37 -40z m0 -89 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"/>
        <path d="M525 200 c-8 -12 20 -24 35 -15 6 3 8 11 5 16 -8 12 -32 12 -40 -1z"/>
        <path d="M284 169 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/>
        <path d="M430 146 c-18 -22 -5 -48 22 -44 17 2 23 10 23 28 0 29 -26 38 -45 16z m30 -16 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z"/>
        <path d="M290 84 c-11 -12 -10 -18 3 -32 16 -15 18 -15 34 0 13 14 14 20 3 32 -16 20 -24 20 -40 0z m30 -14 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"/>
      </g>
    </svg>
    `;
};

const DairyIcon = ({ style, color }) => {
	return (
		<View style={style ?? {}}>
			<SvgXml xml={icon(color)} />
		</View>
	);
};

export default DairyIcon;