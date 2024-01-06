import Link from "next/link";

export default function Blog() {
  return (
    <body id="blog-page">
      <nav className="flex flex-row justify-items-center drop-shadow-md text-center h-20">
        <Link href="/projects" className=" bg-projects-base1 w-64 rounded-br-lg">
          <div className="bg-projects-base2 rounded-lg mx-10 mt-1">
            <p className="text-2xl text-projects-hl1" >Projects</p>
            <svg width="215" height="40" viewBox="10 0 24 24" className="fill-projects-hl2">
              <path fill-rule="evenodd"
                clip-rule="evenodd" d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z" />
            </svg>
          </div>
        </Link>
        <p className="text-7xl grow text-blog-hl2">Blog</p>
        <Link href="/" className=" bg-home-base1 w-64 rounded-bl-lg">
          <div className="bg-home-base2 rounded-lg mx-10 mt-1">
            <p className="text-2xl text-home-hl1" >Home</p>
            <svg width="215" height="39" viewBox="12 0 24 24" className="fill-home-hl2">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
              />
            </svg>
          </div>
        </Link>
      </nav>
      <div>
        <p>test</p>
      </div>
    </body>
  )
}
