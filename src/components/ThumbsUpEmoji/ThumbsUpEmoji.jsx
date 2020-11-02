import React from "react";
import thumbsUp from "./thumbs_up.png";
import "./ThumbsUpEmoji.css";

function ThumbsUpEmoji(props) {
	return (
		<div>
			<img
				className="thumbs-up-emoji"
				src={thumbsUp}
				alt={"thumbs up emoji"}
				onClick={props.onClick}
			/>
		</div>
	);
}

export default ThumbsUpEmoji;
