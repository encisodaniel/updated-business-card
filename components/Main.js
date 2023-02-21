import React from "react"

export default function Main() {
    return (
        <main>
            <div className="container contact-info">
                <h1>Daniel Enciso</h1>
                <h4>Frontend Developer</h4>
                <small>dany_yo98@hotmail.com</small>
            </div>
                <button>
                    <img src="./images/email-icon.png" />
                    Email
                </button>
            <div className="info-container">
                <div>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </main>
    )
}