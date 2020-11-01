import React from "react";
import Button from "../Button/Button";
import LectureInfo from "../LectureInfo/LectureInfo";
import TopicCard from "../TopicCard/TopicCard";
import Card from "../Quiz/Card";
import useTopicCardData from "../../hooks/useTopicCardData";
import useQuizCardData from "../../hooks/useQuizCardData";
import { ReactComponent as ActivityFeedIcon } from "./playlist_add_check-24px.svg";
import "./ActivityFeed.css";

export default function ActivityFeed(props) {
	const {
		topicCards,
		newTopicCard,
		newTopicResponse,
		newTopicResponseLocal,
		newTopicReaction,
		editTopicCard,
		deleteTopicCard
	} = useTopicCardData(props.lecture.id, props.session);

	const {
		quizCards,
		newQuizCard,
		newQuizQuestion,
		newQuizAnswer,
		newQuizResponse,
		editQuizCard,
		editQuizQuestion,
		editQuizAnswer,
		deleteQuizCard,
		deleteQuizQuestion,
		deleteQuizAnswer
	} = useQuizCardData(props.lecture.id, props.session);

	// I'm using position as a key since the ids aren't unique when combining both cards list
	const topicCardsList = topicCards.map(topicCard => {
		return (
			<TopicCard
				key={topicCard.position}
				id={topicCard.id}
				title={topicCard.title}
				description={topicCard.description}
				activity={topicCard.activity}
				position={topicCard.position}
				onEdit={editTopicCard}
				onDelete={deleteTopicCard}
				onResponse={newTopicResponse}
				onResponseLocal={newTopicResponseLocal}
				onReaction={newTopicReaction}
				session={props.session}
				user={props.user}
				lecturer={props.lecture.lecturer_id}
			/>
		);
	});

	const quizCardsList = quizCards.map(quizCard => {
		return (
			<Card
				key={quizCard.position}
				id={quizCard.id}
				title={quizCard.title}
				questions={quizCard.questions}
				activity={quizCard.activity}
				position={quizCard.position}
				onEdit={editQuizCard}
				onDelete={deleteQuizCard}
				onResponse={newQuizResponse}
				onQestion={{ newQuizQuestion, editQuizQuestion, deleteQuizQuestion }}
				onAnswer={{ newQuizAnswer, editQuizAnswer, deleteQuizAnswer }}
				session={props.session}
				user={props.user}
				lecturer={props.lecture.lecturer_id}
			/>
		);
	});

	const cardsList = [...topicCardsList, ...quizCardsList];
	cardsList.sort((a, b) => {
		return a.key > b.key ? 1 : -1;
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
				// onNew should bring up a list and that list to choose card type
				onNew={newTopicCard}
				newTopic={newTopicCard}
				newQuiz={newQuizCard}
				cardsList={cardsList}
				user={props.user}
				lecturer={props.lecture.lecturer_id}
			/>
			{cardsList}
		</div>
	);
}
