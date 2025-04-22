import { Outlet } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>

                {
                    isLoading && (
                        <Loader />
                    )
                }
                <Outlet />

            </main>
            <Footer />
        </>
    )
}