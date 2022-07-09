import { Outlet } from "react-router-dom";
import {Container, Text} from "@mantine/core";


const Home = () => {
	return(
		<Container size={700} px={0} mt={70}>
			<Text
				color = "gray"
				size="lg"
				weight={700}
			>
            Bem-vindo ao Sistema de Agendamento de Vacinação contra Covid-19</Text>
			<Outlet />
		</Container>
	);
};

export default Home;