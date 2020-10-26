import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useLectureData = () => {
	const [state, setState] = React.useState({ lectures: [] });

	React.useEffect(() => {
		// lecturer_id should be based off of cookies
		axios.get("/lecture/", { params: { lecturer_id: 1 } }).then(res => {
			const lectures = res.data;
			setState({ ...state, lectures });
		});
		// eslint-disable-next-line
	}, []);

	console.log(state);
	return { state };
};

export default useLectureData;
