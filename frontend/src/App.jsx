import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMap from "./Pages/ContactMap";
import E404 from "./Pages/E404";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
	return (
		<div>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/map" element={<ContactMap />} />
					<Route path="*" element={<E404 />} />
				</Routes>
			</BrowserRouter>
			<Sidebar />
		</div>
	);
}

export default App;
