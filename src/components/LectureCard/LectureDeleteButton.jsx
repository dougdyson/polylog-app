import React from "react";
import { ReactComponent as DeleteButton } from "./delete_forever-24px.svg";
import "./LectureDeleteButton.css";

export default function LectureDeleteButton(props) {
	return (
		<div>
			<DeleteButton className="delete-lecture" onClick={props.onDelete} />
		</div>
	);
}
