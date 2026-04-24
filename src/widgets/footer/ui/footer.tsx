import { LayoutLinks } from "../../../shared/ui/layoutLinks"

const Footer = () => {
    return(
        <footer
            className="
                mt-[auto]
                border-t-border
                border-t-[1px]
            "
        >
            <div
                className="
                    text-muted-foreground     
                    m-auto
                    my-0
                    max-w-[1184px]
                    w-[100%]
                    p-[48px]
                    flex
                    items-center
                    justify-between
                "
            >
                <span>© 2026 Ivan Kalitiuk</span>
                <LayoutLinks />   

            </div>
        </footer>
    )
}

export default Footer