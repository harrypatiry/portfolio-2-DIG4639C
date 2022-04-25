import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../App';


export default function HistoryTrivia({ navigation }) {
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [showResults, setShowResults] = useState(false);
  let questions = [
    {
          title: "How many years did the 100 years war last?",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: false, title: "94 years" },
            { id: 1, correct: false, title: "102 years" },
            { id: 2, correct: false, title: "143 years" },
            { id: 3, correct: true, title: "116 years" },
          ],
        },
        {
          title: "In 1927, who became the first person to fly solo and non-stop across the Atlantic?",
          multipleAnswers: true,
          answers: [
            { id: 0, correct: false, title: "The Red Baron" },
            { id: 1, correct: true, title: "Charles Lindbergh" },
            { id: 2, correct: false, title: "Amelia Earhart" },
            { id: 3, correct: false, title: "Tom Cruise" },
          ],
        },
        {
            title: "Who was the first person to walk on the moon?",
            multipleAnswers: true,
            answers: [
              { id: 0, correct: false, title: "Buzz Aldrin" },
              { id: 1, correct: false, title: "John Glenn" },
              { id: 2, correct: true, title: "Neil Armstrong" },
              { id: 3, correct: false, title: "Betty Davis" },
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
