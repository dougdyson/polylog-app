import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewIcon from "../NewIcon/NewIcon";
import VisibleIcon from "../VisibleIcon/VisibleIcon";
import VisibleOffIcon from "../VisibleOffIcon/VisibleOffIcon";
import ThumbsUpEmoji from "../ThumbsUpEmoji/ThumbsUpEmoji";
import ConfusedEmoji from "../ConfusedEmoji/ConfusedEmoji";
import TopicResponse from "../TopicReponse/TopicResponse";
import AnswerResponse from "../AnswerReponse/AnswerResponse";
import "./TopicCard.css";
import "fontsource-roboto";

export default function Topic(props) {
	const [title, setTitle] = React.useState(props.title || "");
	const [description, setDescription] = React.useState(props.description || "");

	let reactions_positive = 0;
	let reactions_negative = 0;
	let topicResponsesList = [];

	if (props.activity) {
		props.activity.reactions.forEach(reaction => {
			reaction.reaction ? (reactions_positive += 1) : (reactions_negative += 1);
		});

		topicResponsesList = props.activity.responses.map(response => {
			if (response.type === "question") {
				return (
					<TopicResponse
						key={response.id}
						id={response.id}
						topicCard={props.id}
						response={response.response}
						onResponse={props.onResponse}
						onResponseLocal={props.onResponseLocal}
						user={props.user}
						student={response.student_id}
					/>
				);
			} else {
				if (response.type === "answer") {
					return (
						<AnswerResponse
							key={response.id}
							id={response.id}
							topicCard={props.id}
							response={response.response}
							onResponse={props.onResponse}
							user={props.user}
							student={response.student_id}
						/>
					);
				}
			}
		});
	}

	// If the user has already reacted do not add a new reaction
	const addReaction = reaction => {
		const findUser = props.activity.reactions.find(
			reaction => props.user === reaction.student_id
		);

		!findUser &&
			props.onReaction(props.id, props.session, props.user, reaction);
	};

	// Websockets doesn't update the value of title or description outside of state so the changes aren't reflected here
	return (
		<div className="topic-card-container">
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
						readOnly={props.lecturer !== props.user}
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
					readOnly={props.lecturer !== props.user}
				/>
				<hr className={`hr`} />
				<div className={`emoji`}>
					{props.session && (
						<React.Fragment>
							<ConfusedEmoji
								className="icon emoji-spacing"
								onClick={() => addReaction(false)}
							/>
							<span className="reaction-counter">({reactions_negative})</span>
							<ThumbsUpEmoji
								className="icon emoji-spacing"
								onClick={() => addReaction(true)}
							/>
							<span className="reaction-counter">({reactions_positive})</span>
							{/* When we have the list we need to change question to whatever type the user picked */}
							<div className="new_response_button">
								<NewIcon
									onNew={() =>
										props.onResponseLocal(props.id, props.user, "question")
									}
								/>
							</div>
						</React.Fragment>
					)}
				</div>
			</main>
			{topicResponsesList}
		</div>
	);
}
