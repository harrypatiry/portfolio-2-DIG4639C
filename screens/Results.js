import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { styles } from '../App';

export default function Results({ navigation }) {
	const restartGame = () => {
        setScore(0);
        setQuestion(0);
        setShowResults(false);
      };
	return (
		<View style={styles.container}>
			<Text>results</Text>
				<Text>score: {score}</Text>
			<Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
				<Text style={styles.text}>Home</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => restartGame()}>
			</Pressable>
		</View>
	);
}
