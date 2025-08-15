import { useState } from "react";
import "./App.css";
import { Header } from "./Components/LayoutArea/Header/Header";
import { Routing } from "./Components/LayoutArea/Routing/Routing";
import { UserContext } from "./Lib/Context/UserContext";

function App() {
    const [userName, setUserName] = useState<string>('');
    return (
        <div className="App">
            <UserContext value={[userName, setUserName]}>
                <Header />
                <Routing />
            </UserContext>
        </div >
    );
}

export default App;
