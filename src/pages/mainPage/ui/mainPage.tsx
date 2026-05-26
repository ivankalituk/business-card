import MainInfoBlock from "./mainInfoBlock"
import MainWorksBlock from "./mainWorksBlock"

const MainPage = () => {
    return(
        <div
            className="
                pt-[60px] pb-[256px]
                md:pt-[128px]
            "
        >
            <MainInfoBlock />
            <MainWorksBlock />
        </div>
    )
}

export default MainPage