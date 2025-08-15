export interface TwittType {
    id?: number; // as in db
    date: string;
    userName: string;
    content: string;
}

export type TwittsContextTuple = [TwittType[], React.Dispatch<React.SetStateAction<TwittType[]>>];
export type UserContextTuple = [string, React.Dispatch<React.SetStateAction<string>>];

