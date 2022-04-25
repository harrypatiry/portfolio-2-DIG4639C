import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../App';


export default function GeoTrivia({ navigation }) {
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [showResults, setShowResults] = useState(false);
  let questions = [
    {
          title: "What is the largest country in the world?",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: true, title: "Russia" },
            { id: 1, correct: false, title: "United States" },
            { id: 2, correct: false, title: "China" },
            { id: 3, correct: false, title: "Australia" },
          ],
        },
        {
          title: "Where are the Spanish Steps located?",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: false, title: "Spain" },
            { id: 1, correct: true, title: "Italy" },
            { id: 2, correct: false, title: "France" },
            { id: 3, correct: false, title: "England" },
          ],
        },
        {
            title: "Where was the first organized marathon held?",
            multipleAnswers: true,
            answers: [
              { id: 0, correct: false, title: "Italy" },
              { id: 1, correct: false, title: "Spain" },
              { id: 2, correct: true, title: "Greece" },
              { id: 3, correct: false, title: "China" },
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
      return (
        <div>
          {showResults ? (
            <div>
              <h2>score: {score}</h2>
              <Pressable score={score} onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.text}>Home</Text>
              </Pressable>
            </div>
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
            </div>
          )}
        </div>
      );
}
