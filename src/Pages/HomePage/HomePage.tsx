import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dbName, supabaseDB } from '../../../DB/supabaseConfig';
import { CreateTwitt } from "../../Components/HomeArea/CreateTwitt/CreateTwitt";
import { TwittsList } from "../../Components/HomeArea/TwittsList/TwittsList";
import { useActivePageContext } from "../../Lib/Context/ActivePageContext";
import { TwittsContext } from "../../Lib/Context/TwitterContext";
import { useUserContext } from "../../Lib/Context/UserContext";
import { Pages, type TwittType } from "../../Lib/Types/types";
import "./HomePage.css";

export function HomePage() {

    const [user] = useUserContext();
    const navigate = useNavigate();

    const [, setActivePage] = useActivePageContext()
    setActivePage(Pages.Home);
    const [twitts, setTwitts] = useState<TwittType[]>([]);

    useEffect(() => {
        if (!user.length) { // navigate to login form if not logged - in
            navigate(Pages.Login);
            return;
        }

        async function getTwitts(): Promise<void> {
            try {
                let { data, error } = await supabaseDB.from(dbName).select('*');
                if (error) throw error;
                if (!data?.length) throw new Error('Posts are not available');
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