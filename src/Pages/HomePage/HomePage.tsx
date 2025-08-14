import { useState } from "react";
import { CreateTwitt } from "../../Components/HomeArea/CreateTwitt/CreateTwitt";
import { TwittsList } from "../../Components/HomeArea/TwittsList/TwittsList";
import "./HomePage.css";
import { type TwittType } from "../../Lib/Types/types";
import { TwittsContexts } from "../../Lib/Context/TwitterContext";

export function HomePage() {
    const mockTwitts: TwittType[] = [
    {
        id: '1',
        date: '2024-06-01',
        userName: 'alice',
        content: 'Hello Twitter! This is my first tweet.',
    },
    {
        id: '2',
        date: '2024-06-02',
        userName: 'bob',
        content: 'Excited to join the conversation here!',
    },
    {
        id: '3',
        date: '2024-06-03',
        userName: 'charlie',
        content: 'Just finished a great book on TypeScript.',
    },
    {
        id: '4',
        date: '2024-06-04',
        userName: 'diana',
        content: 'Anyone up for a coding challenge?',
    },
    {
        id: '5',
        date: '2024-06-05',
        userName: 'eve',
        content: 'Happy Friday! What are your weekend plans?',
    },
];

    const [twitts, setTwitts] = useState<TwittType[]>(mockTwitts);

    return (
        <div className="HomePage">
            <TwittsContexts value={[ twitts, setTwitts ]}>
                <CreateTwitt />
                <TwittsList />
            </TwittsContexts>
        </div>
    );
}
