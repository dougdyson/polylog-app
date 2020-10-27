import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useTopicCardData = (lecture_id, session_uuid = null) => {
	const [topicCards, setTopicCards] = React.useState([]);

	React.useEffect(() => {
		axios.get(`/topic/${lecture_id}`).then(res => {
			// axios
			// .get(`/topic/response/${session_uuid}`, {
			//   params: { topic_card_id: 1 }
			// })
			// .then(res => {});

			// if (session_uuid)
			// loop over current quiz cards
			// axios.get responses for topic_id with session id
			// add that response to the topic card object with a key of activity
			// setTopicCards(prev => [...prev, { ...topicCard, activity: ...responses }])
			setTopicCards([...res.data]);
		});
	}, []);

	const newTopicCard = (lecture_id, title, description, position) => {
		return axios
			.post(`/topic/card`, {
				lecture_id,
				title,
				description,
				position
			})
			.then(res => {
				const id = res.data.id;
				setTopicCards(prev => [
					...prev,
					{ id, lecture_id, title, description, position }
				]);
			});
	};

	return { topicCards, newTopicCard };
};

export default useTopicCardData;
