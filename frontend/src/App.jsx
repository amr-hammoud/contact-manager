import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactForm from "./Pages/ContactForm";
import ContactMap from "./Pages/ContactMap";
import E404 from "./Pages/E404";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form/:id?" element={<ContactForm />} />
				<Route path="/map" element={<ContactMap />} />
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
