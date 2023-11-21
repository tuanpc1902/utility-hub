import { Dispatch, SetStateAction } from "react";
export type THeaderProps = {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
};