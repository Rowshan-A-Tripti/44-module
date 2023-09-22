import './App.css'
import NavBar from './Component/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import DaisiNav from './Component/DaisiNav/DaisiNav'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisiNav></DaisiNav> */}
      <h1 className="text-7xl bg-red-800">Vite + React</h1>
     
      <PriceOptions></PriceOptions>
  
     
    </>
  )
}

export default App
