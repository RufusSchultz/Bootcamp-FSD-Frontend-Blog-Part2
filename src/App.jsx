import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "../src/pages/home/HomePage.jsx";
import CreateNewBlogPost from "../src/pages/createNewBlogPost/CreateNewBlogPost.jsx";
import BlogsOverviewPage from "./pages/blogsOverview/BlogsOverviewPage.jsx";
import BlogPost from "../src/pages/blogPost/BlogPost.jsx";
import PageNotFound from "../src/pages/pageNotFound/PageNotFound.jsx";
import logo from "../src/assets/logo-medium.png";
import PractiseRequests from "./pages/practiseRequests/PractiseRequests.jsx";

function App() {
    return (
        <>
            <header>
                <img src={logo} alt="header logo"/>
                <nav>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/overview">Alle posts</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/newPost">Nieuwe post</NavLink></li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="newPost" element={<CreateNewBlogPost/>}/>
                <Route path="overview" element={<BlogsOverviewPage/>}/>
                <Route path="posts/:postId" element={<BlogPost/>}/>
                <Route path="practiseRequests" element={<PractiseRequests/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>

    )
}

export default App
