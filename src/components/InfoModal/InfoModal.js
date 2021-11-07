import React from "react"
import { View, Text, Modal, ScrollView } from "react-native"
import { FAB, Icon } from "react-native-elements"
import styles from "./styles"

const InfoModal = ({ visible, onPress }) => {
	return (
		<Modal
			animationType="fade"
			visible={visible}
			transparent={true}
			style={styles.modalContainer}
		>
			<View style={styles.modalContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={styles.textModal}>
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
						et augue. Aliquam eu enim eget libero condimentum
						vestibulum ac eu est. Pellentesque sagittis vestibulum
						rutrum. Nunc consectetur mauris vel volutpat semper.
						Nunc aliquet tellus a ante sollicitudin, eu commodo
						lacus fringilla. Curabitur lacinia tristique nibh sed
						tincidunt. Mauris placerat purus vel lacus tincidunt
						laoreet. Donec condimentum dictum sem, in interdum neque
						congue fermentum. Nam malesuada quam ut ex sagittis,
						vitae dignissim tortor ullamcorper. Nullam ligula est,
						vestibulum a auctor et, egestas sit amet urna. Fusce
						quis dui ipsum. Donec commodo massa at dictum ultrices.
						In hac habitasse platea dictumst. Duis mollis auctor
						lacus fermentum pulvinar. Mauris eget lectus tempus
						massa tincidunt ultricies ac in leo. Vivamus malesuada
						ullamcorper orci quis pretium.
					</Text>
				</ScrollView>
				<FAB
					icon={<Icon name="close" color="#fff" />}
					iconRight="true"
					title="Cerrar"
					color="gray"
					size="small"
					style={styles.fabBtn}
					onPress={onPress}
				/>
			</View>
		</Modal>
	)
}

export default InfoModal
