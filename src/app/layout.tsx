import type { FC } from "react";
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";
import { Outlet } from "react-router-dom";
import '../shared/globals.css'

const Layout: FC = () => {
    return(
        <div 
            className="
                bg-background
                color
                min-h-[100dvh]
                flex
                flex-col
            "
        >
            <Header />

                <main className="
                    max-w-[1184px]
                    w-[100%]
                    px-[48px]
                    mx-auto
                    mb-[40px]
                ">
                    <Outlet />
                </main>

            <Footer />
        </div>
    )
}

export default Layout