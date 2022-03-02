//import Context from "./context";
import React, { useContext } from "react";

export const Context = React.createContext();

export default function EventContext({ children }) {
	const s = {
		name: "John",
		title: "Daily Standup",
	};
	const [event, setEvent] = React.useState(s);
	// console.log(event)
	return <Context.Provider value={{ event }}>{children}</Context.Provider>;
}

export function useEvent() {
	return useContext(Context);
}
