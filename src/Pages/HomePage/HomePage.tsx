import { useEffect, useState } from "react";
import { CreateTwitt } from "../../Components/HomeArea/CreateTwitt/CreateTwitt";
import { TwittsList } from "../../Components/HomeArea/TwittsList/TwittsList";
import { TwittsContexts } from "../../Lib/Context/TwitterContext";
import { type TwittType } from "../../Lib/Types/types";
import "./HomePage.css";

export function HomePage() {

    const [twitts, setTwitts] = useState<TwittType[]>([]);

    useEffect(() => {
        const localResults = localStorage.getItem('twitts');
        if (localResults) {
            const localTwitts = JSON.parse(localResults);
            setTwitts(localTwitts || []);
        }
        else {
            setTwitts([]);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('twitts', JSON.stringify(twitts));
    }, [twitts])


    return (
        <div className="HomePage">
            <TwittsContexts value={[twitts, setTwitts]}>
                <CreateTwitt />
                <TwittsList />
            </TwittsContexts>
        </div>
    );
}
