import React from "react";
import axios from "axios";
import findIndex from "./helpers";

const useQuizCardData = (lecture_id, session_uuid = null) => {
	const [quizCards, setQuizCards] = React.useState([]);

	React.useEffect(() => {
		axios.get(`/quiz/card/${lecture_id}`).then(res => {
			setQuizCards([...res.data]);

			if (session_uuid) {
				res.data.forEach(quizCard => {
					const id = quizCard.id;
					axios
						.get(`/quiz/responses/${id}`, { params: { session_uuid } })
						.then(res => {
							setQuizCards(prev => {
								const quizCardIndex = findIndex(prev, id);

								return [
									...prev.slice(quizCardIndex - 1, quizCardIndex),
									{ ...prev[quizCardIndex], activity: [...res.data] },
									...prev.slice(quizCardIndex + 1)
								];
							});
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

	const newQuizAnswer = (quiz_question_id, answer, correct) => {
		return axios
			.post(`/quiz/answer`, {
				quiz_question_id,
				answer,
				correct
			})
			.then(res => {
				const id = res.data.id;
				setQuizCards(prev => {
					const quizCardIndex = findIndex(prev, res.data.quiz_card_id);
					const quizQuestions = prev[quizCardIndex].questions;
					const quizQuestionIndex = findIndex(quizQuestions, quiz_question_id);

					return [
						...prev.slice(quizCardIndex - 1, quizCardIndex),
						{
							...prev[quizCardIndex],
							questions: [
								...quizQuestions.slice(
									quizQuestionIndex - 1,
									quizQuestionIndex
								),
								{
									...quizQuestions[quizQuestionIndex],
									answers: [
										...quizQuestions[quizQuestionIndex].answers,
										{ id, quiz_question_id, answer, correct }
									]
								},
								...quizQuestions.slice(quizQuestionIndex + 1)
							]
						},
						...prev.slice(quizCardIndex + 1)
					];
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
				setQuizCards(prev => {
					const quizCardIndex = findIndex(prev, quiz_card_id);

					return [
						...prev.slice(quizCardIndex - 1, quizCardIndex),
						{
							...prev[quizCardIndex],
							activity: [...prev[quizCardIndex].activity, { ...res.data }]
						},
						...prev.slice(quizCardIndex + 1)
					];
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
				setQuizCards(prev => {
					const quizCardIndex = findIndex(prev, quiz_card_id);

					return [
						...prev.slice(quizCardIndex - 1, quizCardIndex),
						{ ...prev[quizCardIndex], title, position },
						...prev.slice(quizCardIndex + 1)
					];
				});
			});
	};

	const editQuizQuestion = (quiz_question_id, question) => {
		return axios
			.put(`/quiz/question/${quiz_question_id}`, {
				question
			})
			.then(res => {
				setQuizCards(prev => {
					const quizCardIndex = findIndex(prev, res.data.quiz_card_id);
					const quizQuestions = prev[quizCardIndex].questions;
					const quizQuestionIndex = findIndex(quizQuestions, quiz_question_id);

					return [
						...prev.slice(quizCardIndex - 1, quizCardIndex),
						{
							...prev[quizCardIndex],
							questions: [
								...quizQuestions.slice(
									quizQuestionIndex - 1,
									quizQuestionIndex
								),
								{
									...quizQuestions[quizQuestionIndex],
									question
								},
								...quizQuestions.slice(quizQuestionIndex + 1)
							]
						},
						...prev.slice(quizCardIndex + 1)
					];
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
				setQuizCards(prev => {
					const quizCardIndex = findIndex(prev, res.data.quiz_card_id);
					const quizQuestions = prev[quizCardIndex].questions;
					const quizQuestionIndex = findIndex(
						quizQuestions,
						res.data.quiz_question_id
					);
					const quizAnswers = quizQuestions[quizQuestionIndex].answers;
					const quizAnswerIndex = findIndex(quizAnswers, quiz_answer_id);

					return [
						...prev.slice(quizCardIndex - 1, quizCardIndex),
						{
							...prev[quizCardIndex],
							questions: [
								...quizQuestions.slice(
									quizQuestionIndex - 1,
									quizQuestionIndex
								),
								{
									...quizQuestions[quizQuestionIndex],
									answers: [
										...quizAnswers.slice(quizAnswerIndex - 1, quizAnswerIndex),
										{ ...quizAnswers[quizAnswerIndex], answer, correct },
										...quizAnswers.slice(quizAnswerIndex + 1)
									]
								},
								...quizQuestions.slice(quizQuestionIndex + 1)
							]
						},
						...prev.slice(quizCardIndex + 1)
					];
				});
			});
	};

	const deleteQuizCard = quiz_card_id => {
		return axios.delete(`/quiz/card/${quiz_card_id}`).then(() => {
			setQuizCards(prev => {
				const quizCardIndex = findIndex(prev, quiz_card_id);

				return [
					...prev.slice(quizCardIndex - 1, quizCardIndex),
					...prev.slice(quizCardIndex + 1)
				];
			});
		});
	};

	const deleteQuizQuestion = quiz_question_id => {
		return axios.delete(`/quiz/question/${quiz_question_id}`).then(res => {
			setQuizCards(prev => {
				const quizCardIndex = findIndex(prev, res.data.quiz_card_id);
				const quizQuestions = prev[quizCardIndex].questions;
				const quizQuestionIndex = findIndex(quizQuestions, quiz_question_id);

				return [
					...prev.slice(quizCardIndex - 1, quizCardIndex),
					{
						...prev[quizCardIndex],
						questions: [
							...quizQuestions.slice(quizQuestionIndex - 1, quizQuestionIndex),
							...quizQuestions.slice(quizQuestionIndex + 1)
						]
					},
					...prev.slice(quizCardIndex + 1)
				];
			});
		});
	};

	const deleteQuizAnswer = quiz_answer_id => {
		return axios.delete(`/quiz/answer/${quiz_answer_id}`).then(res => {
			setQuizCards(prev => {
				// I need the quiz card id
				const quizCardIndex = findIndex(prev, res.data.quiz_card_id);
				const quizQuestions = prev[quizCardIndex].questions;
				const quizQuestionIndex = findIndex(
					quizQuestions,
					res.data.quiz_question_id
				);
				const quizAnswers = quizQuestions[quizQuestionIndex].answers;
				const quizAnswerIndex = findIndex(quizAnswers, quiz_answer_id);

				return [
					...prev.slice(quizCardIndex - 1, quizCardIndex),
					{
						...prev[quizCardIndex],
						questions: [
							...quizQuestions.slice(quizQuestionIndex - 1, quizQuestionIndex),
							{
								...quizQuestions[quizQuestionIndex],
								answers: [
									...quizAnswers.slice(quizAnswerIndex - 1, quizAnswerIndex),
									...quizAnswers.slice(quizAnswerIndex + 1)
								]
							},
							...quizQuestions.slice(quizQuestionIndex + 1)
						]
					},
					...prev.slice(quizCardIndex + 1)
				];
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
