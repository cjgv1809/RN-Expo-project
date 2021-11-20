import React from "react"
import { View, Modal, ScrollView, useWindowDimensions } from "react-native"
import { Icon } from "react-native-elements"
import * as Animatable from "react-native-animatable"
import styles from "./styles"
import { Button } from "react-native-elements/dist/buttons/Button"

const InfoModal = ({ visible, onPress }) => {
	const { width } = useWindowDimensions()
	return (
		<Modal animationType="fade" visible={visible} transparent>
			<View
				style={{
					...styles.modalContainer,
					marginTop: width < 350 ? "38%" : "30%",
				}}
			>
				<ScrollView>
					<Animatable.Text
						animation="fadeInUpBig"
						duration={1500}
						style={styles.textModal}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam rhoncus purus et lectus accumsan tincidunt. Donec
						in est viverra, congue felis et, imperdiet erat. Cras
						tristique velit eget magna dictum maximus. Morbi rutrum
						dui molestie, consectetur arcu eget, convallis lectus.
						Donec in ante dui. Aliquam sed facilisis massa. Proin eu
						sapien feugiat massa sollicitudin commodo. Nullam nec
						eleifend magna, nec congue ex. Interdum et malesuada
						fames ac ante ipsum primis in faucibus. In hac habitasse
						platea dictumst. In posuere euismod mi id auctor. Etiam
						scelerisque feugiat urna, eu sollicitudin risus. Vivamus
						lorem nulla, consectetur at justo at, sagittis venenatis
						turpis. Nulla erat arcu, varius sed blandit ut, iaculis
						quis ipsum. Morbi venenatis eros accumsan ante faucibus
						porttitor. Nullam vel ullamcorper mauris. Cras consequat
						neque tortor, ut hendrerit mauris laoreet et. Cras vitae
						ante vitae quam ultrices vulputate. Integer pretium
						metus sed velit finibus scelerisque. Proin a tellus non
						orci vulputate vehicula. Ut ultrices, metus et posuere
						egestas, odio arcu rhoncus turpis, a egestas lectus elit
						et augue.
					</Animatable.Text>
				</ScrollView>
				<View style={styles.btnContainer}>
					<Button
						icon={<Icon name="close" color="#fff" />}
						iconRight="true"
						title="Cerrar"
						onPress={onPress}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default InfoModal
