import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useApplicationData = () => {
	const [state, setState] = React.useState({ lectures: [] });

	React.useEffect(() => {
		// lecturer_id should be based off of cookies
		axios.get(`/lecture/${1}`).then(res => {
			setState(prev => ({ ...prev, lectures: res.data }));
		});
		// eslint-disable-next-line
	}, []);

	// I need to export functions that can make a new lecture, edit a lecture, delete a lecture
	const newLecture = (lecturer_id, title, description) => {
		console.log("From newLecture: ", state);
		return axios
			.post("/lecture", { lecturer_id, title, description })
			.then(() => {
				setState(prev => ({
					...prev,
					lectures: [...prev.lectures, { lecturer_id, title, description }]
				}));
			});
	};

	console.log(state);
	return { state, newLecture };
};

export default useApplicationData;
