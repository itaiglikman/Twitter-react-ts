import { Loader } from "@mantine/core";
import { useTwitterContext } from "../../../Lib/Context/TwitterContext";
import { TwittCard } from "../TwittCard/TwittCard";
import "./TwittsList.css";
import { useUserContext } from "../../../Lib/Context/UserContext";

export function TwittsList() {
    const [twitts] = useTwitterContext();
    const [user] = useUserContext();
    const sortedTwitts = twitts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (!user.length) return 'Please Log-In';

    return (
        <div className="TwittsList">
            {!twitts.length && <Loader />}
            <div className="cards-container">
                {sortedTwitts.map(t =>
                    <TwittCard key={t.id} twitt={t} />
                )}
            </div>

        </div>
    );
}
