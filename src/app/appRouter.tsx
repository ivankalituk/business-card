import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import '../shared/globals.css'
import MainPage from '../pages/mainPage/ui/mainPage'
import { WorksPage } from '../pages/worksPage'
import { AboutPage } from '../pages/aboutPage'
import Layout from './layout'



function AppRouter() {    

    const router = createBrowserRouter( 
        createRoutesFromElements(
            <Route
                path='/'
                element = {<Layout />}
            >
                <Route index element={<MainPage />} />
                <Route path='/works' element={<WorksPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Route>
        )
    )

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default AppRouter
