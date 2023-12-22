import NavBar from "./components/navbar";
import NavItem from "./components/navitem";

export default function Home() {
return (
  <div>
  <NavBar />
    <div className="h-dvh">
      <div className="flex justify-center text-6xl font-bold pb-5">
        <p>Hi, I'm whzd.</p>
      </div>
      <div className="flex px-40 text-pretty">
        <span className="w-2/3 text-right">🚀 Platform Engineer with 3+ years of experience and a DevOps mindset.
        Passionate about continuous learning, I thrive on creating innovative solutions.
        Committed to the 1% better philosophy, let's build something extraordinary together! 💻 <NavItem path="/about" displayText="Learn More"/>
        </span>
        <img className="w-1/3"></img>
      </div>
    </div>
  </div>
    
  )
}
