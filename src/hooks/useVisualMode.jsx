import React from "react";

const useVisualMode = initial => {
	const [mode, setMode] = React.useState(initial);
	const [history, setHistory] = React.useState([initial]);

	const transition = (newMode, replace = false) => {
		if (replace) {
			setHistory(prev => [...prev.slice(0, -1), newMode]);
			setMode(newMode);
		} else {
			setHistory(prev => [...prev, newMode]);
			setMode(newMode);
		}
	};

	const back = () => {
		if (history.length > 1) {
			setHistory(prev => {
				prev.pop();
				setMode(prev[prev.length - 1]);
				return [...prev];
			});
		}
	};

	return { mode, transition, back };
};

export default useVisualMode;
