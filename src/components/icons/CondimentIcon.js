import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const icon = color => {
	return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" viewBox="0 0 54 54" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 54) scale(0.1, -0.1)" fill=${color ?? "#000000"} stroke="none">
        <path d="M171 512 c-50 -25 -60 -46 -39 -82 9 -16 14 -39 11 -50 -3 -13 0 -25 7 -30 10 -6 7 -39 -15 -156 l-28 -147 21 -18 c28 -22 117 -31 207 -22 98 11 101 18 69 198 -22 127 -22 141 -8 152 10 7 13 19 9 32 -3 11 -1 29 5 41 15 29 -11 75 -51 89 -49 17 -149 14 -188 -7z m169 -20 c47 -23 50 -64 5 -73 -21 -5 -24 -7 -9 -8 12 0 27 -7 33 -15 17 -20 1 -28 -73 -33 -96 -8 -178 23 -101 38 l30 5 -32 8 c-38 9 -49 31 -28 62 23 36 118 45 175 16z m22 -183 c41 -205 45 -251 23 -269 -21 -18 -171 -19 -212 -1 -40 16 -40 22 -10 181 l23 115 74 6 c97 7 93 8 102 -32z"/>
        <path d="M210 470 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/>
        <path d="M260 470 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/>
        <path d="M305 470 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0 -13 -4 -16 -10z"/>
        <path d="M207 313 c-3 -4 -8 -44 -12 -88 -3 -44 -9 -92 -11 -108 -4 -19 -1 -27 9 -27 10 0 16 26 24 108 9 95 5 140 -10 115z"/>
        <path d="M236 189 c-11 -55 -7 -89 9 -89 12 0 15 13 15 60 0 64 -13 80 -24 29z"/>
      </g>
    </svg>
    `;
};

const CondimentIcon = ({ style, color }) => {
	return (
		<View style={style ?? {}}>
			<SvgXml xml={icon(color)} />
		</View>
	);
};

export default CondimentIcon;
