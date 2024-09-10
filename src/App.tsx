
import SearchableMap from "./Searchable Map/SearchableMap";

function App() {
const token = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;
const mapKey = import.meta.env.VITE_MAP_Key;

  return (
    <div style={{height:"100vh"}}>
      <SearchableMap  longitude={3.3515} latitude={6.6018} accessToken={token} zoom={10} mapKey={mapKey} />
    </div>
  )
}

export default App
