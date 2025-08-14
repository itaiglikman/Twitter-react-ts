import { CreateTwitt } from "../../Components/HomeArea/CreateTwitt/CreateTwitt";
import { TwittsList } from "../../Components/HomeArea/TwittsList/TwittsList";
import "./HomePage.css";

export function HomePage() {
    return (
        <div className="HomePage">

            <CreateTwitt />
            <TwittsList />

        </div>
    );
}
