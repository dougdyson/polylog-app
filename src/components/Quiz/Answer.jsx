import React from "react";
import Button from "../Button/Button";

import "./quiz.css";
import "fontsource-roboto";

export default function Answer(props) {
	return (
		<div>
			<Button variant="quiz-answer-button">{props.answer}</Button>
		</div>
	);
}
