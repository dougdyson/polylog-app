import React from "react";
import Nav from "../Nav/Nav";
import LectureCard from "../LectureCard/LectureCard";
import NewIcon from "../NewIcon/NewIcon";
import { ReactComponent as LecturerKeyArt } from "./lecturer-key-art.svg";
import History from "../History/History";
import useLectureData from "../../hooks/useLectureData";
import useSessionHistory from "../../hooks/useSessionHistory";
import useVisualMode from "../../hooks/useVisualMode";
import "./Lectures.css";
// import "fontsource-roboto";
// import bg_yellow_bottom from "./bg-yellow-bottom.svg";

export default function Lectures() {
	const {
		lectures,
		newLecture,
		editLecture,
		deleteLecture
		// The number being passed here should be the user_id
	} = useLectureData(1);

	const { newSession } = useSessionHistory();

	const KEY_ART = "KEY_ART";
	const HISTORY = "HISTORY";
	const ACTIVITY_FEED = "ACTIVITY_FEED";
	const { mode, transition, back } = useVisualMode(KEY_ART);

	// First I need the data
	// I need to add history stats to the lectures state?

	const lecturesList = lectures.map(lecture => {
		return (
			<LectureCard
				key={lecture.id}
				title={lecture.title}
				editLecture={() => transition(ACTIVITY_FEED)}
				deleteLecture={deleteLecture}
				lectureSessionHistory={() => transition(HISTORY)}
				newSession={newSession}
			/>
		);
	});

	return (
		<div>
			<Nav />
			<div className="lectures-page-header">
				<NewIcon
					new_class="icon icon-large"
					onNew={() => {
						// The number being passed here should be the user_id
						newLecture(1).then(() => transition(ACTIVITY_FEED));
					}}
				/>
				<h2 className="lectures-page-title">Lectures</h2>
			</div>
			<div className="lectures-container">
				<div className="lectures-list">{lecturesList}</div>
				{mode === KEY_ART && (
					<div className="lecturer-key-art">
						<LecturerKeyArt />
					</div>
				)}
				{/* I can return the id of the lecture the button was clicked on */}
				{/* After that I can find the lecture element in the array and render the history component */}
				{mode === HISTORY && <History lecture_id={1} />}
				{mode === ACTIVITY_FEED}
			</div>
		</div>
	);
}
