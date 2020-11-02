import React from "react";
import axios from "axios";
import { reducer, SET, NEW, EDIT, DELETE } from "../reducers/reducer";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useLectureData = lecturer_id => {
	const [lectures, dispatch] = React.useReducer(reducer, []);

	React.useEffect(() => {
		lecturer_id &&
			axios.get(`/lecture/${lecturer_id}`).then(res => {
				dispatch({ type: SET, data: res.data });
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const newLecture = (lecturer_id, title, description) => {
		return axios
			.post(`/lecture`, { lecturer_id, title, description })
			.then(res => {
				const id = res.data.id;
				dispatch({ type: NEW, data: { id, title, description } });
				return res.data;
			});
	};

	const editLecture = (lecture_id, title, description) => {
		return axios
			.put(`/lecture/${lecture_id}`, { title, description })
			.then(() => {
				dispatch({
					type: EDIT,
					card_id: lecture_id,
					data: { title, description }
				});
			});
	};

	const deleteLecture = lecture_id => {
		axios.delete(`/lecture/${lecture_id}`).then(() => {
			dispatch({ type: DELETE, card_id: lecture_id });
		});
	};

	return {
		lectures,
		newLecture,
		editLecture,
		deleteLecture
	};
};

export default useLectureData;
