import "./App.css";
import CakeContainer from "./components/Cake-container";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
