import { Route, Routes } from 'react-router-dom'
import './shared/globals.css'
import { Footer } from './widgets/footer'
import { Header } from './widgets/header'
import MainPage from './pages/mainPage/ui/mainPage'
import { WorksPage } from './pages/worksPage'
import { AboutPage } from './pages/aboutPage'



function App() {
    return (
        <div className=''>
            <Header />
                <main>
                    <Routes>
                        
                        <Route  path='/' Component={MainPage}/>
                        <Route  path='/works' Component={WorksPage}/>
                        <Route  path='/about' Component={AboutPage}/>

                        
                    </Routes>
                </main>
            <Footer />
        </div>
    )
}

export default App
