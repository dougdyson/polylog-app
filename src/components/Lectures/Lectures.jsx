import React from "react";
import Nav from "../Nav/Nav";
import LectureCard from "../LectureCard/LectureCard";
import NewIcon from "../NewIcon/NewIcon";
import { ReactComponent as LecturerKeyArt } from "./lecturer-key-art.svg";
import useLectureData from "../../hooks/useLectureData";
import useVisualMode from "../../hooks/useVisualMode";
import "./Lectures.css";
// import bg_yellow_bottom from './bg-yellow-bottom.svg';

export default function Lectures() {
	const {
		lectures,
		newLecture,
		editLecture,
		deleteLecture,
		lectureSessionHistory,
		newSession
		// The number being passed here should be the user_id
	} = useLectureData(1);

	const lecturesList = lectures.map(lecture => {
		return (
			<LectureCard
				key={lecture.id}
				title={lecture.title}
				editLecture={() => transition(ACTIVITY_FEED)}
				deleteLecture={deleteLecture}
				lectureSessionHistory={lectureSessionHistory}
				newSession={newSession}
			/>
		);
	});

	const KEY_ART = "KEY_ART";
	const ACTIVITY_FEED = "ACTIVITY_FEED";
	const { mode, transition, back } = useVisualMode(KEY_ART);

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
				{mode === ACTIVITY_FEED}
			</div>
		</div>
	);
}
