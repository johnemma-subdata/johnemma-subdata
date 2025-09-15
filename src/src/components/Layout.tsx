import { Outlet, Link } from 'react-router-dom'
export default function Layout({ token, logout }: { token: string | null; logout: () => void }) {
  return (
	<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	  <header className="p-4 flex justify-between items-center border-b">
		<Link to="/" className="text-xl font-bold">Home</Link>
		<nav className="flex gap-4">
		  <Link to="/docs">Docs</Link>
		  {token ? (
			<>
			  <Link to="/dashboard">Dashboard</Link>
			  <button onClick={logout} className="text-red-600">Logout</button>
			</>
		  ) : (
			<>
			  <Link to="/login">Login</Link>
			  <Link to="/register">Register</Link>
			</>
		  )}
		</nav>
	  </header>
	  <main>
		<Outlet />
	  </main>
	</div>
  );
}