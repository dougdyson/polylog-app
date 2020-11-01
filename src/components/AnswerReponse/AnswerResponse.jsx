import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Button/Button";

import "./AnswerResponse.css";
import answer_icon from "./answer_icon.svg";
import "fontsource-roboto";

export default function DisplayAnswerResponse(props) {
	const [response, setResponse] = React.useState(props.response || "");
	// Get this data from db later
	let student_name = "user name";
	let timestamp = "timestamp";

	return (
		<section className="answer-response">
			<div className="answer-response-row">
				<img className="answer-response-icon" alt="" src={answer_icon}></img>
				<div className="answer_response_bubble">
					<TextareaAutosize
						className="answer-response-textarea"
						placeholder="Enter answer"
						value={response}
						onChange={event => setResponse(event.target.value)}
						readOnly={props.id}
					/>
				</div>
			</div>

			<div className="answer-response-row">
				{props.id && (
					<div className="answer-response-user">
						{student_name + " @ " + timestamp}
					</div>
				)}
				<div className="answer-button">
					{/* onClick make call to api for new response */}
					{!props.id && <Button className="submit">Submit</Button>}
				</div>
			</div>
		</section>
	);
}
