import React from "react";
import "./quiz.css";

export default function QuestionTitle(props) {
	// Need textarea with hook
	return <div className="quiz-title">{props.title}</div>;
}
