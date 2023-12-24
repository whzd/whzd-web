import NavBar from "../components/navbar";
import NavItem from "../components/navitem";

export default function Home() {
return (
  <div>
  <NavBar />
    <div className="h-dvh">
      <div className="flex px-80 text-pretty">
        <div className="text-right">
          <div className="text-6xl font-bold pb-5">
            <p>Hi, I'm whzd.</p>
          </div>
          <div className="text-lg">
            <p>Platform Engineer with 3+ years of experience and a DevOps mindset.</p>
            <p>Passionate about continuous learning, I thrive on creating innovative solutions.</p>
            <p>Committed to the 1% better philosophy, let's build something extraordinary together!</p>
            <div className="flex">
              <NavItem path="/about" displayText="Learn More"/>
            </div>
          </div>
        </div>
        <div className="w-1/3 pl-5">
          <img className="rounded-r-full" src="/img/wiz.png"></img>
        </div>
      </div>
    </div>
  </div>
    
  )
}
