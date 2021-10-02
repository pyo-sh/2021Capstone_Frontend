import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Color } from '~/Constant';
import SearchInput from '~/components/search/SearchInput';

const Search = () => {
    const [text, setText] = useState('');

    return <View>
        <View style={styleSheet.topSide}>
            <SearchInput
                text={text}
                onChangeText={(value) => setText(value)}
                placeholder={"재료 이름을 검색하세요"}
                onSubmitEditing={() => console.log(text)}
            />
        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    topSide: {
        width: '100%',
        height: 100,
        paddingVertical: 17,
        paddingHorizontal: 30,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

export default Search;
