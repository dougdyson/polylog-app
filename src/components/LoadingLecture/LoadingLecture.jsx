import React from "react";
import { ReactComponent as LoadingLecture } from "./loading-lectures-key-art.svg";

import "./LoadingLecture.css";

export default function Loading(props) {
	return (
		<div>
			<LoadingLecture className="loading-lectures-key-art" />
		</div>
	);
}
