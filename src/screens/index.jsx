import React from "react";
import { Switch } from "react-router-dom";
import home from "./home";
import lectures from "./lectures";
import session from "./session";
import register from "./register";
import login from "./login";

const Screens = () => {
	return (
		<Switch>{[...lectures, ...session, ...register, ...login, ...home]}</Switch>
	);
};

export default Screens;
