import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'

function App() {
    return (
        <>
            <Header />

            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
            </main>

            <Footer />
        </>
    )
}

export default App;