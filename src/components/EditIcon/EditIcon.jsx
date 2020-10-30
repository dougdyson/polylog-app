import { ReactComponent as EditIcon } from "./edit-black-18dp.svg";
import "../../App.css";

function PencilIcon(props) {
	return (
		<div>
			<EditIcon className="icon" onClick={props.onEdit} />
		</div>
	);
}

export default PencilIcon;
