import './App.css'
import LineChart from './Component/LineChart/LineChart'
import NavBar from './Component/NavBar/NavBar'
import Phones from './Component/Phones/Phones'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import DaisiNav from './Component/DaisiNav/DaisiNav'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisiNav></DaisiNav> */}
      <h1 className="text-7xl bg-red-800">Vite + React</h1>
     
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
  
     
    </>
  )
}

export default App
