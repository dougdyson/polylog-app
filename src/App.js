import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Screens from "./screens";
import useLectureData from "./hooks/useLectureData";
import useTopicCardData from "./hooks/useTopicCardData";
import useQuizCardData from "./hooks/useQuizCardData";

function App() {
	// KEEP THIS FOR TESTING PURPOSES
	// const {
	// 	lectures,
	// 	newLecture,
	// 	editLecture,
	// 	deleteLecture,
	// } = useLectureData(1);
	// const {
	// 	topicCards,
	// 	newTopicCard,
	// 	newTopicResponse,
	// 	newTopicReaction,
	// 	editTopicCard,
	// 	deleteTopicCard
	// } = useTopicCardData(1, "4a115ab1-c845-412a-b868-531cf505bf45");
	// const {
	// 	quizCards,
	// 	newQuizCard,
	// 	newQuizQuestion,
	// 	newQuizAnswer,
	// 	newQuizResponse,
	// 	editQuizCard,
	// 	editQuizQuestion,
	// 	editQuizAnswer,
	// 	deleteQuizCard,
	// 	deleteQuizQuestion,
	// 	deleteQuizAnswer
	// } = useQuizCardData(1, "4a115ab1-c845-412a-b868-531cf505bf45");
	React.useEffect(() => {
		// newSession(1);
		// newLecture(1, "Lecture from react", "description from react");
		// editLecture(2, "Edit lecture from react", "edit description from react");
		// deleteLecture(1);
		// newSession(1).then(res => console.log(res.data.id));
		// newTopicCard(1, "React Title", "React description", 8);
		// setTimeout(() => {
		// 	newTopicResponse(
		// 		1,
		// 		"4a115ab1-c845-412a-b868-531cf505bf45",
		// 		1,
		// 		"question",
		// 		"What is react?"
		// 	);
		// }, 2000);
		// setTimeout(() => {
		// 	newTopicReaction(1, "4a115ab1-c845-412a-b868-531cf505bf45", 1, true);
		// }, 3000);
		// editTopicCard(2, "React Title", "React description", 8);
		// deleteTopicCard(1);
		// newQuizCard(1, "Quiz From React", 8);
		// newQuizQuestion(1, "Is react the best?");
		// newQuizAnswer(1, "A great answer from react", true);
		// setTimeout(() => {
		// 	newQuizResponse(1, 4, "4a115ab1-c845-412a-b868-531cf505bf45", 1);
		// }, 2000);
		// editQuizCard(1, "New title from react", 8);
		// editQuizQuestion(1, "Edit question from react");
		// editQuizAnswer(1, "Edit answer from react", true);
		// deleteQuizCard(1);
		// deleteQuizQuestion(1);
		// deleteQuizAnswer(1);
	}, []);

	return (
		<Router>
			<Screens />
		</Router>
	);
}

export default App;
