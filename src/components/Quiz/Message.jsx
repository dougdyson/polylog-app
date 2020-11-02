import React from "react";

function Message(props) {
	return (
		<div className="quiz-answer-message">
			{props.message || "Make a selection above"}
		</div>
	);
}

export default Message;
