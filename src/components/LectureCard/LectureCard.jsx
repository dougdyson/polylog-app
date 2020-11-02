import React from "react";
import Show from "./Show";
import Play from "./Play";
import useVisualMode from "../../hooks/useVisualMode";
import { Redirect } from "react-router-dom";

function LectureCard(props) {
	const SHOW = "SHOW";
	const PLAY = "PLAY";
	const { mode, transition } = useVisualMode(SHOW);

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
			{mode === PLAY && (
				<Play
					// Make POST request to db and get new session id from db
					// redirect to session page
					// <Redirect to={this.state.redirect} />
					onConfirm={() => console.log("Start")}
					onCancel={() => transition(SHOW)}
				/>
			)}
		</React.Fragment>
	);
}

export default LectureCard;
