import React from "react";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";

function LectureCard(props) {
	const SHOW = "SHOW";
	const PLAY = "PLAY";
	const HISTORY = "HISTORY";
	const { mode, transition, back } = useVisualMode(SHOW);

	return (
		<React.Fragment>
			{mode === SHOW && (
				<Show
					title={props.title}
					onPlay={() => transition(PLAY)}
					onHistory={() => transition(HISTORY)}
					onEdit={props.editLecture}
				/>
			)}
			{/* Still need NewSession component */}
			{/* props.newSession should be used for the play card */}
			{mode === PLAY}
			{/* Still need History component */}
			{/* props.lectureSessionHistory(props.key) returns promise of session data for lecture */}
			{mode === HISTORY}
		</React.Fragment>
	);
}

export default LectureCard;
