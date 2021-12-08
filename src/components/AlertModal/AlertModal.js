import React from "react"
import AwesomeAlert from "react-native-awesome-alerts"
import styles from "./styles"

const AlertModal = ({
	show,
	onConfirmPressed,
	title,
	message,
	confirmText,
	showCancelButton,
	onCancelPressed,
	cancelText,
	confirmButtonColor,
	cancelButtonColor,
}) => {
	return (
		<AwesomeAlert
			show={show}
			showProgress={false}
			title={title}
			message={message}
			closeOnTouchOutside={false}
			closeOnHardwareBackPress={true}
			showCancelButton={showCancelButton}
			showConfirmButton={true}
			cancelText={cancelText}
			confirmText={confirmText}
			confirmButtonColor={confirmButtonColor}
			cancelButtonColor={cancelButtonColor}
			onConfirmPressed={onConfirmPressed}
			onCancelPressed={onCancelPressed}
			contentContainerStyle={styles.styleAlert}
			overlayStyle={styles.overlayStyle}
			titleStyle={styles.titleStyle}
			messageStyle={styles.messageStyle}
		/>
	)
}

export default AlertModal
