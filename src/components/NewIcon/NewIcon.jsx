import {ReactComponent as NewIcon} from "../NewIcon/control_point-black-18dp.svg";
import '../../App.css';

function StartSession(props) {
  const { new_class = 'icon', children, ...rest} = props 
  return (
    <div>
      <NewIcon className={`${new_class}`} />
    </div>
  )
}

export default StartSession;