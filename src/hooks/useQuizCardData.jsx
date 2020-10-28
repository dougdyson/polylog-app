import React from "react";
import axios from "axios";
import {
	reducer,
	SET,
	NEW,
	EDIT,
	DELETE,
	SET_QUIZ_ACTIVITY,
	NEW_QUIZ_Q_OR_R,
	NEW_QUIZ_ANSWER,
	EDIT_QUIZ_QUESTION,
	EDIT_QUIZ_ANSWER,
	DELETE_QUIZ_QUESTION,
	DELETE_QUIZ_ANSWER
} from "../reducers/reducer";

const useQuizCardData = (lecture_id, session_uuid = null) => {
	const [quizCards, dispatch] = React.useReducer(reducer, []);

	React.useEffect(() => {
		axios.get(`/quiz/card/${lecture_id}`).then(res => {
			dispatch({ type: SET, data: res.data });

			if (session_uuid) {
				res.data.forEach(quizCard => {
					const card_id = quizCard.id;
					axios
						.get(`/quiz/responses/${card_id}`, { params: { session_uuid } })
						.then(res => {
							dispatch({ type: SET_QUIZ_ACTIVITY, card_id, data: res.data });
						});
				});
			}
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
				dispatch({
					type: NEW,
					data: { id, lecture_id, title, position, questions: [] }
				});
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
				dispatch({
					type: NEW_QUIZ_Q_OR_R,
					key: "questions",
					quiz_card_id,
					data: { id, question, answers: [] }
				});
			});
	};

	const newQuizAnswer = (quiz_question_id, answer, correct) => {
		return axios
			.post(`/quiz/answer`, {
				quiz_question_id,
				answer,
				correct
			})
			.then(res => {
				const id = res.data.id;
				const quiz_card_id = res.data.quiz_card_id;
				dispatch({
					type: NEW_QUIZ_ANSWER,
					quiz_card_id,
					quiz_question_id,
					data: { id, quiz_question_id, answer, correct }
				});
			});
	};

	const newQuizResponse = (
		quiz_card_id,
		quiz_answer_id,
		session_id,
		student_id
	) => {
		return axios
			.post(`/quiz/response`, {
				quiz_card_id,
				quiz_answer_id,
				session_id,
				student_id
			})
			.then(res => {
				dispatch({
					type: NEW_QUIZ_Q_OR_R,
					key: "activity",
					quiz_card_id,
					data: { ...res.data }
				});
			});
	};

	const editQuizCard = (quiz_card_id, title, position) => {
		return axios
			.put(`/quiz/card/${quiz_card_id}`, {
				title,
				position
			})
			.then(() => {
				dispatch({
					type: EDIT,
					card_id: quiz_card_id,
					data: { title, position }
				});
			});
	};

	const editQuizQuestion = (quiz_question_id, question) => {
		return axios
			.put(`/quiz/question/${quiz_question_id}`, {
				question
			})
			.then(res => {
				const quiz_card_id = res.data.quiz_card_id;
				dispatch({
					type: EDIT_QUIZ_QUESTION,
					quiz_card_id,
					quiz_question_id,
					question
				});
			});
	};

	const editQuizAnswer = (quiz_answer_id, answer, correct) => {
		return axios
			.put(`/quiz/answer/${quiz_answer_id}`, {
				answer,
				correct
			})
			.then(res => {
				const quiz_card_id = res.data.quiz_card_id;
				const quiz_question_id = res.data.quiz_question_id;
				dispatch({
					type: EDIT_QUIZ_ANSWER,
					quiz_card_id,
					quiz_question_id,
					quiz_answer_id,
					answer,
					correct
				});
			});
	};

	const deleteQuizCard = quiz_card_id => {
		return axios.delete(`/quiz/card/${quiz_card_id}`).then(() => {
			dispatch({ type: DELETE, card_id: quiz_card_id });
		});
	};

	const deleteQuizQuestion = quiz_question_id => {
		return axios.delete(`/quiz/question/${quiz_question_id}`).then(res => {
			const quiz_card_id = res.data.quiz_card_id;
			dispatch({ type: DELETE_QUIZ_QUESTION, quiz_card_id, quiz_question_id });
		});
	};

	const deleteQuizAnswer = quiz_answer_id => {
		return axios.delete(`/quiz/answer/${quiz_answer_id}`).then(res => {
			const quiz_card_id = res.data.quiz_card_id;
			const quiz_question_id = res.data.quiz_question_id;
			dispatch({
				type: DELETE_QUIZ_ANSWER,
				quiz_card_id,
				quiz_question_id,
				quiz_answer_id
			});
		});
	};

	return {
		quizCards,
		newQuizCard,
		newQuizQuestion,
		newQuizAnswer,
		newQuizResponse,
		editQuizCard,
		editQuizQuestion,
		editQuizAnswer,
		deleteQuizCard,
		deleteQuizQuestion,
		deleteQuizAnswer
	};
};

export default useQuizCardData;
