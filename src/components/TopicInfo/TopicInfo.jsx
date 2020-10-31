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
	const [title, setTitle] = React.useState(props.title || "");
	const [description, setDescription] = React.useState(props.description || "");

	let reactions_positive = 0;
	let reactions_negative = 0;

	props.activity &&
		props.activity.reactions.forEach(reaction => {
			reaction.reaction ? (reactions_positive += 1) : (reactions_negative += 1);
		});

	return (
		<main className="topic-info">
			<div className="topic-info-header">
				<VisibleIcon className="topic-info-visbility" />
				<TextareaAutosize
					className="topic-info-title"
					placeholder="Topic Title"
					test_id="topic-info-title"
					value={title}
					onChange={event => {
						setTitle(event.target.value);
						props.onEdit(
							props.id,
							event.target.value,
							description,
							props.position
						);
					}}
					// readOnly={true}
				/>
			</div>
			<TextareaAutosize
				className={`topic-info-description`}
				placeholder="Enter topic description..."
				test_id="topic_info_description"
				rows="3"
				value={description}
				onChange={event => {
					setDescription(event.target.value);
					props.onEdit(props.id, title, event.target.value, props.position);
				}}
				// readOnly={true}
			/>
			<hr className={`hr`} />
			<div className={`emoji`}>
				{props.session && (
					<React.Fragment>
						<ConfusedEmoji
							className="icon emoji-spacing"
							onClick={() =>
								// The number here should be the student id
								props.onReaction(props.id, props.session, 1, false)
							}
						/>
						<span className="reaction-counter">({reactions_negative})</span>
						<ThumbsUpEmoji
							className="icon emoji-spacing"
							// The number here should be the student id
							onClick={() => props.onReaction(props.id, props.session, 1, true)}
						/>
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
