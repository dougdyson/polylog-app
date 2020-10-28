import React from "react";
import axios from "axios";
import {
	reducer,
	SET,
	NEW,
	EDIT,
	DELETE,
	NEW_TOPIC_ACTIVITY
} from "../reducers/reducer";

const useTopicCardData = (lecture_id, session_uuid = null) => {
	const [topicCards, dispatch] = React.useReducer(reducer, []);

	React.useEffect(() => {
		axios.get(`/topic/card/${lecture_id}`).then(res => {
			dispatch({ type: SET, data: res.data });

			if (session_uuid) {
				res.data.forEach(topicCard => {
					const card_id = topicCard.id;
					axios
						.get(`/topic/responses/${card_id}`, { params: { session_uuid } })
						.then(res => {
							dispatch({
								type: EDIT,
								card_id,
								data: { activity: { ...res.data } }
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
				dispatch({
					type: NEW,
					data: { id, lecture_id, title, description, position }
				});
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
				dispatch({
					type: NEW_TOPIC_ACTIVITY,
					activity: "responses",
					topic_card_id,
					data: { ...res.data }
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
				dispatch({
					type: NEW_TOPIC_ACTIVITY,
					activity: "reactions",
					topic_card_id,
					data: { ...res.data }
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
				dispatch({
					type: EDIT,
					card_id: topic_card_id,
					data: { title, description, position }
				});
			});
	};

	const deleteTopicCard = topic_card_id => {
		return axios.delete(`/topic/card/${topic_card_id}`).then(() => {
			dispatch({ type: DELETE, card_id: topic_card_id });
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
