import "./App.css";
import { StoreProvider } from "./store/Provider";
import AccessPage from "./pages/AccessPage";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <AccessPage />
      </div>
    </StoreProvider>
  );
}

export default App;
