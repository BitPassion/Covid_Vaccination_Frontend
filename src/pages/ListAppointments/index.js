import { useEffect } from "react";
import { showNotification } from "@mantine/notifications";
import axios from "../../services/api";
import ListView from "../../components/ListView";
import { Box } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const ListAppointments = () => {
  
	useEffect(() => {
		try {
			const data = axios.get("/appointment/");
			localStorage.setItem("LsAppointments", data);
		} catch (error) {
			console.error(error);
		}
	}, []);

	return(
		<>
			<Box sx={(theme) => ({  textAlign: "left", padding: theme.spacing.md})}>
				<DatePicker
					label="Selecione a data:"
					firstDayOfWeek="sunday"
					clearable
					//onChange={async (value) => {
					// }
				/>
			</Box>
			< Box  sx={(theme) => ({ textAlign: "center",
				padding: theme.spacing.xl,
				borderRadius: theme.radius.md  })}
			>
				<ListView columns={[
					{ key: "id", value: "ID"},
					{ key: "hour", value: "Horário"}, 
					{ key: "name", value: "Nome"}, 
					{ key: "birthDate", value: "Data de Nascimento"}, 
					{ key: "accomplised", value: "Atendido"}, 
					{ key: "status", value: "Conclusão"}
				]}
				//endpoint="/appointment/"
				title="Visualizando Agendamentos"
				/>
			</Box>
		</>
	);
};

export default ListAppointments;