import Header from "./components/Header/Header";
import BuiltCoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";



function App() {
  
  return (
    <div>
      <Header />
      <main>
        <BuiltCoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
