import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useLectureData from "./hooks/useLectureData";
import useTopicCardData from "./hooks/useTopicCardData";
import useQuizCardData from "./hooks/useQuizCardData";

function App() {
	// KEEP THIS FOR TESTING PURPOSES
	const { lectures, newLecture, editLecture, deleteLecture } = useLectureData(
		1
	);
	const {
		topicCards,
		newTopicCard,
		newTopicResponse,
		newTopicReaction,
		editTopicCard,
		deleteTopicCard
	} = useTopicCardData(1, "4a115ab1-c845-412a-b868-531cf505bf45");
	const { quizCards, newQuizCard } = useQuizCardData(1);
	React.useEffect(() => {
		// newLecture(1, "Lecture from react", "description from react");
		// editLecture(1, "Edit lecture from react", "edit description from react");
		// deleteLecture(1);
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
		// }, 2000);
		// editTopicCard(2, "React Title", "React description", 8);
		// deleteTopicCard(1);
		// newQuizCard(1, "Quiz From React", 8);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
