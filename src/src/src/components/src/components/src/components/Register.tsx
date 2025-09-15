import { useState } from 'react'
import axios from 'axios'
export default function Register() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [phone, setPhone] = useState('')
const [referral_code, setReferralCode] = useState(new URLSearchParams(window.location.search).get('ref') || '')
const submit = async (e: React.FormEvent) => {
e.preventDefault()
await axios.post('/api/auth/register', { email, password, phone, referral_code })
alert('Check your email for verification code')
window.location.href = '/login'
}
return (
    <form onSubmit={submit} className="max-w-md mx-auto p-6">
      <h2 className="text-2xl mb-4">Register</h2>
      <input className="w-full mb-3 p-2 border rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input className="w-full mb-3 p-2 border rounded" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
      <input className="w-full mb-3 p-2 border rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <input className="w-full mb-3 p-2 border rounded" placeholder="Referral Code (optional)" value={referral_code} onChange={e => setReferralCode(e.target.value)} />
      <button className="w-full bg-green-600 text-white p-2 rounded" type="submit">
        Register
      </button>
    </form>
);
}