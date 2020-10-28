const SET = "SET";
const NEW = "NEW";
const EDIT = "EDIT";
const DELETE = "DELETE";

export { SET, NEW, EDIT, DELETE };

export const reducer = (state, action) => {
	switch (action.type) {
		case SET:
			// action.data is an array of all the data
			return [...action.data];
		case NEW:
			// action.data is an object with what I want to add
			return [...state, { ...action.data }];
		case EDIT:
			return [
				...state.slice(action.index - 1, action.index),
				{ ...state[action.index], ...action.data },
				...state.slice(action.index + 1)
			];
		case DELETE:
			return [
				...state.slice(action.index - 1, action.index),
				...state.slice(action.index + 1)
			];
		default:
			throw new Error(
				`Tried to reduce with unsupported action type: ${action.type}`
			);
	}
};

// Already good
// Topic: NEW, EDIT, DELETE

// SET topic response might be good?
// Not good
// newTopicResponse / newTopicReaction
