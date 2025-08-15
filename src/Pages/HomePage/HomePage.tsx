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
            const result = await axios.get(apiURL);
            // should return error
            if (!result) return;
            setTwitts(result.data as TwittType[]);
        }

        getTwitts()
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
