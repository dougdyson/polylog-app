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
				session={props.session}
				title={props.title}
				description={props.description}
				onEdit={props.onEdit}
			/>
			{props.session && <TopicResponse />}
			{props.session && <AnswerResponse />}
		</div>
	);
}
