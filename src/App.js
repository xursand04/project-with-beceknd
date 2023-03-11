import Navbar from "./components/navbar";
import Router from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop:'80px'}}>
      <Router/>
      </div>
    </div>
  );
}

export default App;



