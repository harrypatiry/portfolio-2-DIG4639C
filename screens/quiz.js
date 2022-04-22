import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, Pressable, FlatList, Card, CheckBox } from 'react-native';
import { styles } from '../App';

export default function Quiz({ navigation }) {
    let questions = [
        {
          title: "Question Title",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: false, title: "Question 1" },
            { id: 1, correct: false, title: "Question 2" },
            { id: 2, correct: false, title: "Question 3" },
            { id: 3, correct: true, title: "Question 4" },
          ],
        },
        {
          title: "Question Title 2",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: false, title: "Question A" },
            { id: 1, correct: true, title: "Question B" },
            { id: 2, correct: false, title: "Question C" },
            { id: 3, correct: false, title: "Question D" },
          ],
        },
      ];
      let [question, setQuestion] = useState(0);
      let [score, setScore] = useState(0);
      let [showResults, setShowResults] = useState(false);

    let answer = (correct) => {
        if (correct) {
          setScore(score + 1);
        }
    
        if (question + 1 < questions.length) {
          setQuestion(question + 1);
        } else {
          setShowResults(true);
        }
      };
    
	return (
        <View style={styles.container}>
            <Text>Quiz Application</Text>
          <Text>Question: {question + 1} out of {questions.length}</Text>
          <Text>{questions[question].title}</Text>
              {questions[question].answers.map((answers) => {
                return (
                  <Pressable 
                  key={answers.id}
                  onClick={() => answer(answers.correct)}
                  title={answers.title}
                  >
              </Pressable>
              );
            })}
          <StatusBar style="auto"></StatusBar>
        </View>
      );
}