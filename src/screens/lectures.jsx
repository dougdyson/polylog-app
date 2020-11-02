import React from "react";
import { Route } from "react-router-dom";
import Lectures from "../components/Lectures/Lectures";

// eslint-disable-next-line
export default [
	<Route key="lectures" path="/lectures">
		<Lectures />
	</Route>
];
