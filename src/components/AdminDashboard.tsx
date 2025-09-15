import { useEffect, useState } from 'react'
import axios from 'axios'
export default function AdminDashboard() {
	const [profits, setProfits] = useState<any>(null);
	return (
		<div className="p-6">
			<h2 className="text-2xl mb-4">Admin Dashboard</h2>
			<div className="grid md:grid-cols-4 gap-4">
				<div className="border rounded p-4">
					<div className="font-bold">Profit</div>
					<div>{profits}</div>
				</div>
				<div className="border rounded p-4">
					<div className="font-bold">Other Metric</div>
					<div>Value</div>
				</div>
				{/* Add more dashboard cards as needed */}
			</div>
		</div>
	);
}