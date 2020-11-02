import { ReactComponent as HistoryIcon } from "./bar_chart-24px.svg";
import "../../App.css";

function ClockIcon(props) {
	return (
		<div>
			<HistoryIcon className="icon" onClick={props.onHistory} />
		</div>
	);
}

export default ClockIcon;
