import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Gallery from "./pages/gallery/Gallery"
import Contact from "./pages/contact/Contact"
import Privacy from "./pages/legal/Privacy"
import News from "./pages/news/News"
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import Stats from "./pages/stats/Stats"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/protected-route/ProtectedRoute"
import "./App.css"

function App() {
  return (
    <AuthProvider>
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
              <Route path="/stats" element={<Stats />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
