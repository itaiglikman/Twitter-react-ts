import { useEffect, useState } from "react";
import { dbName, supabaseDB } from '../../../DB/supabaseConfig';
import { CreateTwitt } from "../../Components/HomeArea/CreateTwitt/CreateTwitt";
import { TwittsList } from "../../Components/HomeArea/TwittsList/TwittsList";
import { TwittsContext } from "../../Lib/Context/TwitterContext";
import { type TwittType } from "../../Lib/Types/types";
import "./HomePage.css";

export function HomePage() {
    const [twitts, setTwitts] = useState<TwittType[]>([]);

    useEffect(() => {
        async function getTwitts(): Promise<void> {
            try {
                let { data, error } = await supabaseDB.from(dbName).select('*');
                if(error) throw error;
                setTwitts(data as TwittType[])
            } catch (error: any) {
                console.log(error.message);
            }
        }

        getTwitts(); // first api call

        // polling
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