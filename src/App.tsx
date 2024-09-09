
import BasicMap from "./BasicMap/basic"
import { enviroment } from "./enviroment"

function App() {

  return (
    <div style={{height:"100vh"}}>
      <BasicMap  longitude={3.3515} latitude={6.6018} accessToken={enviroment.mapBoxAccessToken} zoom={10}/>
    </div>
  )
}

export default App
