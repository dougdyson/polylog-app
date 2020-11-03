import React from "react";
import "./LectureCard.css";
import Button from "../Button/Button";

export default function ConfirmationCard(props) {
	return (
		<section className="lecture-card">
			<div className="lecture-card-title">
				Are you sure you want to delete this lecture?
			</div>
			<Button variant="submit" onClick={props.onConfirm}>
				CONFIRM
			</Button>
			<Button variant="submit" onClick={props.onCancel}>
				CANCEL
			</Button>
		</section>
	);
}