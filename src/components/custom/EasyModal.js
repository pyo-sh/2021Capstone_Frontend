import React, { useState, useCallback } from "react";
import { StyleSheet, View, Modal } from "react-native";

const EasyModal = ({ renderModalButton, renderModalContent }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const openModal = useCallback(() => {
		setModalVisible(true);
	}, []);
	const closeModal = useCallback(() => {
		setModalVisible(false);
	}, []);

	return (
		<>
			{renderModalButton({ openModal })}
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={closeModal}
			>
				<View style={styleSheet.centeredView}>
					{renderModalContent({ openModal, closeModal })}
				</View>
			</Modal>
		</>
	);
};

const styleSheet = StyleSheet.create({
	centeredView: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
});

export default EasyModal;
