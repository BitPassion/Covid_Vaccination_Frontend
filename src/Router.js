import Appointment from "./pages/CreateAppointment";
import Home from "./pages/Home";
import ListAppointments from "./pages/ListAppointments";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";

const Router = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route element={<Home/>} index />
					<Route path='/listAppointments' element={<ListAppointments/>} />
					<Route path='/newAppointment' element={<Appointment/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;