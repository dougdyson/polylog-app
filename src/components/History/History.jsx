import React from "react";
import { ReactComponent as SessionHistoryIcon } from "./bar_chart-24px.svg";
import { ReactComponent as HistoryKeyArt } from "./history-key-art.svg";
import Button from "../Button/Button";
import useSessionHistory from "../../hooks/useSessionHistory";
import "./History.css";

function History(props) {
	const { history } = useSessionHistory(props.lecture.id);

	return (
		<section className="history-container">
			<div className="history-card-header-row">
				<div className="history-card-header">
					<SessionHistoryIcon className="history-icon" />
					<h2 className="history-card-title">Lecture Reporting</h2>
				</div>
				<Button variant="close" onClick={props.onClose}>
					x
				</Button>
			</div>

			<div className="history-lecture-title">{props.lecture.title}</div>
			<div className="history-dates">
				{(history.created_at &&
					String(new Date(history.created_at)).substring(0, 15)) ||
					String(new Date()).substring(0, 15)}{" "}
				- {String(new Date()).substring(0, 15)}
			</div>

			<div className="history-lecture-totals">
				<ul className="leaders">
					<li className="bottom-padding">
						<span>Lecture Sessions</span>
						<span>{history.sessions_count}</span>
					</li>
					<li>
						<span>Total Attendees</span>
						<span>{history.attendees_count}</span>
					</li>
					<li className="bottom-padding">
						<span>Average Attendees</span>
						<span>{Math.floor(history.attendees_avg)}</span>
					</li>
				</ul>

				<div className="history-card-section">
					<span>Engagement</span>
				</div>
				<ul className="leaders">
					<li>
						<span>Thumbs Up Reactions</span>
						<span>{history.positive_reactions_count}</span>
					</li>
					<li className="bottom-padding">
						<span>Confused Reactions</span>
						<span>{history.negative_reactions_count}</span>
					</li>
				</ul>

				<div className="history-card-section">
					<span>Participation</span>
				</div>
				<ul className="leaders">
					<li>
						<span>Questions</span>
						<span>{history.questions_count}</span>
					</li>
					<li className="bottom-padding">
						<span>Answers</span>
						<span>{history.answers_count}</span>
					</li>
					{/* <li className="bottom-padding">
						<span>Comments</span>
						<span>{history.comments_count}</span>
					</li> */}
				</ul>

				<div className="history-card-section">
					<span>Comprehension</span>
				</div>
				<ul className="leaders">
					<li>
						<span>Quizzes</span>
						<span>{history.quiz_cards_count}</span>
					</li>
					<li>
						<span>Quizzes correct responses</span>
						<span>{history.quiz_correct_count || 0}</span>
					</li>
					<li className="bottom-padding">
						<span>Quizzes incorrect responses</span>
						<span>{history.quiz_incorrect_count || 0}</span>
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

			{/* Remove for now makes the page scroll for no reason */}
			{/* <div className="history-key-art">
				<HistoryKeyArt />
			</div> */}
		</section>
	);
}

export default History;
