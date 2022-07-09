import {Button, Table} from "@mantine/core";
 
const TableComponent = ({actions = [], columns = [], rows = []}) => {
	return(
		<Table horizontalSpacing="sm" verticalSpacing="md" fontSize="md" highlightOnHover>
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={index}>{column.value}</th>
					))}
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr>
						{columns.map((column, index) => {
							const value = row[column.key];

							return(
								<td key={index}>
									{column.value}
								</td>
							);
						})}
             
						<td>
							{actions.map(({ icon, name, onClick, ...props }, index) => (
								<Button
									leftIcon={icon}
									key={index}
									onClick={() => onClick(row)}
									{...props}
								>
									{name}
								</Button>
							))}                       
						</td>
					</tr>
				))}
			</tbody>
		</Table >
	);
};

export default TableComponent;