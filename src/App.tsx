import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white selection:bg-orange-500/30 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Team />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
