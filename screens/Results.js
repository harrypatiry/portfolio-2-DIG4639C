import React, { useState, createContext } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { styles } from '../App';

export default function Results({ navigation, score }) {
	return (
		<View style={styles.container}>
			<Text>results</Text>
				<Text>score: {score}</Text>
			<Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
				<Text style={styles.text}>Home</Text>
			</Pressable>
		</View>
	);
}
