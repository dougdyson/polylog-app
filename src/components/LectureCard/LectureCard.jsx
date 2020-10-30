import React from "react";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";

function LectureCard(props) {
	const SHOW = "SHOW";
	const NEW_SESSION = "NEW_SESSION";
	const HISTORY = "HISTORY";
	const EDIT = "EDIT";

	const { mode, transition, back } = useVisualMode(SHOW);

	return (
		<React.Fragment>
			{/* Show mode will need to take props for buttons to transition */}
			{mode === SHOW && <Show title={props.title} />}
			{/* Still need NewSession component */}
			{mode === NEW_SESSION}
			{/* Still need History component */}
			{mode === HISTORY}
			{/* Still need Edit component */}
			{mode === EDIT}
		</React.Fragment>
	);
}

export default LectureCard;
