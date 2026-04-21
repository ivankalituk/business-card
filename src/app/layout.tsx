import type { FC } from "react";
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return(
        <div>
            <Header />

                <main>
                    <Outlet />
                </main>

            <Footer />
        </div>
    )
}

export default Layout