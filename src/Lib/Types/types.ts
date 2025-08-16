export interface TwittType {
    id?: number; // as in db
    date: string;
    userName: string;
    content: string;
}

export enum Pages {
    Home = '/Twitter-react-ts',
    Login = '/login',
    Register = '/register',
}

export type TwittsContextTuple = [TwittType[], React.Dispatch<React.SetStateAction<TwittType[]>>];
export type UserContextTuple = [string, React.Dispatch<React.SetStateAction<string>>];
export type ActivePageContextTuple = [Pages, React.Dispatch<React.SetStateAction<Pages>>];



