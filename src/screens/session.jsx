import React from "react";
import { Route } from "react-router-dom";
import Session from "../components/Session";

// eslint-disable-next-line
export default [
	<Route key="session" path="/session/:uuid">
		<Session />
	</Route>
];
