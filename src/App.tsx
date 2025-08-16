import { useState } from "react";
import "./App.css";
import { Header } from "./Components/LayoutArea/Header/Header";
import { Routing } from "./Components/LayoutArea/Routing/Routing";
import { UserContext } from "./Lib/Context/UserContext";
import { ActivePageContext } from "./Lib/Context/ActivePageContext";
import { Pages } from "./Lib/Types/types";

function App() {
    const [userName, setUserName] = useState<string>('');
    const [activePage, setActivePage] = useState<Pages>(Pages.Home);
    
    return (
        <div className="App">
            <UserContext value={[userName, setUserName]}>
                <ActivePageContext value={[activePage, setActivePage]}>
                    <Header />
                    <Routing />
                </ActivePageContext>
            </UserContext>
        </div >
    );
}

export default App;
