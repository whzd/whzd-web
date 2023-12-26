import NavItem from "@/components/navitem";

export default function Blog(){
  return (
    <div>
    <nav className="grid grid-flow-col justify-stretch justify-items-center items-stretch pb-10 bg-home-base2 drop-shadow-md ">
      <NavItem path="/projects" displayText="Projects"/>
      <p>Blog</p>
      <NavItem path="/" displayText="Home"/>
    </nav>
    </div>
  )
}