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

const useTopicCardData = (lecture_id, session_id = null) => {
	const [topicCards, dispatch] = React.useReducer(reducer, []);

	React.useEffect(() => {
		axios.get(`/topic/card/${lecture_id}`).then(res => {
			dispatch({ type: SET, data: res.data });

			if (session_id) {
				res.data.forEach(topicCard => {
					const card_id = topicCard.id;
					axios
						.get(`/topic/responses/${card_id}`, { params: { session_id } })
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				!session_id &&
					dispatch({
						type: NEW,
						data: { id, lecture_id, title, description, position }
					});
				// return res.data;
			});
	};

	const newTopicResponse = (
		topic_card_id,
		session_id,
		student_id,
		type,
		response
	) => {
		return axios.post(`/topic/response`, {
			topic_card_id,
			session_id,
			student_id,
			type,
			response
		});
	};

	const newTopicReaction = (
		topic_card_id,
		session_id,
		student_id,
		reaction
	) => {
		return axios.post(`/topic/reaction`, {
			topic_card_id,
			session_id,
			student_id,
			reaction
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
				!session_id &&
					dispatch({
						type: EDIT,
						card_id: topic_card_id,
						data: { title, description, position }
					});
			});
	};

	const deleteTopicCard = topic_card_id => {
		return axios.delete(`/topic/card/${topic_card_id}`).then(() => {
			!session_id && dispatch({ type: DELETE, card_id: topic_card_id });
		});
	};

	React.useEffect(() => {
		if (session_id) {
			const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

			// webSocket.onopen = () => {
			// 	webSocket.send("ping");
			// };

			webSocket.onmessage = event => {
				const data = JSON.parse(event.data);
				// from hook send session_id to body of post/put/delete
				// than the ws call can send a session_id
				// I need to add session_id to every ws and hook function
				// lost of work do if you have extra time
				// if session_id === data.session_id

				const topic_card_id = data.topic_card_id;
				const lecture_id = data.lecture_id;
				const title = data.title;
				const description = data.description;
				const position = data.position;

				const topic_response_id = data.topic_response_id;
				const student_id = data.student_id;
				const type = data.responseType;
				const response = data.response;

				const topic_reaction_id = data.topic_reaction_id;
				const reaction = data.reaction;

				switch (data.type) {
					case "NEW_TOPIC_CARD":
						return dispatch({
							type: NEW,
							data: {
								id: topic_card_id,
								lecture_id,
								title,
								description,
								position
							}
						});
					case "NEW_TOPIC_RESPONSE":
						return dispatch({
							type: NEW_TOPIC_ACTIVITY,
							activity: "responses",
							topic_card_id,
							data: {
								id: topic_response_id,
								student_id,
								type,
								response
							}
						});
					case "NEW_TOPIC_REACTION":
						return dispatch({
							type: NEW_TOPIC_ACTIVITY,
							activity: "reactions",
							topic_card_id,
							data: {
								id: topic_reaction_id,
								student_id,
								reaction
							}
						});
					case "EDIT_TOPIC_CARD":
						return dispatch({
							type: EDIT,
							card_id: topic_card_id,
							data: {
								title,
								description,
								position
							}
						});
					case "DELETE_TOPIC_CARD":
						return dispatch({ type: DELETE, card_id: topic_card_id });
					default:
				}
			};

			return () => {
				webSocket.close();
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
