import React from "react";
import axios from "axios";
import findIndex from "./helpers";

const useQuizCardData = (lecture_id, session_uuid = null) => {
	const [quizCards, setQuizCards] = React.useState([]);

	React.useEffect(() => {
		axios.get(`/quiz/${lecture_id}`).then(res => {
			setQuizCards([...res.data]);
			// deal with session data later
		});
	}, []);

	const newQuizCard = (lecture_id, title, position) => {
		return axios
			.post(`/quiz/card`, {
				lecture_id,
				title,
				position
			})
			.then(res => {
				const id = res.data.id;
				setQuizCards(prev => [
					...prev,
					{ id, lecture_id, title, position, questions: [] }
				]);
			});
	};

	const newQuizQuestion = (quiz_card_id, question) => {
		return axios
			.post(`/quiz/question`, {
				quiz_card_id,
				question
			})
			.then(res => {
				const id = res.data.id;
				setQuizCards(prev => {
					const quizCardIndex = findIndex(prev, quiz_card_id);

					return [
						...prev.slice(quizCardIndex - 1, quizCardIndex),
						{
							...prev[quizCardIndex],
							questions: [...prev[quizCardIndex].questions, { id, question }]
						},
						...prev.slice(quizCardIndex + 1)
					];
				});
			});
	};

	const newQuizAnswer = (quiz_card_id, question) => {
		return axios
			.post(`/quiz/question`, {
				quiz_card_id,
				question
			})
			.then(res => {
				const id = res.data.id;
				// setQuizCards(prev => {
				// 	const quizCardIndex = findIndex(prev, quiz_card_id);

				// 	return [
				// 		...prev.slice(quizCardIndex - 1, quizCardIndex),
				// 		{
				// 			...prev[quizCardIndex],
				// 			questions: [...prev[quizCardIndex].questions, { id, question }]
				// 		},
				// 		...prev.slice(quizCardIndex + 1)
				// 	];
				// });
			});
	};

	return { quizCards, newQuizCard, newQuizQuestion };
};

export default useQuizCardData;
