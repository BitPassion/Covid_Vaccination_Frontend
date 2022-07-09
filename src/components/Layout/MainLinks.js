import React from "react";
import {
	Book,
	Home,
	CalendarTime,
} from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function MainLink({ icon, color, label, path }) {
	const navigate = useNavigate();

	return (
		<UnstyledButton
			onClick={() => navigate(path)}
			sx={(theme) => ({
				display: "block",
				width: "100%",
				padding: theme.spacing.xs,
				borderRadius: theme.radius.md,
			})}
		>
			<Group mb={15}>
				<ThemeIcon color={color} variant="dark">
					{icon}
				</ThemeIcon>
				<Text size="lg" color={"white"} weight={700}>{label}</Text>
			</Group>
		</UnstyledButton>
	);
}

const routes = [
	{
		icon: <Home size={18} />,
		color: "blue",
		label: "Inicio",
		path: "/",
	},
	{
		icon: <CalendarTime size={18} />,
		color: "blue",
		label: "Criar Agendamento",
		path: "/newAppointment",
	},
	{
		icon: <Book size={18} />,
		color: "blue",
		label: "Visualizar Agendamentos",
		path: "/listAppointments",
	}
];

export default function MainLinks() {
	return (
		<div>
			{routes.map((route) => (
				<MainLink key={route.label} {...route} />
			))}
		</div>
	);
}