import React from "react";
import Button from "../Button/Button";
import LectureInfo from "../LectureInfo/LectureInfo";
import TopicContainer from "../TopicCard/TopicCard";
import { ReactComponent as ActivityFeedIcon } from "./playlist_add_check-24px.svg";
import useTopicCardData from "../../hooks/useTopicCardData";

import "./ActivityFeed.css";

export default function ActivityFeed(props) {
	const {
		topicCards,
		newTopicCard,
		editTopicCard,
		deleteTopicCard
	} = useTopicCardData(props.lecture.id);

	const topicCardsList = topicCards.map(topicCard => {
		return (
			<TopicContainer
				key={topicCard.id}
				id={topicCard.id}
				title={topicCard.title}
				description={topicCard.description}
				onEdit={editTopicCard}
			/>
		);

		// Combine topicCards and quizCards and sort by position
		// Render combined list below
	});
	return (
		<div className="activity-feed-container">
			<div className="activity-feed-card-header-row">
				<div className="activity-feed-card-header">
					<ActivityFeedIcon className="activity-feed-icon" />
					<h2 className="activity-feed-card-title">Lecture Feed</h2>
				</div>
				<Button variant="close" onClick={props.onClose}>
					x
				</Button>
			</div>
			<LectureInfo
				lecture={props.lecture}
				onEdit={props.onEdit}
				onNew={newTopicCard}
			/>
			{topicCardsList}
		</div>
	);
}
