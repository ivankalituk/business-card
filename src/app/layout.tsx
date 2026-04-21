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
            "
        >
            <Header />

                <main className="font-mono">
                    <Outlet />
                </main>

            <Footer />
        </div>
    )
}

export default Layout