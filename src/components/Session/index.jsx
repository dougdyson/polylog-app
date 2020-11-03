import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import JitsiMeet from "../JitsiMeet/JitsiMeet";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import useSessionHistory from "../../hooks/useSessionHistory";
import useLectureData from "../../hooks/useLectureData";
import "./session.css";

const Session = () => {
	const user = 2;
	const { uuid } = useParams();
	const { editLecture } = useLectureData();
	const { getLectureBySession } = useSessionHistory();
	const [lecture, setLecture] = React.useState(null);

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
			<JitsiMeet />
			{lecture && (
				<ActivityFeed
					lecture={lecture}
					// Confirm end meeting
					onClose={() => console.log("close")}
					onEdit={editLecture}
					session={uuid}
					user={user}
				/>
			)}
		</React.Fragment>
	);
};

export default Session;
