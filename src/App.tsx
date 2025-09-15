import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './components/Landing'
// TODO: Fix: Ensure Landing.tsx exists at src/components/Landing.tsx
// If Landing.tsx is missing, create it or update the import path below
import Login from './components/Login'
// TODO: Fix: Ensure Login.tsx exists at src/components/Login.tsx
// If Login.tsx is missing, create it or update the import path below
import Register from './components/Register'
// TODO: Fix: Ensure Register.tsx exists at src/components/Register.tsx
// If Register.tsx is missing, create it or update the import path below
import Dashboard from './components/Dashboard'
// TODO: Fix: Ensure Dashboard.tsx exists at src/components/Dashboard.tsx
// If Dashboard.tsx is missing, create it or update the import path below
import AdminDashboard from './components/AdminDashboard'
// TODO: Fix: Ensure Docs.tsx exists at src/components/Docs.tsx
// If Docs.tsx is missing, create it or update the import path below
import Docs from './components/Docs'
import { useEffect, useState } from 'react'
export function App() {
const [token, setToken] = useState<string | null>(localStorage.getItem('johnemma_token'))
const [role, setRole] = useState<string | null>(localStorage.getItem('johnemma_role'))
useEffect(() => {
const t = localStorage.getItem('johnemma_token')
const r = localStorage.getItem('johnemma_role')
if (t) setToken(t)
if (r) setRole(r)
}, [])
const logout = () => {
localStorage.clear()
setToken(null)
setRole(null)
window.location.href = '/'
}
return (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout token={token} logout={logout} />}>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
				<Route path="/admin" element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
				<Route path="/docs" element={<Docs />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
}
export default App