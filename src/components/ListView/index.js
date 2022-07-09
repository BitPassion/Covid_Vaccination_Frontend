import { useState } from "react";
import axios from "../../services/api";
import Table from "../Table";
import { Text } from "@mantine/core";
import { Pencil } from "tabler-icons-react";

const ListView = ({ 
	columns, 
	endpoint, 
	title
}) => {
	const [rows, setRows] = useState([]);
    
	if(endpoint){
		axios.get(endpoint)
			.then((response) => setRows(response.data))
			.catch(console.error);
	}

	const actions = [
		{
			leftIcon: <Pencil />,
			onClick: () => alert("editando..."),
			color: "indigo",
			variant: "filled"
		}
	];
	return (
		<>
			<Text color="gray" underline weight={700} size="md">{title}</Text>
			<Table actions={actions} columns={columns} rows={rows}/>
		</>
	);


};

export default ListView;