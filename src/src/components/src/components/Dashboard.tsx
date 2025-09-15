import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [wallet, setWallet] = useState<any>(null)
  const [txns, setTxns] = useState<any[]>([])

  useEffect(() => {
	const token = localStorage.getItem('johnemma_token')
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	axios.get('/api/user/wallet').then(r => setWallet(r.data))
	axios.get('/api/transactions').then(r => setTxns(r.data))
  }, [])

  if (!wallet) return <p>Loading...</p>

  return (
	<div className="p-6">
	  <h2 className="text-2xl mb-4">Dashboard</h2>
	  <div className="mb-4">
		<span className="font-bold">Wallet Balance: {wallet.balance}</span>
	  </div>
	  <div className="grid md:grid-cols-2 gap-4">
		<div className="border rounded p-4">
		  <h3 className="font-semibold mb-2">Recent Transactions</h3>
		  {txns.slice(0, 5).map((t: any) => (
			<div key={t.id} className="flex justify-between py-1 border-b text-sm">
			  <span>{t.description}</span>
			  <span>{t.amount}</span>
			</div>
		  ))}
		</div>
	  </div>
	</div>
  )
}
