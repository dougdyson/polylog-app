import React from "react";
import axios from "axios";
import { reducer, SET, NEW } from "../reducers/reducer";

const useSessionHistory = (lecture_id = null) => {
	const [history, setHistory] = React.useState({});

	React.useEffect(() => {
		if (lecture_id) {
			axios.get(`/session/${lecture_id}`).then(res => setHistory({ ...res }));
		}
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
