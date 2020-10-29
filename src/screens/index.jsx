import React from "react";
import { Switch } from "react-router-dom";
import lectures from "./lectures";

const Screens = () => {
	return (
		<Switch>
			{[
				/* Add screens here,
          ...screen */
				...lectures
			]}
		</Switch>
	);
};

// Remember to import screens from App.js
export default Screens;
