import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { styleSheet } from '~/lib/CustomStyle';

const Div = (props) => {	
	const { index, onPress, children, className, style } = props;

    let styleArr = []
	if(style) {
        styleArr.push(style);
    }
	if(className) {
		className.split(' ').forEach((item) => {
			if(item === "") return;
	  	    styleArr.push(styleSheet[item]);
		})
	}

	if(onPress) {
        return <TouchableOpacity key={index} onPress={onPress} style={styleArr}>
            {children}
        </TouchableOpacity>		
	}
    else {
        return <View key={index} style={styleArr}>
            {children}
        </View>		
	}
}

export default Div;
