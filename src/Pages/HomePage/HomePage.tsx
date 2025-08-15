import { useEffect, useState } from "react";
import { CreateTwitt } from "../../Components/HomeArea/CreateTwitt/CreateTwitt";
import { TwittsList } from "../../Components/HomeArea/TwittsList/TwittsList";
import { apiURL } from "../../Lib/Constants";
import { TwittsContext } from "../../Lib/Context/TwitterContext";
import { type TwittType } from "../../Lib/Types/types";
import "./HomePage.css";
import axios from "axios";

export function HomePage() {
    const [twitts, setTwitts] = useState<TwittType[]>([]);

    useEffect(() => {
        async function getTwitts(): Promise<void> {
            try {
                const result = await axios.get(apiURL);
                setTwitts(result.data as TwittType[]);
            } catch (error: any) {
                console.log(error.message);
            }
        }

        getTwitts(); // first api call

        const interval = setInterval(() => {
            console.log('fetch');
            getTwitts();
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="HomePage">
            <TwittsContext value={[twitts, setTwitts]}>
                <CreateTwitt />
                <TwittsList />
            </TwittsContext>
        </div>
    );
}
