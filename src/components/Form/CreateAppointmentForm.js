import React from "react";
import { useForm, joiResolver } from "@mantine/form";
import {  
	Text,
	TextInput,
	Button,
	Select,
	Box } from "@mantine/core";
import api from "../../services/api";
import { showNotification } from "@mantine/notifications";
import appointmentSchema from "../../validators/SchemaValidator";
import dayjs from "dayjs";
import { DatePicker } from "@mantine/dates";
import hourOptions from "../../utils/hourOptions";

const CreateAppointmentForm = () => {

	const hoursOp = hourOptions();
	const nameLs = localStorage.getItem("Nome:");
	const birthDateLs = localStorage.getItem("Data de Nascimento:");
	const dateLs = localStorage.getItem("Data do agendamento:");
	const hourLs = localStorage.getItem("Horário:");

	const form = useForm({
		schema: joiResolver(appointmentSchema),
		initialValues: {
			name: nameLs,
			birthDate: birthDateLs,
			date: dateLs,
			hour: hourLs,
		}
	});

	localStorage.setItem("Nome:", form.values.name);
	localStorage.setItem("Data de nascimento:", form.values.birthDate);
	localStorage.setItem("Dia do agendamento:", form.values.date);
	localStorage.setItem("Horário:", form.values.hour);

	return (
		<Box>
			<form onSubmit = {form.onSubmit((value) => {
				//alert(JSON.stringify(value, null, 2));

				async function store(){
					try {
						const {name, birthDate, date, hour} = value;
						const newAppointment = {
							name,
							birthDate: new Date(dayjs(birthDate).get("date")),
							date: new Date(dayjs(date).get("date")),
							hour: parseInt(hour),
						};
      
						await api.post("/appointment", newAppointment);
						showNotification({
							color: "green",
							title: "Success",
							message: "Appointment created with success",
						});
                    
					} catch (error) {
						let message = "Error connecting to server.";
						if(error.response.status === 403){
							message = error.response.data.message; 
						}
						showNotification({
							title: "Failed",
							color: "red",
							message
						});
					}
				}
				store();
			})}
			>
				<div>
					<h1> <Text color="gray" size="xl">Criando Agendamento:</Text></h1>
          
					<DatePicker
						label="Data do agendamento:"
						placeholder="Selecione a data do agendamento"
						required
						locale="pt-br"
						firstDayOfWeek="sunday"
						inputFormat="DD/MM/YYYY"
						{...form.getInputProps("date")}
					/>

					<Select
						label="Horário:"
						placeholder="Selecione a hora"
						required
						data={hoursOp}
						{...form.getInputProps("hour")}
					/>

					<TextInput 
						label="Nome:"
						placeholder="Nome completo"
						required 
						{...form.getInputProps("name")}
					/>

					<DatePicker
						label="Data de Nascimento:"
						placeholder="Selecione a data de nascimento"
						required
						locale="pt-br"
						firstDayOfWeek="sunday"
						inputFormat="DD/MM/YYYY"
						{...form.getInputProps("birthDate")}
					/>

					<Button mt={16} type="submit" color="blue">
                        Criar Agendamento
					</Button>
				</div>
			</form> 
		</Box>
		
	);
};

export default CreateAppointmentForm;