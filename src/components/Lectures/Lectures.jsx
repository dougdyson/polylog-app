import React from "react";
import Nav from "../Nav/Nav";
import LectureCard from "../LectureCard/LectureCard";
import NewIcon from "../NewIcon/NewIcon";
import { ReactComponent as LecturerKeyArt } from "./lecturer-key-art.svg";
import History from "../History/History";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import useLectureData from "../../hooks/useLectureData";
import useSessionHistory from "../../hooks/useSessionHistory";
import useVisualMode from "../../hooks/useVisualMode";
import "./Lectures.css";
import "fontsource-roboto";
// import bg_yellow_bottom from "./bg-yellow-bottom.svg";

// You can pass components down as props instead of passing all the data down the tree

// Keeps track of which lecture was clicked
let currentLecture = null;
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
	const { mode, transition } = useVisualMode(KEY_ART);

	const lectureClickTransition = (lecture, mode) => {
		currentLecture = lecture;
		transition(mode);
	};

	const lecturesList = lectures.map(lecture => {
		return (
			<LectureCard
				key={lecture.id}
				title={lecture.title}
				// onEdit doesn't transition to another activity feed if it is already open
				onEdit={() => lectureClickTransition(lecture, ACTIVITY_FEED)}
				onDelete={deleteLecture}
				// History feed only updates properly when you close the feed first
				onHistory={() => lectureClickTransition(lecture, HISTORY)}
				newSession={newSession}
			/>
		);
	});

	lecturesList.sort((a, b) => {
		return a.key > b.key ? 1 : -1;
	});

	return (
		<div>
			<Nav />
			<div className="lectures-page-header">
				<NewIcon
					new_class="icon icon-large"
					onNew={() => {
						// The number being passed here should be the user_id
						newLecture(1).then(lecture =>
							lectureClickTransition(lecture, ACTIVITY_FEED)
						);
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
				{mode === HISTORY && (
					<History
						lecture={currentLecture}
						onClose={() => transition(KEY_ART)}
					/>
				)}
				{mode === ACTIVITY_FEED && (
					<ActivityFeed
						lecture={currentLecture}
						onClose={() => transition(KEY_ART)}
						onEdit={editLecture}
					/>
				)}
			</div>
		</div>
	);
}
