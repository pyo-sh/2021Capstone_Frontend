import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import SearchInput from '~/components/search/SearchInput';
import CalendarInput from '~/components/add-ingr/CalendarInput';
import RadioBtn from '~/components/add-ingr/RadioBtn';
import PlusIcon from '~/components/icons/PlusIcon';
import MinusIcon from '~/components/icons/MinusIcon';
import { Color, DefaultFont_KR } from '~/Constant';

const AddIngr = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);

    return <View style={styleSheet.wrapper}>
        <View style={styleSheet.otherwise}>
            <Text style={[styleSheet.title, {fontSize: 16}]}>식자재 가져오기</Text>
            <View style={styleSheet.flexLine}>
                <TouchableOpacity style={styleSheet.otherBtn}>
                    <Text style={styleSheet.otherText}>쇼핑몰</Text>
                    <Text style={styleSheet.otherText}>주문목록</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSheet.otherBtn}>
                    <Text style={styleSheet.otherText}>영수증</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSheet.otherBtn}>
                    <Text style={styleSheet.otherText}>바코드</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styleSheet.controls}>
            <View style={styleSheet.flexLine}>
                <Text style={styleSheet.controlTitle}>
                    식자재 명
                </Text>
                <SearchInput
                    style={{flex: 1, height: 40}}
                    text={name}
                    onChangeText={(value) => setName(value)}
                    placeholder={"이름 입력"}
                    // onSubmitEditing={() => console.log(value)}
                />
            </View>
            <View style={styleSheet.flexLine}>
                <Text style={styleSheet.controlTitle}>
                    보관 방법
                </Text>
                <View style={styleSheet.radioBack}>
                    <RadioBtn
                        nowVal={type}
                        value={'a'}
                        setValue={setType}
                        text={"실온"}
                    />
                    <RadioBtn
                        nowVal={type}
                        value={'r'}
                        setValue={setType}
                        text={"냉장"}
                    />
                    <RadioBtn
                        nowVal={type}
                        value={'f'}
                        setValue={setType}
                        text={"냉동"}
                    />
                </View>
            </View>
            <View style={styleSheet.flexLine}>
                <Text style={styleSheet.controlTitle}>
                    유통 기한
                </Text>
                <CalendarInput
                    date={date}
                    setDate={setDate}
                />
            </View>
            <View style={[styleSheet.flexLine, {justifyContent: 'flex-start'}]}>
                <View style={styleSheet.flexSquare}>
                    <Text style={[styleSheet.controlTitle, { marginBottom: 15 }]}>
                        수량
                    </Text>
                    <View style={[styleSheet.flexLine, { width: 130, paddingHorizontal: 10, justifyContent:'space-between' }]}>
                        <TouchableOpacity
                            style={styleSheet.countBtn}
                            onPress={() => {setCount((prev) => {
                                if(prev == 0) return 0;
                                else return prev - 1;
                            })}}
                        >
                            <MinusIcon
                                color={Color.white}
                                width={15}
                                height={2}
                            />
                        </TouchableOpacity>
                        <Text>{count}</Text>
                        <TouchableOpacity
                            style={styleSheet.countBtn}
                            onPress={() => {setCount(prev => prev + 1)}}
                        >
                            <PlusIcon
                                color={Color.white}
                                width={15}
                                height={15}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styleSheet.flexSquare}>
                    <Text style={[styleSheet.controlTitle, { marginBottom: 15 }]}>
                        보관할 냉장고
                    </Text>
                    <View style={{height: 30, marginTop: 15}}>

                    </View>
                </View>
            </View>
        </View>
        <TouchableOpacity style={styleSheet.submitBtn}>
            <Text style={[styleSheet.controlTitle, { fontSize: 20, marginRight:0 }]}>등록하기</Text>
        </TouchableOpacity>
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.background,
    },
    otherwise: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 8,
        marginVertical: 10,
        backgroundColor: Color.white,
    },
    title: {
        marginBottom: 12,
        ...DefaultFont_KR,
        color: Color.primary_4,
    },
    flexLine: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    otherBtn: {
        height: 72,
        padding: 10,
        margin: 5,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.primary_4,
    },
    otherText: {
        ...DefaultFont_KR,
        color: Color.primary_1,
    },
    controls: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 35,
        backgroundColor: Color.white,
    },
    controlTitle: {
        ...DefaultFont_KR,
        color: Color.primary_4,
        fontSize: 15,
        marginRight: 16,
    },
    radioBack: {
        height: 40,
        flex: 1,
        backgroundColor: Color.background,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    flexSquare: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    countBtn: {
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Color.primary_2,
    },
    submitBtn: {
        width: '100%',
        height: 55,
        marginTop: 'auto',
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary_2,
    },
});

export default AddIngr;
