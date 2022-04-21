import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { styles } from '../App';

export default function Results() {
	return (
		<View style={styles.container}>
			<Text>results</Text>
			<Pressable>
				<Text>Home</Text>
			</Pressable>
		</View>
	);
}
