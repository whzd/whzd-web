import NavItem from "@/components/navitem";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-items-center drop-shadow-md text-center h-32">
        <div className="flex flex-col w-64 p-2 bg-home-base2 rounded-br-lg">
          <div className="bg-blog-base1 flex-auto" />
          <NavItem path="/blog" displayText="Blog" className=" bg-blog-base2 text-black text-3xl z-10" />
          <div className="bg-blog-hl1 flex-auto" />
          <div className="bg-blog-hl2 flex-auto" />
        </div>
        <div className="grow" />
        <div className=" bg-home-base2 w-64 rounded-bl-lg">
          <NavItem path="/projects" displayText="Projects" />
          <svg width="175" height="175" viewBox="-5 5 24 24" className="fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" />
          </svg>
        </div>
      </nav>
      <div className="h-dvh pt-16">
        <div className="flex px-80 drop-shadow-md max-h-80">
          <div className="w-2/3 bg-home-base2 rounded-l-lg pt-5">
            <div className="text-center text-7xl font-bold pb-5 text-home-hl1">
              <p>Hi, I'm whzd.</p>
            </div>
            <div className="text-justify text-2xl tracking-normal text-home-hl2 pl-7 pr-5">
              <p>Platform Engineer with 3+ years of experience and a DevOps mindset.
                Passionate about continuous learning, I thrive on creating innovative solutions.
                Committed to the 1% better philosophy, consistently refining skills and knowledge for personal growth.</p>
              <div className="flex flex-row-reverse text-home-hl1 underline">
                <NavItem path="/about" displayText="Learn More" />
              </div>
            </div>
          </div>
          <img className="w-1/3 object-cover rounded-r-lg" src="/img/wiz.png" alt="placeholder" />
        </div>
      </div>
    </div>

  )
}
