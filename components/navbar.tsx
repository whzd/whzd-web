import NavItem from "./navitem"

export function NavBar(){
  return (
  <header>
      <nav className="grid grid-flow-col justify-stretch justify-items-center items-stretch pb-10">
        <NavItem path="/projects" displayText="Projects" />
        <NavItem path="/" displayText="Home" />
        <NavItem path="/blog" displayText="Blog" />
      </nav>
  </header>)
}

export default NavBar