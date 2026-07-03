import { Nav, Footer } from './components/common.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import BuildRun from './components/BuildRun.jsx'
import Work from './components/Work.jsx'
import Toolkit from './components/Toolkit.jsx'
import Approach from './components/Approach.jsx'
import Stats from './components/Stats.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <BuildRun />
        <Work />
        <Toolkit />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
