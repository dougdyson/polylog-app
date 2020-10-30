import React from "react";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";

function LectureCard(props) {
	const SHOW = "SHOW";
	const PLAY = "PLAY";
	const { mode, transition, back } = useVisualMode(SHOW);

	return (
		<React.Fragment>
			{mode === SHOW && (
				<Show
					title={props.title}
					onPlay={() => transition(PLAY)}
					onHistory={props.onHistory}
					onEdit={props.onEdit}
				/>
			)}
			{/* Still need NewSession component */}
			{/* props.newSession should be used for the play card */}
			{mode === PLAY}
		</React.Fragment>
	);
}

export default LectureCard;
