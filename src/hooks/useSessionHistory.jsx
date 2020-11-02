import React from "react";
import axios from "axios";

const useSessionHistory = (lecture_id = null) => {
	const [history, setHistory] = React.useState({});

	React.useEffect(() => {
		if (lecture_id) {
			axios.get(`/session/${lecture_id}`).then(res => setHistory(res.data));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const newSession = lecture_id => {
		return axios.post(`/session`, { lecture_id });
	};

	return {
		history,
		newSession
	};
};

export default useSessionHistory;
