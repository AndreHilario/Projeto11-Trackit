import { useContext } from "react";
import AuthContext from "./AuthSupplier";

export default function useAuthTo () {
    return useContext(AuthContext);
}
