import { useReducer, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth.js"
import {login, logout} from "./features/authSlice.js"

export default function App() {
	// When the app loads, it will load the env variable only once
	//  Must restart the app if any changes were made in the env file

	// if project is created with create react(npx), value of env is fetched in this way
	// console.log(process.env.REACT_APP_APPWRITE_URL)

	// if project is created with vite, value of env is fetched in this way
	// console.log(import.meta.env.VITE_APPWRITE_URL)	

	const initialState = {
		loading: true
	}

	function reducer(state, action) {
		switch (action.type) {
			case "start":
				return { ...state, loading: true }
			case "end":
				return { ...state, loading: false }
			default:
				return state
		}
	}

	const [state1, dispatch] = useReducer(reducer, initialState)

	return (
		<>

		</>
	)
}
