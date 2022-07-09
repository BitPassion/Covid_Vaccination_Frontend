import {
	AppShell,
	Navbar,
	Header,
	Group,
	Text,
} from "@mantine/core";
import {
	Vaccine
} from "tabler-icons-react";
import MainLinks from "./MainLinks";
import { Outlet } from "react-router-dom";
  
const Layout = () => {
	return (
		<AppShell
			padding="md"
			navbar={
				<Navbar width={{ base: 300 }} height={800} p="xs" style={{ backgroundColor: "#778899" }}>
					<Navbar.Section grow mt="xs">
						<MainLinks />
					</Navbar.Section>
					<Navbar.Section>{}</Navbar.Section>
				</Navbar>
			}
			header={
				<Header height={60} style={{ backgroundColor: "#4169E1"}}>
					<Group sx={{ height: "100%" }} ml={"40%"}>
						<Text  size="md" color="white">
							Vacinação contra Covid-19 
						</Text> <Vaccine color={"white"} size={30}/>
					</Group>
				</Header>
			}
			styles={(theme) => ({
				main: {
					height: "90vh",
					backgroundColor: "dark[0]" 
				}
			})}
		>
			<Outlet/>
		</AppShell>
	);
};
  
export default Layout;