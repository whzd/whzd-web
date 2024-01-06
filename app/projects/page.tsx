import NavItem from "@/components/navitem";

export default function Projects() {
  return (
    <body id="projects-page">
      <nav className="flex flex-row justify-items-center drop-shadow-md text-center h-32">
        <NavItem path="/" displayText="Home" className="text-xl bg-projects-base2 text-projects-hl2 w-64" />
        <p className="text-xl grow text-projects-hl2">Projects</p>
        <NavItem path="/blog" displayText="Blog" className="text-xl bg-projects-base2 text-projects-hl2 w-64" />
      </nav>
    </body>
  )
}
