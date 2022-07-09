import {
	Modal,
	TextInput,
	Button,
} from "@mantine/core";
import { useState } from "react";
  
const AppointmentModal = ({
	opened,
	toggle,
	appointment = {
		name: "",
		date: "",
		hour: 0,
		birthDate: "",
		accomplished: "",
		status: "",
	},
	onSubmit,
}) => {
	const [form, setForm] = useState(appointment);
  
	const onChange = (event) => {
		setForm((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};
  
	return (
		<Modal opened={opened} onClose={toggle} size="70%" title="Movie">
			<TextInput
				label="Name"
				mb={16}
				name="name"
				value={form.name}
				onChange={onChange}
			/>
  
			<Button mt={16} onClick={() => onSubmit(form)}>
          Submit
			</Button>
		</Modal>
	);
};
  
export default AppointmentModal;
  