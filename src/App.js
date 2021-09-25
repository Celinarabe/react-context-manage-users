import Greeting from "./components/Greeting";
import "./App.css";
import AuthForm from "./components/AuthForm";
import {AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Greeting />
        <AuthForm />
      </div>
    </AuthProvider>
  );
}

export default App;
