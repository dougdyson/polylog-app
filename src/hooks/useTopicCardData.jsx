import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useTopicCardData = lecture_id => {
	const [topicCards, setTopicCards] = React.useState([]);

	React.useEffect(() => {
		axios.get(`/topic/${lecture_id}`).then(res => {
			setTopicCards([...res.data]);
		});
	}, []);

	return { topicCards };
};

export default useTopicCardData;
