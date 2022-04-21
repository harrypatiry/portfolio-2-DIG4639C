import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Imagine youre in a dark room that is perfectly empty with nothing in it. There are no windows or doors. What is the easiest way to escape?',
			answerOptions: [
				{ answerText: 'Stop imagining you are in that room', isCorrect: true },
				{ answerText: 'Die', isCorrect: false },
				{ answerText: 'Wait', isCorrect: false },
				{ answerText: 'Dig a hole in the ground with your bare hands', isCorrect: false },
			],
		},
		{
			questionText: 'This has beautiful marble-white walls and beautiful gold. Many thieves, like yourself, want the gold. The thing has no doors or windows. However, it breaks easily to reveal the gold. It is a what?',
			answerOptions: [
				{ answerText: 'Old palace', isCorrect: false },
				{ answerText: 'Museum attic', isCorrect: false },
				{ answerText: 'Egg', isCorrect: true },
				{ answerText: 'Ball', isCorrect: false },
			],
		},
	];

	return (
		<div className='app'>
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>This is where the question text should go</div>
					</div>
					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
		</div>
	);
}
