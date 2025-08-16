import { createContext, useContext } from "react";
import { Pages, type ActivePageContextTuple } from "../Types/types";

export const ActivePageContext = createContext<ActivePageContextTuple>([Pages.Login, () => { }]);

export const useActivePageContext = () => {
    return useContext(ActivePageContext);
} 