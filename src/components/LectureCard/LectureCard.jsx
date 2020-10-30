import React from "react";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";

function LectureCard(props) {
	const SHOW = "SHOW";
	const PLAY = "PLAY";
	const HISTORY = "HISTORY";
	const EDIT = "EDIT";

	const { mode, transition, back } = useVisualMode(SHOW);

	return (
		<React.Fragment>
			{/* Show mode will need to take props for buttons to transition */}
			{mode === SHOW && (
				<Show
					title={props.title}
					onPlay={() => transition(PLAY)}
					onHistory={() => transition(HISTORY)}
					onEdit={() => transition(EDIT)}
				/>
			)}
			{/* Still need NewSession component */}
			{/* props.newSession should be used for the play card */}
			{mode === PLAY}
			{/* Still need History component */}
			{/* Hard code history for now? Or I can make the function to make get request to get data */}
			{mode === HISTORY}
			{/* Still need Edit component */}
			{/* props.editLecture */}
			{mode === EDIT}
		</React.Fragment>
	);
}

export default LectureCard;
