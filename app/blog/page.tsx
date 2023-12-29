import NavItem from "@/components/navitem";

export default function Blog(){
  return (
    <div>
    <nav className="grid grid-flow-col justify-stretch justify-items-center items-stretch pb-10 bg-blog-base2 drop-shadow-md ">
      <NavItem path="/projects" displayText="Projects" className="text-xl text-blog-hl1"/>
      <p className="text-xl grow text-blog-hl1">Blog</p>
      <NavItem path="/" displayText="Home" className="text-xl text-blog-hl1"/>
    </nav>
    <body className="bg-blog-base1"></body>
    </div>
  )
}