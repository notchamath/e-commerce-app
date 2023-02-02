import { Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="app-container">
        <div>Navigation</div>
    
        <Outlet/>
    </div>
  )
}

