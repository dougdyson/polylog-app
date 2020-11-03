import React from "react";
import Nav from "../Nav/Nav";
import LectureCard from "../LectureCard/LectureCard";
import NewIcon from "../NewIcon/NewIcon";
import { ReactComponent as LecturerKeyArt } from "./lecturer-key-art.svg";
import History from "../History/History";
import Button from '../Button/Button';
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import useLectureData from "../../hooks/useLectureData";
import useSessionHistory from "../../hooks/useSessionHistory";
import useVisualMode from "../../hooks/useVisualMode";
import "../../screens/screens.css";
import "./Lectures.css";
import "fontsource-roboto";
// import bg_yellow_bottom from "./bg-yellow-bottom.svg";

export default function Lectures() {
	// The number being passed here should be from a cookie
	const user = 1;
	const [lecture, setLecture] = React.useState(null);
	const { lectures, newLecture, editLecture, deleteLecture } = useLectureData(
		user
	);

	const { newSession } = useSessionHistory();

	const KEY_ART = "KEY_ART";
	const HISTORY = "HISTORY";
	const ACTIVITY_FEED = "ACTIVITY_FEED";
	const { mode, transition } = useVisualMode(KEY_ART);

	const lecturesList = lectures.map(lecture => {
		return (
			<LectureCard
				key={lecture.id}
				id={lecture.id}
				title={lecture.title}
				// onEdit doesn't transition to another activity feed if it is already open
				onEdit={() => {
					setLecture(lecture);
					transition(ACTIVITY_FEED);
				}}
				onDelete={deleteLecture}
				// History feed only updates properly when you close the feed first
				onHistory={() => {
					setLecture(lecture);
					transition(HISTORY);
				}}
				onPlay={newSession}
			/>
		);
	});

	lecturesList.sort((a, b) => {
		return a.key > b.key ? 1 : -1;
	});

	return (
		<div className="site-padding">
			<Nav />
			<div className="lectures-page-header">
				<NewIcon
					new_class="icon icon-large"
					onNew={() => {
						newLecture(user).then(lecture => {
							setLecture(lecture);
							transition(ACTIVITY_FEED);
						});
					}}
				/>
				<h2 className="lectures-page-title">New Lecture</h2>
			</div>
			<div className="lectures-container">
				<div className="lectures-list">{lecturesList}</div>
				{mode === KEY_ART && (
					<div className="lecturer-key-art">
						<LecturerKeyArt />
					</div>
				)}
				{mode === HISTORY && (
					<History lecture={lecture} onClose={() => transition(KEY_ART)} />
				)}
				{mode === ACTIVITY_FEED && (
					<ActivityFeed
						lecture={lecture}
						onClose={() => transition(KEY_ART)}
						onEdit={editLecture}
						session={"4a115ab1-c845-412a-b868-531cf505bf45"}
						user={user}
					/>
				)}
			</div>
		</div>
	);
}
