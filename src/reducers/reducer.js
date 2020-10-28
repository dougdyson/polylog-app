import findIndex from "../hooks/helpers";

const SET = "SET";
const NEW = "NEW";
const EDIT = "EDIT";
const DELETE = "DELETE";

export { SET, NEW, EDIT, DELETE };

export const reducer = (state, action) => {
	let index;
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
