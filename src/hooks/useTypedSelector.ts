import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/counterReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;