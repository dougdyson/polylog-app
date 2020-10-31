import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewIcon from "../NewIcon/NewIcon";
import VisibleIcon from "../VisibleIcon/VisibleIcon";
import VisibleOffIcon from "../VisibleOffIcon/VisibleOffIcon";
import ThumbsUpEmoji from "../ThumbsUpEmoji/ThumbsUpEmoji";
import ConfusedEmoji from "../ConfusedEmoji/ConfusedEmoji";

import "../../App.css";
import "./TopicInfo.css";
import "fontsource-roboto";

export default function Topic(props) {
	// to clean up with state
	let reactions_positive = 0;
	let reactions_negative = 0;
	let display = false;

	const [title, setTitle] = React.useState(props.title || "");
	const [description, setDescription] = React.useState(props.description || "");

	return (
		<main className="topic-info">
			<div className="topic-info-header">
				<VisibleIcon className="topic-info-visbility" />
				<TextareaAutosize
					// readOnly if not owner

					className="topic-info-title"
					placeholder="Topic Title"
					test_id="topic-info-title"
					value={title}
					// The number here is the position not sure how to handle that yet
					onChange={event => {
						setTitle(event.target.value);
						props.onEdit(props.id, event.target.value, description, 8);
					}}
				/>
			</div>
			<TextareaAutosize
				//  readOnly if not owner

				className={`topic-info-description`}
				placeholder="Enter topic description..."
				test_id="topic_info_description"
				rows="3"
				value={description}
				// The number here is the position not sure how to handle that yet
				onChange={event => {
					setDescription(event.target.value);
					props.onEdit(props.id, title, event.target.value, 8);
				}}
				style={{ display: { display } ? "flex" : "none" }}
			/>
			<hr className={`hr`} />
			<div className={`emoji`}>
				{/* add onClick events for reactions */}
				{props.session && (
					<React.Fragment>
						<ConfusedEmoji className="icon emoji-spacing" />{" "}
						<span className="reaction-counter">({reactions_negative})</span>
						<ThumbsUpEmoji className="icon emoji-spacing" />{" "}
						<span className="reaction-counter">({reactions_positive})</span>
						{/* add onClick for new topic response */}
						<div className="new_response_button">
							<NewIcon />
						</div>
					</React.Fragment>
				)}
			</div>
		</main>
	);
}
