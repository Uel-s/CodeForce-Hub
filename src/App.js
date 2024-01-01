import React from 'react'
import './index.css'
import Header from './components/Header'
import Employees from './pages/Employees'
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header>
					<Routes>
						<Route
							path="/"
							element={<Employees />}
						/>
						<Route
							path="/employees"
							element={<Employees />}
						/>
					</Routes>
				</Header>
			</BrowserRouter>
		</div>
	)
}

export default App
