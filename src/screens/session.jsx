import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const SessionUUID = () => {
	let { uuid } = useParams();
	return uuid;
};

// eslint-disable-next-line
export default [
	<Route key="session" path="/session/:uuid">
		<h1>Session Goes Here!</h1>
		<h1>
			UUID: <SessionUUID />
		</h1>
	</Route>
];
