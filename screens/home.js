import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native-web';

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		paddingHorizontal: 16,
	},
})