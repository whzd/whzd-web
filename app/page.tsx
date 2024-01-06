import NavItem from "@/components/navitem";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-items-center drop-shadow-md text-center h-32">
        <Link href="/blog" className="bg-blog-base1 w-64 rounded-br-lg">
          <div className="bg-blog-base2 rounded-lg mx-10 mt-1">
            <p className="text-2xl text-blog-hl2" >Blog</p>
            <svg width="215" height="88" viewBox="7 0 24 24" className="fill-blog-hl1">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
              />
              <path
                d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
              />
            </svg>
          </div>
        </Link>
        <div className="grow" />
        <Link href="/projects" className=" bg-projects-base1 w-64 rounded-bl-lg">
          <div className="bg-projects-base2 rounded-lg mx-10 mt-1">
            <p className="text-2xl text-projects-hl1" >Projects</p>
            <svg width="215" height="88" viewBox="5 0 24 24" className="fill-projects-hl2">
              <path fill-rule="evenodd"
                clip-rule="evenodd" d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z" />
            </svg>
          </div>
        </Link>
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
