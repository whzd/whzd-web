import NavItem from "@/components/navitem";

export default function Blog() {
  return (
    <body id="blog-page">
      <nav className="flex flex-row justify-items-center drop-shadow-md text-center h-32">
        <NavItem path="/projects" displayText="Projects" className="text-xl bg-blog-base2 text-blog-hl2 w-64 rounded-br-lg" />
        <p className="text-xl grow text-blog-hl2">Blog</p>
        <NavItem path="/" displayText="Home" className="text-xl bg-blog-base2 text-blog-hl2 w-64 rounded-bl-lg" />
      </nav>
      <div>
        <p>test</p>
      </div>
    </body>
  )
}
