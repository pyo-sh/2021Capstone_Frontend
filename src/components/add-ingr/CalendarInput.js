import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { Color, DefaultFont_KR } from '~/Constant';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalendarIcon from '~/components/icons/CalendarIcon';
import { dateToString } from '~/utils/date';

const CalendarInput = (props) => {
    const { date, setDate } = props;
    const [viewDate, setViewDate] = useState(dateToString(date));
    const [isOpen, setIsOpen] = useState(false);

    return <View style={styleSheet.wrapper}>
        <TouchableOpacity
            style={styleSheet.button}
            onPress={() => setIsOpen(true)}
        >
            <CalendarIcon
                style={{ marginRight: 20 }}
                color={"#76706B"}
            />
            <Text style={[DefaultFont_KR, {color: Color.primary_4}]}>{viewDate}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
            headerTextIOS={"뭔소리야 이거"}
            isVisible={isOpen}
            mode="date"
            date={date}
            onConfirm={(date) => {
                setIsOpen(false);
                setDate(date);
                setViewDate(`${dateToString(date)}`);
            }}
            onCancel={() => {
                setIsOpen(false);
            }}
            cancelTextIOS={"취소"}
            confirmTextIOS={"확인"}
        />
    </View>
}

const styleSheet = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    button: {
        width: '100%',
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.background,
        borderRadius: 10,
    },
});

export default CalendarInput;
