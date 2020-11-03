import React from "react";
import Show from "./Show";
import Play from "./Play";
import Delete from "./Delete";
import useVisualMode from "../../hooks/useVisualMode";
import { Redirect } from "react-router-dom";

function LectureCard(props) {
	const SHOW = "SHOW";
	const PLAY = "PLAY";
	const DELETE = "DELETE";
	const REDIRECT = "REDIRECT";

	const [uuid, setUuid] = React.useState("");
	const { mode, transition } = useVisualMode(SHOW);

	return (
		<React.Fragment>
			{mode === SHOW && (
				<Show
					title={props.title}
					onPlay={() => transition(PLAY)}
					onHistory={props.onHistory}
					onEdit={props.onEdit}
					onDelete={() => transition(DELETE)}
				/>
			)}
			{mode === PLAY && (
				<Play
					onConfirm={() => {
						props.onPlay(props.id).then(res => {
							setUuid(res.data.id);
							transition(REDIRECT);
						});
					}}
					onCancel={() => transition(SHOW)}
				/>
			)}
			{mode === DELETE && (
				<Delete
					onConfirm={() => props.onDelete(props.id)}
					onCancel={() => transition(SHOW)}
				/>
			)}
			{mode === REDIRECT && <Redirect to={`/session/${uuid}`} />}
		</React.Fragment>
	);
}

export default LectureCard;
