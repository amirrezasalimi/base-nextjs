import { atom } from "recoil";
import IApp from "@/models/store/app";

const appState = atom<IApp>({
    key: "appState",
    default: {
        theme: "dark"
    }
});

export default appState;