import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"


export default function App() {
    return (
        <div className="main-container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}