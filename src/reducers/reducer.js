import findIndex from "../hooks/helpers";

const SET = "SET";
const NEW = "NEW";
const EDIT = "EDIT";
const DELETE = "DELETE";
const NEW_TOPIC_ACTIVITY = "NEW_TOPIC_ACTIVITY";
const FILTER_TOPIC_RESPONSE = "FILTER_TOPIC_RESPONSE";
const SET_QUIZ_ACTIVITY = "SET_QUIZ_ACTIVITY";
const NEW_QUIZ_Q_OR_R = "NEW_QUIZ_Q_OR_R";
const NEW_QUIZ_ANSWER = "NEW_QUIZ_ANSWER";
const EDIT_QUIZ_QUESTION = "EDIT_QUIZ_QUESTION";
const EDIT_QUIZ_ANSWER = "EDIT_QUIZ_ANSWER";
const DELETE_QUIZ_QUESTION = "DELETE_QUIZ_QUESTION";
const DELETE_QUIZ_ANSWER = "DELETE_QUIZ_ANSWER";

export {
	SET,
	NEW,
	EDIT,
	DELETE,
	SET_QUIZ_ACTIVITY,
	NEW_TOPIC_ACTIVITY,
	FILTER_TOPIC_RESPONSE,
	NEW_QUIZ_Q_OR_R,
	NEW_QUIZ_ANSWER,
	EDIT_QUIZ_QUESTION,
	EDIT_QUIZ_ANSWER,
	DELETE_QUIZ_QUESTION,
	DELETE_QUIZ_ANSWER
};

export const reducer = (state, action) => {
	let cardIndex;
	let questionIndex;
	let answerIndex;
	let questions;
	let answers;
	switch (action.type) {
		case SET:
			return [...action.data];
		case NEW:
			return [...state, { ...action.data }];
		case EDIT:
			cardIndex = findIndex(state, action.card_id);
			return [
				...state.slice(0, cardIndex),
				{ ...state[cardIndex], ...action.data },
				...state.slice(cardIndex + 1)
			];
		case DELETE:
			cardIndex = findIndex(state, action.card_id);
			return [...state.slice(0, cardIndex), ...state.slice(cardIndex + 1)];
		case NEW_TOPIC_ACTIVITY:
			cardIndex = findIndex(state, action.topic_card_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					activity: {
						...state[cardIndex].activity,
						[action.activity]: [
							...state[cardIndex].activity[action.activity],
							{ ...action.data }
						]
					}
				},
				...state.slice(cardIndex + 1)
			];
		case FILTER_TOPIC_RESPONSE:
			cardIndex = findIndex(state, action.topic_card_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					activity: {
						...state[cardIndex].activity,
						responses: [
							...state[cardIndex].activity.responses.filter(
								response => response.id === undefined
							)
						]
					}
				},
				...state.slice(cardIndex + 1)
			];
		case SET_QUIZ_ACTIVITY:
			cardIndex = findIndex(state, action.card_id);
			return [
				...state.slice(0, cardIndex),
				{ ...state[cardIndex], activity: [...action.data] },
				...state.slice(cardIndex + 1)
			];
		case NEW_QUIZ_Q_OR_R:
			cardIndex = findIndex(state, action.quiz_card_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					[action.key]: [...state[cardIndex][action.key], { ...action.data }]
				},
				...state.slice(cardIndex + 1)
			];
		case NEW_QUIZ_ANSWER:
			cardIndex = findIndex(state, action.quiz_card_id);
			questions = state[cardIndex].questions;
			questionIndex = findIndex(questions, action.quiz_question_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					questions: [
						...questions.slice(0, questionIndex),
						{
							...questions[questionIndex],
							answers: [...questions[questionIndex].answers, { ...action.data }]
						},
						...questions.slice(questionIndex + 1)
					]
				},
				...state.slice(cardIndex + 1)
			];
		case EDIT_QUIZ_QUESTION:
			cardIndex = findIndex(state, action.quiz_card_id);
			questions = state[cardIndex].questions;
			questionIndex = findIndex(questions, action.quiz_question_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					questions: [
						...questions.slice(0, questionIndex),
						{ ...questions[questionIndex], question: action.question },
						...questions.slice(questionIndex + 1)
					]
				},
				...state.slice(cardIndex + 1)
			];
		case EDIT_QUIZ_ANSWER:
			cardIndex = findIndex(state, action.quiz_card_id);
			questions = state[cardIndex].questions;
			questionIndex = findIndex(questions, action.quiz_question_id);
			answers = questions[questionIndex].answers;
			answerIndex = findIndex(answers, action.quiz_answer_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					questions: [
						...questions.slice(0, questionIndex),
						{
							...questions[questionIndex],
							answers: [
								...answers.slice(0, answerIndex),
								{
									...answers[answerIndex],
									answer: action.answer,
									correct: action.correct
								},
								...answers.slice(answerIndex + 1)
							]
						},
						...questions.slice(questionIndex + 1)
					]
				},
				...state.slice(cardIndex + 1)
			];
		case DELETE_QUIZ_QUESTION:
			cardIndex = findIndex(state, action.quiz_card_id);
			questions = state[cardIndex].questions;
			questionIndex = findIndex(questions, action.quiz_question_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					questions: [
						...questions.slice(0, questionIndex),
						...questions.slice(questionIndex + 1)
					]
				},
				...state.slice(cardIndex + 1)
			];
		case DELETE_QUIZ_ANSWER:
			cardIndex = findIndex(state, action.quiz_card_id);
			questions = state[cardIndex].questions;
			questionIndex = findIndex(questions, action.quiz_question_id);
			answers = questions[questionIndex].answers;
			answerIndex = findIndex(answers, action.quiz_answer_id);
			return [
				...state.slice(0, cardIndex),
				{
					...state[cardIndex],
					questions: [
						...questions.slice(0, questionIndex),
						{
							...questions[questionIndex],
							answers: [
								...answers.slice(0, answerIndex),
								...answers.slice(answerIndex + 1)
							]
						},
						...questions.slice(questionIndex + 1)
					]
				},
				...state.slice(cardIndex + 1)
			];
		default:
			throw new Error(
				`Tried to reduce with unsupported action type: ${action.type}`
			);
	}
};
