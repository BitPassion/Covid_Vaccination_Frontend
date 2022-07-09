import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import { NotificationsProvider } from "@mantine/notifications";
import "./index.css";
import Router from "./Router";

ReactDOM.render(
	<MantineProvider>
		<ColorSchemeProvider>
			<NotificationsProvider>
				<Router />
			</NotificationsProvider>
		</ColorSchemeProvider>
	</MantineProvider>,
	document.getElementById("root")
);


