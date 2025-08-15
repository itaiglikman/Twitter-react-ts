import { createContext, useContext } from "react";
import { type TwittsContextTuple } from "../Types/types";

export const TwittsContext = createContext<TwittsContextTuple>([[], () => { }]);

export const useTwitterContext = () => {
    return useContext(TwittsContext);
} 