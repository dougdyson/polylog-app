import React from "react";
import { ReactComponent as SessionHistoryIcon } from "./double-zag-stats-icon.svg";
import { ReactComponent as HistoryKeyArt } from "./history-key-art.svg";
import useSessionHistory from "../../hooks/useSessionHistory";
import "./History.css";
import "fontsource-roboto";

function History(props) {
	// clean up with state
	// since there is a lot of code here, normally I would import the setting of some of these values to another file
	let title =
		"Really Long Lecture Title With Big Fancy Words, Even Breaking Onto A New Line!";
	let startDate = "start date";
	let endDate = "end date";
	let lectureSessions = "#";
	let totalAttendees = "#";
	let avgAttendees = "avg";
	let thumbsUps = "#";
	let confused = "#";
	let questions = "#";
	let answers = "#";
	let comments = "#";
	let quizzes = "#";
	let correctResponses = "%";
	let incorrectResponses = "%";
	let polls = "#";

	let size = Object.keys(props).length;
	// if (size) {
	// 	console.log(props);
	// 	title = props.history.title;
	// 	startDate = props.history.startDate;
	// 	endDate = props.history.endDate;
	// 	lectureSessions = props.history.lectureSessions;
	// 	totalAttendees = props.history.totalAttendees;
	// 	avgAttendees = props.history.avgAttendees;
	// 	thumbsUps = props.history.thumbsUps;
	// 	confused = props.history.confused;
	// 	questions = props.history.questions;
	// 	answers = props.history.answers;
	// 	comments = props.history.comments;
	// 	quizzes = props.history.quizzes;
	// 	correctResponses = props.history.correctResponses;
	// 	incorrectResponses = props.history.incorrectResponses;
	// 	polls = props.history.polls;
	// }

	const { history } = useSessionHistory(props.lecture_id);
	console.log(history);

	return (
		<section className="history-container">
			<div className="history-card-header">
				<SessionHistoryIcon className="history-icon" />
				<h2 className="history-card-title">Lecture Reporting</h2>
			</div>
			<div className="history-lecture-title">{title}</div>
			<div className="history-dates">
				{startDate} - {endDate}
			</div>

			<div className="history-lecture-totals">
				<ul className="leaders">
					<li className="bottom-padding">
						<span>Lecture Sessions</span>
						<span>{lectureSessions}</span>
					</li>
					<li>
						<span>Total Attendees</span>
						<span>{totalAttendees}</span>
					</li>
					<li className="bottom-padding">
						<span>Average Attendees</span>
						<span>{avgAttendees}</span>
					</li>
				</ul>

				<div className="history-card-section">
					<span>Engagement</span>
				</div>
				<ul className="leaders">
					<li>
						<span>Thumbs Up Reactions</span>
						<span>{thumbsUps}</span>
					</li>
					<li className="bottom-padding">
						<span>Confused Reactions</span>
						<span>{confused}</span>
					</li>
				</ul>

				<div className="history-card-section">
					<span>Participation</span>
				</div>
				<ul className="leaders">
					<li>
						<span>Questions</span>
						<span>{questions}</span>
					</li>
					<li>
						<span>Answers</span>
						<span>{answers}</span>
					</li>
					<li className="bottom-padding">
						<span>Comments</span>
						<span>{comments}</span>
					</li>
				</ul>

				<div className="history-card-section">
					<span>Comprehension</span>
				</div>
				<ul className="leaders">
					<li>
						<span>Quizzes</span>
						<span>{quizzes}</span>
					</li>
					<li>
						<span>Quizzes correct responses</span>
						<span>{correctResponses}</span>
					</li>
					<li className="bottom-padding">
						<span>Quizzes incorrect responses</span>
						<span>{incorrectResponses}</span>
					</li>
				</ul>

				{/* saved for later */}
				{/* <div className='history-card-section'>
          <span>Sentiment</span>
        </div>
        <ul className='leaders'>
          <li>
            <span>Polls</span>
            <span>{polls}</span>
          </li>
        </ul> */}
			</div>
			<div className="history-open-in-sheets">
				<div>Open in Google Sheets</div>
				<div>coming soon</div>
			</div>
			<div className="history-key-art">
				<HistoryKeyArt />
			</div>
		</section>
	);
}

export default History;
