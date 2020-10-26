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
		// eslint-disable-next-line
	}, []);

	// I need to export functions that can make a new lecture, edit a lecture, delete a lecture
	const newLecture = (lecturer_id, title, description) => {
		return axios
			.post("/lecture", { lecturer_id, title, description })
			.then(() => {
				setState(prev => ({
					...prev,
					lectures: [...prev.lectures, { lecturer_id, title, description }]
				}));
			});
	};

	const editLecture = (lecture_id, title, description) => {
		return axios
			.put(`/lecture/`, { lecture_id, title, description })
			.then(() => {
				// const newLecture = { ...oldLecture, title, description };
				setState(prev => {
					const lectureIndex = prev.lectures.findIndex(
						lecture => lecture.id === lecture_id
					);

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

	return { state, newLecture, editLecture };
};

export default useApplicationData;
