import { useState } from 'react'
import { Nav, Footer } from './components/common.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import BuildRun from './components/BuildRun.jsx'
import Work from './components/Work.jsx'
import Toolkit from './components/Toolkit.jsx'
import Approach from './components/Approach.jsx'
import Stats from './components/Stats.jsx'
import Contact from './components/Contact.jsx'
import BootScreen from './components/BootScreen.jsx'
import CursorTrail from './components/CursorTrail.jsx'
import AchievementToast from './components/AchievementToast.jsx'
import RadarChart from './components/RadarChart.jsx'
import DeployModal from './components/DeployModal.jsx'

export default function App() {
  const [activeFilter, setActiveFilter] = useState(null)
  return (
    <>
      <BootScreen />
      <CursorTrail />
      <AchievementToast />
      <DeployModal />
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <BuildRun />
        <Work activeFilter={activeFilter} />
        <Toolkit activeFilter={activeFilter} onFilter={setActiveFilter} />
        <RadarChart />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
