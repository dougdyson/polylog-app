import { ReactComponent as PlayIcon } from "../PlayIcon/play_circle_outline-24px.svg";
import "../../App.css";

function StartSession(props) {
	return (
		<div>
			<PlayIcon className="icon" onClick={props.onPlay} />
		</div>
	);
}

export default StartSession;
