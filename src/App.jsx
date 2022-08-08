import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=" flex relative ">
      <div className="sidebar  fixed  bg-green-500">Sidebar</div>

      <div className="min-h-screen w-full flex-2">
        <div className="navbar bg-cyan-500">Navbar</div>
        <div className="content bg-slate-500">content</div>
      </div>
    </div>
  )
}

export default App
