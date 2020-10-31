import React from "react";
import confusedEmoji from "./confused_emoji.png";
import "./ConfusedEmoji.css";

function ConfusedEmoji(props) {
	return (
		<div>
			<img
				className="confused-emoji"
				src={confusedEmoji}
				onClick={props.onClick}
			/>
		</div>
	);
}

export default ConfusedEmoji;
