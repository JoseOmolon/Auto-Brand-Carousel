import ExperienceTimeline from "./components/ExperienceTimeline"
import SkillsCarousel from "./components/SkillsCarousel"


function App() {


  return (
    
      <div>
        <h1 className="text-4xl text-center font-bold mt-48">My Skills</h1>
       <SkillsCarousel />
       <ExperienceTimeline />
      </div>
      
  )
}

export default App
