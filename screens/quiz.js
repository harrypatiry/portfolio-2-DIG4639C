import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native-web';

export default function Quiz() {
	return (
		<View style={styles.container}>
			<Text>Quiz</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		paddingHorizontal: 16,
	},
})