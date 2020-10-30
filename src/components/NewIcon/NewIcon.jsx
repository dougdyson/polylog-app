import { ReactComponent as NewIcon } from "../NewIcon/control_point-24px.svg";
import "../../App.css";

function StartSession(props) {
	const { new_class = "icon", children, ...rest } = props;
	return (
		<div>
			<NewIcon className={`${new_class}`} />
		</div>
	);
}

export default StartSession;
