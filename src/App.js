import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./assets/theme";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Projects from "./assets/pages/Projects";
import Blog from "./assets/pages/Blog.js";
import Courses from "./assets/pages/Courses";
import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Navbar/>

        <Container sx={{minHeight: "80vh", py: 4}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/assets/pages/projects" element={<Projects />} />
            <Route path="/assets/pages/blog" element={<Blog />} />
            <Route path="/assets/pages/courses" element={<Courses />} />
            <Route path="/assets/pages/contact" element={<Contact />} />
            <Route path="/assets/pages/about" element={<About />} />
          </Routes>
        </Container>
      </Router>

      <Footer/>

    </ThemeProvider>
  );
}

export default App;
