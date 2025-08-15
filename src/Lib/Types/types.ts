export interface TwittType {
    id: string;
    date: string;
    userName: string;
    content: string;
}

export type TwittsContextTuple = [TwittType[], React.Dispatch<React.SetStateAction<TwittType[]>>];
export type UserContextTuple = [string, React.Dispatch<React.SetStateAction<string>>];

