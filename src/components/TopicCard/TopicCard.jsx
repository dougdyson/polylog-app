import React from "react";
import TopicInfo from "../TopicInfo/TopicInfo";
import TopicResponse from "../TopicReponse/TopicResponse";
import AnswerResponse from "../AnswerReponse/AnswerResponse";

import "./TopicCard.css";
import "fontsource-roboto";

export default function TopicContainer(props) {
	return (
		<div className="topic-card-container">
			<TopicInfo
				id={props.id}
				title={props.title}
				description={props.description}
				activity={props.activity}
				position={props.position}
				onEdit={props.onEdit}
				onReaction={props.onReaction}
				session={props.session}
			/>
			{props.session && <TopicResponse />}
			{props.session && <AnswerResponse />}
		</div>
	);
}
