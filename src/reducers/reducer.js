import findIndex from "../hooks/helpers";

const SET = "SET";
const NEW = "NEW";
const EDIT = "EDIT";
const DELETE = "DELETE";
const NEW_TOPIC_ACTIVITY = "NEW_TOPIC_ACTIVITY";
const NEW_QUIZ_QR = "NEW_QUIZ_QR";
const NEW_QUIZ_ANSWER = "NEW_QUIZ_ANSWER";
const EDIT_QUIZ_QUESTION = "EDIT_QUIZ_QUESTION";
const EDIT_QUIZ_ANSWER = "EDIT_QUIZ_ANSWER";
const DELETE_QUIZ_QUESTION = "DELETE_QUIZ_QUESTION";
const DELETE_QUIZ_ANSWER = "DELETE_QUIZ_ANSWER";

export { SET, NEW, EDIT, DELETE, NEW_TOPIC_ACTIVITY };

export const reducer = (state, action) => {
	// The indexs track the element to edit in an array
	// Additional indexes are for additional arrays
	let index;
	let index2;
	let index3;
	let questions;
	let answers;
	switch (action.type) {
		case SET:
			return [...action.data];
		case NEW:
			return [...state, { ...action.data }];
		case EDIT:
			index = findIndex(state, action.id);
			return [
				...state.slice(index - 1, index),
				{ ...state[index], ...action.data },
				...state.slice(index + 1)
			];
		case DELETE:
			index = findIndex(state, action.id);
			return [...state.slice(index - 1, index), ...state.slice(index + 1)];
		case NEW_TOPIC_ACTIVITY:
			index = findIndex(state, action.id);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					activity: {
						...state[index].activity,
						[action.activity]: [
							...state[index].activity[action.activity],
							{ ...action.data }
						]
					}
				},
				...state.slice(index + 1)
			];
		case NEW_QUIZ_QR:
			index = findIndex(state, action.id);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					[action.key]: [...state[index][action.key], { ...action.data }]
				},
				...state.slice(index + 1)
			];
		case NEW_QUIZ_ANSWER:
			index = findIndex(state, action.id);
			questions = state[index].questions;
			index2 = findIndex(questions, action.id2);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					questions: [
						...questions.slice(index2 - 1, index2),
						{
							...questions[index2],
							answers: [...questions[index2].answers, { ...action.data }]
						},
						...questions.slice(index2 + 1)
					]
				},
				...state.slice(index + 1)
			];
		case EDIT_QUIZ_QUESTION:
			index = findIndex(state, action.id);
			questions = state[index].questions;
			index2 = findIndex(questions, action.id2);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					questions: [
						...questions.slice(index2 - 1, index2),
						{ ...questions[index2], question: action.question },
						...questions.slice(index2 + 1)
					]
				},
				...state.slice(index + 1)
			];
		case EDIT_QUIZ_ANSWER:
			index = findIndex(state, action.id);
			questions = state[index].questions;
			index2 = findIndex(questions, action.id2);
			answers = questions[index2].answers;
			index3 = findIndex(answers, action.id3);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					questions: [
						...questions.slice(index2 - 1, index2),
						{
							...questions[index2],
							answers: [
								...answers.slice(index3 - 1, index3),
								{
									...answers[index3],
									answer: action.answer,
									correct: action.correct
								},
								answers.slice(index3 + 1)
							]
						},
						...questions.slice(index2 + 1)
					]
				},
				...state.slice(index + 1)
			];
		case DELETE_QUIZ_QUESTION:
			index = findIndex(state, action.id);
			questions = state[index].questions;
			index2 = findIndex(questions, index2);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					questions: [
						...questions.slice(index2 - 1),
						...questions.slice(index2 + 1)
					]
				},
				...state.slice(index + 1)
			];
		case DELETE_QUIZ_ANSWER:
			index = findIndex(state, action.id);
			questions = state[index].questions;
			index2 = findIndex(questions, action.id2);
			answers = questions[index2].answers;
			index3 = findIndex(answers, action.id3);
			return [
				...state.slice(index - 1, index),
				{
					...state[index],
					questions: [
						...questions.slice(index2 - 1, index2),
						{
							...questions[index2],
							answers: [
								...answers.slice(index3 - 1, index3),
								...answers[index3 + 1]
							]
						},
						...questions.slice(index2 + 1)
					]
				},
				...state.slice(index)
			];
		default:
			throw new Error(
				`Tried to reduce with unsupported action type: ${action.type}`
			);
	}
};
