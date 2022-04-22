import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { styles } from '../App';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
            <Pressable onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.text}>Begin Quiz</Text>
            </Pressable>
		</View>
	);
}
