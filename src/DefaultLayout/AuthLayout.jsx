import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function AuthLayout() {

    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    )
}