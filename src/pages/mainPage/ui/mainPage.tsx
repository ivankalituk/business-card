import MainInfoBlock from "./mainInfoBlock"
import MainWorksBlock from "./mainWorksBlock"

const MainPage = () => {
    return(
        <div
            className="pt-[128px] pb-[256px]"
        >
            <MainInfoBlock />
            <MainWorksBlock />
        </div>
    )
}

export default MainPage