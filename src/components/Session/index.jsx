import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav/Nav";
import JitsiMeet from "../JitsiMeet/JitsiMeet";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import useSessionHistory from "../../hooks/useSessionHistory";
import useLectureData from "../../hooks/useLectureData";
import "./session.css";

const Session = () => {
	const user = { id: 2, firstName: "Carl", lastName: "Comtois" };
	const { uuid } = useParams();
	const { editLecture } = useLectureData();
	const { getLectureBySession } = useSessionHistory();
	const [lecture, setLecture] = React.useState(null);

	React.useEffect(() => {
		axios.post("/session/attendee", { student_id: user.id, session_id: uuid });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// This lecture stuff can probably be replaced with React useContext
	React.useEffect(() => {
		getLectureBySession(uuid).then(res => setLecture(res.data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<React.Fragment>
			<div className="site-padding">
				<Nav />
			</div>
			<div className="session">
				<JitsiMeet name={`${user.firstName} ${user.lastName}`} session={uuid} />
				{lecture && (
					<ActivityFeed
						lecture={lecture}
						// Confirm end meeting
						onClose={() => console.log("close")}
						onEdit={editLecture}
						session={uuid}
						user={user.id}
					/>
				)}
			</div>
		</React.Fragment>
	);
};

export default Session;
