import React from "react";
import PlayIcon from "../PlayIcon/PlayIcon";
import HistoryIcon from "../HistoryIcon/HistoryIcon";
import EditIcon from "../EditIcon/EditIcon";
import LectureDeleteButton from "./LectureDeleteButton";
import "./LectureCard.css";

function Show(props) {
	return (
		<section className="lecture-card">
			<div className="lecture-card-title">{props.title}</div>
			{/* <LectureTitle onTitle={props.title} /> */}
			<PlayIcon onPlay={props.onPlay} />
			<HistoryIcon onHistory={props.onHistory} />
			<EditIcon onEdit={props.onEdit} />
			<LectureDeleteButton onDelete={props.onDelete} />
		</section>
	);
}

export default Show;
