import { Loader } from "@mantine/core";
import { useTwitterContext } from "../../../Lib/Context/TwitterContext";
import { TwittCard } from "../TwittCard/TwittCard";
import "./TwittsList.css";

export function TwittsList() {
    const [twitts] = useTwitterContext();
    const sortedTwitts = twitts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className="TwittsList">
            {/* should display when there is no twitts variable. 
            when no length should display message 'no tweets  */}
            {!twitts.length && <Loader />}
            <div className="cards-container">
                {sortedTwitts.map(t =>
                    <TwittCard key={t.id} twitt={t} />
                )}
            </div>

        </div>
    );
}
