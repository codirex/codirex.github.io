import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import About from "./pages/About"
import theme from "./theme";
import NavTitleProvider from "./context/NavTitleContext"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavTitleProvider>
      <Router>
        <Navbar title="Codirex" />
        <Container sx={{ minHeight: "80vh", py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
      </NavTitleProvider>;
    </ThemeProvider>
  );

}

export default App;