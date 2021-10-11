import React, { useRef, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Color } from '~/Constant';
import SearchIcon from '~/components/icons/SearchIcon';

const SlideRightView = (props) => {
    const iconX = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(
            iconX,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    }, [iconX]);

    return (
        <Animated.View
            style={[
                props?.style ?? {},
                {
                    transform: [{
                        translateX: iconX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [25, 0]
                        })
                    }]
                },
            ]}
        >
            {props.children}
        </Animated.View>
    );
}

const SearchInput = (props) => {
    const { text, onChangeText, placeholder, onSubmitEditing, style} = props;

    return <View style={[styleSheet.wrapper, (style ?? {})]}>
        <TextInput
            style={styleSheet.input}
            value={text}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
        />
        <View style={styleSheet.interactive}>
            {(text)
            ? <SlideRightView style={{ position: 'absolute', zIndex: 3 }}>
                <TouchableOpacity
                    onPress={onSubmitEditing}
                    index={1}
                >
                    <SearchIcon/>
                </TouchableOpacity>
            </SlideRightView>
            : <></>
            }
        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 47,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        backgroundColor: Color.background,
        borderRadius: 8,
    },
    interactive: {
        position: 'relative',
        bottom: 11,
        right: 40,
    },
});

export default SearchInput;
