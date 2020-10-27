import React from "react";
import axios from "axios";
import findIndex from "./helpers";

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

	const newTopicResponse = (
		topic_card_id,
		session_id,
		student_id,
		type,
		response
	) => {
		return axios
			.post(`/topic/response`, {
				topic_card_id,
				session_id,
				student_id,
				type,
				response
			})
			.then(res => {
				// setTopicCards();
			});
	};

	const newTopicReaction = (
		topic_card_id,
		session_id,
		student_id,
		reaction
	) => {
		return axios
			.post(`/topic/reaction`, {
				topic_card_id,
				session_id,
				student_id,
				reaction
			})
			.then(res => {
				// setTopicCards();
			});
	};

	const editTopicCard = (topic_card_id, title, description, position) => {
		return axios
			.put(`/topic/${topic_card_id}`, {
				title,
				description,
				position
			})
			.then(() => {
				setTopicCards(prev => {
					const topicCardIndex = findIndex(prev, topic_card_id);

					return [
						...prev.slice(topicCardIndex - 1, topicCardIndex),
						{ ...prev[topicCardIndex], title, description, position },
						...prev.slice(topicCardIndex + 1)
					];
				});
			});
	};

	return {
		topicCards,
		newTopicCard,
		newTopicResponse,
		newTopicReaction,
		editTopicCard
	};
};

export default useTopicCardData;
