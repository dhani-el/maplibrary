
import BasicMap from "./BasicMap/basic"
import MarkerlessMap from "./MarkerLessMap/markerless"
function App() {
const token = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN


  return (
    <div style={{height:"100vh"}}>
      <MarkerlessMap  longitude={3.3515} latitude={6.6018} accessToken={token} zoom={10}/>
    </div>
  )
}

export default App
