import React from "react";
import axios from "axios";
import findIndex from "./helpers";

const useTopicCardData = (lecture_id, session_uuid = null) => {
	const [topicCards, setTopicCards] = React.useState([]);

	React.useEffect(() => {
		axios.get(`/topic/card/${lecture_id}`).then(res => {
			setTopicCards([...res.data]);

			if (session_uuid) {
				res.data.forEach(topicCard => {
					const id = topicCard.id;
					axios
						.get(`/topic/responses/${session_uuid}`, { params: { id } })
						.then(res => {
							setTopicCards(prev => {
								const topicCardIndex = findIndex(prev, id);

								return [
									...prev.slice(topicCardIndex - 1, topicCardIndex),
									{ ...prev[topicCardIndex], activity: { ...res.data } },
									...prev.slice(topicCardIndex + 1)
								];
							});
						});
				});
			}
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
				setTopicCards(prev => {
					const topicCardIndex = findIndex(prev, topic_card_id);
					return [
						...prev.slice(topicCardIndex - 1, topicCardIndex),
						{
							...prev[topicCardIndex],
							activity: {
								...prev[topicCardIndex].activity,
								responses: [
									...prev[topicCardIndex].activity.responses,
									{ ...res.data }
								]
							}
						},
						...prev.slice(topicCardIndex + 1)
					];
				});
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
				setTopicCards(prev => {
					const topicCardIndex = findIndex(prev, topic_card_id);
					return [
						...prev.slice(topicCardIndex - 1, topicCardIndex),
						{
							...prev[topicCardIndex],
							activity: {
								...prev[topicCardIndex].activity,
								reactions: [
									...prev[topicCardIndex].activity.reactions,
									{ ...res.data }
								]
							}
						},
						...prev.slice(topicCardIndex + 1)
					];
				});
			});
	};

	const editTopicCard = (topic_card_id, title, description, position) => {
		return axios
			.put(`/topic/card/${topic_card_id}`, {
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

	const deleteTopicCard = topic_card_id => {
		return axios.delete(`/topic/card/${topic_card_id}`).then(() => {
			setTopicCards(prev => {
				const topicCardIndex = findIndex(prev, topic_card_id);

				return [
					...prev.slice(topicCardIndex - 1, topicCardIndex),
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
		editTopicCard,
		deleteTopicCard
	};
};

export default useTopicCardData;
