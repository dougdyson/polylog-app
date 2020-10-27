import React from "react";
import axios from "axios";
import findIndex from "./helpers";

const useQuizCardData = (lecture_id, session_uuid = null) => {
	const [quizCards, setQuizCards] = React.useState([]);

	React.useEffect(() => {
		axios.get(`/quiz/${lecture_id}`).then(res => {
			setQuizCards([...res.data]);
			// deal with session data later
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

	return { quizCards, newQuizCard };
};

export default useQuizCardData;
