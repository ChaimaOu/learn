import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={< Contact />} />

      </Routes>
    </div>
  )
}
export default App;
