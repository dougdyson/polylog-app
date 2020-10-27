import React from "react";
import axios from "axios";
import findIndex from "./helpers";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useLectureData = () => {
	const [lectures, setLectures] = React.useState([]);

	React.useEffect(() => {
		// lecturer_id should be based off of cookies
		const lecturer_id = 1;
		axios.get(`/lecture/${lecturer_id}`).then(res => {
			setLectures([...res.data]);
		});
	}, []);

	const newLecture = (lecturer_id, title, description) => {
		return axios
			.post(`/lecture`, { lecturer_id, title, description })
			.then(res => {
				const id = res.data.id;
				setLectures(prev => [...prev, { id, title, description }]);
			});
	};

	const editLecture = (lecture_id, title, description) => {
		return axios
			.put(`/lecture/${lecture_id}`, { title, description })
			.then(() => {
				setLectures(prev => {
					const lectureIndex = findIndex(prev, lecture_id);

					return [
						...prev.slice(lectureIndex - 1, lectureIndex),
						{ ...prev[lectureIndex], title, description },
						...prev.slice(lectureIndex + 1)
					];
				});
			});
	};

	const deleteLecture = lecture_id => {
		axios.delete(`/lecture/${lecture_id}`).then(() => {
			setLectures(prev => {
				const lectureIndex = findIndex(prev, lecture_id);

				return [
					...prev.slice(lectureIndex - 1, lectureIndex),
					...prev.slice(lectureIndex + 1)
				];
			});
		});
	};

	return { lectures, newLecture, editLecture, deleteLecture };
};

export default useLectureData;
