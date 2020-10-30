import React from "react";
import Nav from "../Nav/Nav";
import LectureCard from "../LectureCard/LectureCard";
import { ReactComponent as LecturerKeyArt } from "./lecturer-key-art.svg";
import useLectureData from "../../hooks/useLectureData";
import "./Lectures.css";
// import bg_yellow_bottom from './bg-yellow-bottom.svg';

export default function Lectures() {
	const {
		lectures,
		newLecture,
		editLecture,
		deleteLecture,
		newSession
		// The number being passed here should be the user_id
	} = useLectureData(1);

	const lecturesList = lectures.map(lecture => {
		return <LectureCard title={lecture.title} />;
	});

	return (
		<div>
			<Nav />
			<h2>Lectures</h2>
			<div className="lectures-container">
				<div className="lectures-list">{lecturesList}</div>
				<div className="lecturer-key-art">
					<LecturerKeyArt />
				</div>
			</div>
		</div>
	);
}
