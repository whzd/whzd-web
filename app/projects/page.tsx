import NavItem from "@/components/navitem";

export default function Projects(){
  return (
  <div>
    <nav className="grid grid-flow-col justify-stretch justify-items-center items-stretch pb-10 bg-home-base2 drop-shadow-md ">
      <NavItem path="/" displayText="Home"/>
      <p>Projects</p>
      <NavItem path="/blog" displayText="Blog"/>
    </nav>
  <body id="page-projects"></body>
  </div>
  )
}