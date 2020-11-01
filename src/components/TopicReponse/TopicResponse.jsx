import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Button/Button";

import "./TopicResponse.css";
import question_icon from "./question_icon.svg";
import comment_icon from "./comment_icon.svg";
import "fontsource-roboto";

export default function DisplayTopicResponse(props) {
	const [response, setResponse] = React.useState(props.response || "");
	// Get this data from db later
	let student_name = "user name";
	let timestamp = "timestamp";

	return (
		<section className="topic-response">
			<div className="topic-response-row">
				<div className="topic-response-bubble">
					<TextareaAutosize
						className="topic-text-area"
						placeholder="Enter question"
						value={response}
						onChange={event => setResponse(event.target.value)}
						// This should be readOnly once submitted
						// I can make a new response from local state and not include an id
						// if a response has an id you cannot edit it
						readOnly={props.id}
					/>
				</div>
				<img className="topic-response-icon" alt="" src={question_icon}></img>
			</div>

			<div className="topic-response-row">
				<div className="response-button">
					{/* use new function from useTopicCardData to make new local state response of type answer */}
					{props.id && <Button className="reply">reply</Button>}
					{props.id && (
						<div className="topic_response_user">
							{student_name + " @ "}
							{" " + timestamp}
						</div>
					)}
					{/* onClick make call to api for new response */}
					{!props.id && <Button className="submit">Submit</Button>}
				</div>
			</div>
		</section>
	);
}
