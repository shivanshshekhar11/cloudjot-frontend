import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./ui/componets/Header";
import Footer from "./ui/componets/Footer";
import Home from "./ui/screens/Home";
import SavePage from "./ui/screens/save";
import DownloadPage from "./ui/screens/download";
import FilesPage from "./ui/screens/files";
import KeyScreen from "./ui/screens/key_screen";
import About from "./ui/screens/About";


export default function Main() {
    return (
        <Router>
            <Header/>
            <div style={{height:'5vw'}}></div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/save" element={<SavePage/>} />
                    <Route path="/download" element={<DownloadPage/>} />
                    <Route path="/files/:key" element={<FilesPage/>} />
                    <Route path="/key/:key" element={<KeyScreen/>} />
                    <Route path="/About" element={<About/>} />
                </Routes>

            </div>
            <div style={{height:'5vw'}}></div>
            <Footer/>
        </Router>
    );
}

