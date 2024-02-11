import "./index.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import ResumePage from './pages/ResumePage'
import Home from './Home'

function App() {
	return (
		<>	
		<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/resume" element={<ResumePage />} />
		</Routes>
		</Router>
	</>
  )
}

export default App;
