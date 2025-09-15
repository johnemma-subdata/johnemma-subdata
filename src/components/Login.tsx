import { useState } from 'react'
import axios from 'axios'
export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const submit = async (e: React.FormEvent) => {
e.preventDefault()
const { data } = await axios.post('/api/auth/login', { email, password })
localStorage.setItem('johnemma_token', data.token)
localStorage.setItem('johnemma_role', data.user.role)
window.location.href = '/dashboard'
}
return (
	<form onSubmit={submit} className="max-w-md mx-auto p-6">
		<h2 className="text-2xl mb-4">Login</h2>
		<input
			className="w-full mb-3 p-2 border rounded"
			placeholder="Email"
			value={email}
			onChange={e => setEmail(e.target.value)}
			required
		/>
		<input
			className="w-full mb-3 p-2 border rounded"
			placeholder="Password"
			type="password"
			value={password}
			onChange={e => setPassword(e.target.value)}
			required
		/>
		<button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">
			Login
		</button>
	</form>
)
}