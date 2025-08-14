export interface TwittType {
    id: string;
    date: string;
    userName: string;
    content: string;
}

export type TwittsContextsTuple = [TwittType[], React.Dispatch<React.SetStateAction<TwittType[]>>]

