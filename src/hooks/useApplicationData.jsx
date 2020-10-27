import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useApplicationData = () => {
	const [state, setState] = React.useState({ lectures: [] });

	React.useEffect(() => {
		// lecturer_id should be based off of cookies
		axios.get(`/lecture/${1}`).then(res => {
			setState(prev => ({ ...prev, lectures: res.data }));
		});
	}, []);

	const newLecture = (lecturer_id, title, description) => {
		return axios
			.post(`/lecture`, { lecturer_id, title, description })
			.then(() => {
				setState(prev => ({
					...prev,
					lectures: [...prev.lectures, { lecturer_id, title, description }]
				}));
			});
	};

	const findIndex = (array, id) => {
		return array.findIndex(element => element.id === id);
	};

	const editLecture = (lecture_id, title, description) => {
		return axios
			.put(`/lecture/${lecture_id}`, { title, description })
			.then(() => {
				setState(prev => {
					const lectureIndex = findIndex(prev.lectures, lecture_id);

					return {
						...prev,
						lectures: [
							...prev.lectures.slice(lectureIndex - 1, lectureIndex),
							{ ...prev.lectures[lectureIndex], title, description },
							...prev.lectures.slice(lectureIndex + 1)
						]
					};
				});
			});
	};

	const deleteLecture = lecture_id => {
		axios.delete(`/lecture/${lecture_id}`).then(() => {
			setState(prev => {
				const lectureIndex = findIndex(prev.lectures, lecture_id);

				return {
					...prev,
					lectures: [
						...prev.lectures.slice(lectureIndex - 1, lectureIndex),
						...prev.lectures.slice(lectureIndex + 1)
					]
				};
			});
		});
	};

	return { state, newLecture, editLecture, deleteLecture };
};

export default useApplicationData;
