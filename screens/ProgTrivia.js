import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../App';


export default function ProgTrivia({ navigation }) {
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [showResults, setShowResults] = useState(false);
  let questions = [
    {
          title: "What is the two digit numeric system, that only uses 0 and 1, that computers operate using?",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: false, title: "Morse" },
            { id: 1, correct: false, title: "BASIC" },
            { id: 2, correct: false, title: "C#" },
            { id: 3, correct: true, title: "Binary" },
          ],
        },
        {
          title: "What does HTTP stand for?",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: true, title: "HyperText Transfer Protocol" },
            { id: 1, correct: false, title: "Houses Try The Pie" },
            { id: 2, correct: false, title: "HyperText Transition Process" },
            { id: 3, correct: false, title: "Hornets Take The Property" },
          ],
        },
        {
            title: "Who created the game Minecraft",
            multipleAnswers: true,
            answers: [
              { id: 0, correct: false, title: "Jordan Peterson" },
              { id: 1, correct: true, title: "Markus Persson" },
              { id: 2, correct: false, title: "Brad Pitt" },
              { id: 3, correct: false, title: "Dolly Parton" },
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
