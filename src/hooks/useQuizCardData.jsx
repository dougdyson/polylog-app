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

const useQuizCardData = (lecture_id, session_id = null) => {
	const [quizCards, dispatch] = React.useReducer(reducer, []);

	React.useEffect(() => {
		axios.get(`/quiz/card/${lecture_id}`).then(res => {
			dispatch({ type: SET, data: res.data });

			if (session_id) {
				res.data.forEach(quizCard => {
					const card_id = quizCard.id;
					axios
						.get(`/quiz/responses/${card_id}`, { params: { session_id } })
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
				!session_id &&
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
				!session_id &&
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
				!session_id &&
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
		return axios.post(`/quiz/response`, {
			quiz_card_id,
			quiz_answer_id,
			session_id,
			student_id
		});
	};

	const editQuizCard = (quiz_card_id, title, position) => {
		return axios
			.put(`/quiz/card/${quiz_card_id}`, {
				title,
				position
			})
			.then(() => {
				!session_id &&
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
				!session_id &&
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

	React.useEffect(() => {
		if (session_id) {
			const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

			// webSocket.onopen = () => {
			// 	webSocket.send("ping");
			// };

			webSocket.onmessage = event => {
				// from hook send session_id to body of post/put/delete
				// than the ws call can send a current_session_id
				// if session_id === current_session_id

				const data = JSON.parse(event.data);
				console.log(data);

				const quiz_card_id = data.quiz_card_id;
				const lecture_id = data.lecture_id;
				const title = data.title;
				const position = data.position;

				const quiz_question_id = data.quiz_question_id;
				const question = data.question;

				const quiz_answer_id = data.quiz_answer_id;
				const answer = data.answer;
				const correct = data.correct;

				const quiz_response_id = data.quiz_response_id;
				const student_id = data.student_id;

				switch (data.type) {
					case "NEW_QUIZ_CARD":
						return dispatch({
							type: NEW,
							data: {
								id: quiz_card_id,
								lecture_id,
								title,
								position,
								questions: []
							}
						});
					case "NEW_QUIZ_QUESTION":
						return dispatch({
							type: NEW_QUIZ_Q_OR_R,
							key: "questions",
							quiz_card_id,
							data: { id: quiz_question_id, question, answers: [] }
						});
					case "NEW_QUIZ_ANSWER":
						return dispatch({
							type: NEW_QUIZ_ANSWER,
							quiz_card_id,
							quiz_question_id,
							data: { id: quiz_answer_id, quiz_question_id, answer, correct }
						});
					case "NEW_QUIZ_RESPONSE":
						return dispatch({
							type: NEW_QUIZ_Q_OR_R,
							key: "activity",
							quiz_card_id,
							data: {
								id: quiz_response_id,
								quiz_question_id,
								quiz_answer_id,
								student_id
							}
						});
					case "EDIT_QUIZ_CARD":
						return dispatch({
							type: EDIT,
							card_id: quiz_card_id,
							data: { title, position }
						});
					case "EDIT_QUIZ_QUESTION":
						return dispatch({
							type: EDIT_QUIZ_QUESTION,
							quiz_card_id,
							quiz_question_id,
							question
						});
					default:
						throw new Error(
							`Tried to reduce with unsupported action type: ${data.type}`
						);
				}
			};

			return () => {
				webSocket.close();
			};
		}
	}, []);

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
