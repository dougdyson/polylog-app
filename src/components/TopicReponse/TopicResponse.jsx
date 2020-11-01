import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Button/Button";

import "./TopicResponse.css";
import question_icon from "./question_icon.svg";
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
						readOnly={props.id}
					/>
				</div>
				<img className="topic-response-icon" alt="" src={question_icon}></img>
			</div>

			<div className="topic-response-row">
				<div className="response-button">
					{props.id && (
						<Button
							className="reply"
							onSubmit={() =>
								props.onResponseLocal(props.topicCard, props.user, "answer")
							}
						>
							reply
						</Button>
					)}
					{props.id && (
						<div className="topic_response_user">
							{student_name + " @ "}
							{" " + timestamp}
						</div>
					)}
					{!props.id && (
						<Button
							className="submit"
							onSubmit={() =>
								props.onResponse(
									props.topicCard,
									props.session,
									props.user,
									"question",
									response
								)
							}
						>
							Submit
						</Button>
					)}
				</div>
			</div>
		</section>
	);
}
