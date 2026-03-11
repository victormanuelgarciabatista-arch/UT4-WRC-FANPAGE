// Main file that controls the routes of the web
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Gallery from "./pages/gallery/Gallery"
import Contact from "./pages/contact/Contact"
import Privacy from "./pages/legal/Privacy"
import News from "./pages/news/News"
import "./App.css"

function App() {
  return (
    // React Router to move between pages
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/news" element={<News />} />
            {/* If the URL is wrong, go to home page */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
