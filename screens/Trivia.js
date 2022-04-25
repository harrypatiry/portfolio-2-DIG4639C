import React, { createContext, useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { styles } from '../App';


export default function Trivia({ navigation, props }) {
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [showResults, setShowResults] = useState(false);
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
      let finalScore = score;
      return (
        <div>
          {showResults ? (
              <Pressable score={score} onPress={() => navigation.navigate("Results")} style={styles.button}>
                <Text style={styles.text}>Results</Text>
              </Pressable>
          ) : (
            <div>
              <h2>
                Question: {question + 1} out of {questions.length}
              </h2>
              <h3>{questions[question].title}</h3>
              <ul>
                {questions[question].answers.map((answers) => {
                  return (
                    <button
                      styles={styles.button}
                      key={answers.id}
                      onClick={() => answer(answers.correct)}
                    >
                      {answers.title}
                    </button>
                  );
                })}
              </ul>
              <p>{score}</p>
            </div>
          )}
        </div>
      );
}
