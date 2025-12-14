import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth.js"
import { login, logout } from "./features/authSlice.js"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import { Outlet } from "react-router-dom"

export default function App() {
	// When the app loads, it will load the env variable only once
	//  Must restart the app if any changes were made in the env file

	// if project is created with create react(npx), value of env is fetched in this way
	// console.log(process.env.REACT_APP_APPWRITE_URL)

	// if project is created with vite, value of env is fetched in this way
	// console.log(import.meta.env.VITE_APPWRITE_ENDPOINT)

	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()

	useEffect(() => {
		authService.getCurrentUser()
			.then(userData => {
				if (userData) {
					dispatch(login(userData))
				} else {
					dispatch(logout())
				}
			})
			.finally(() => setLoading(false))
	}, [])

	return !loading ? (
		<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
			<div className="w-full block">
				<Header />
				<main>
					<Outlet/>
				</main>
				<Footer />
			</div>
		</div>
	) : null
}
