import { useTwitterContext } from "../../../Lib/Context/TwitterContext";
import { TwittCard } from "../TwittCard/TwittCard";
import "./TwittsList.css";

export function TwittsList() {
    const [twitts, setTwitts] = useTwitterContext()
    return (
        <div className="TwittsList">
            {twitts.map(t =>
                <TwittCard key={t.id} twitt={t} />
            )}

        </div>
    );
}
