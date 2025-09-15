import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Landing() {
const [plans, setPlans] = useState<any[]>([])
useEffect(() => {
axios.get('/api/data_plans').then(r => setPlans(r.data))
}, [])
return (
  <div className="p-6">
	<h1 className="text-3xl font-bold mb-4">Data Plans</h1>
	<div className="grid md:grid-cols-3 gap-4">
	  {plans.map((p) => (
		<div key={p.id} className="border rounded p-4">
		  <div className="font-semibold">{p.name}</div>
		  <div className="text-green-600">{p.price}</div>
		</div>
	  ))}
	</div>
  </div>
);
}
