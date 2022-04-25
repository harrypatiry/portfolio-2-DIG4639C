import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../App';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
            <Pressable onPress={() => navigation.navigate("HistoryTrivia")} style={styles.button}>
                <Text style={styles.text}>History</Text>
            </Pressable>
			<Pressable onPress={() => navigation.navigate("GeoTrivia")} style={styles.button}>
                <Text style={styles.text}>Geography</Text>
            </Pressable>
			<Pressable onPress={() => navigation.navigate("ProgTrivia")} style={styles.button}>
                <Text style={styles.text}>Programming</Text>
            </Pressable>
		</View>
	);
}
