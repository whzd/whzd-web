import Link from "next/link";

export default function Projects() {
  return (
    <body id="projects-page">
      <nav className="flex flex-row justify-items-center drop-shadow-md text-center h-20">
        <Link href="/" className=" bg-home-base1 w-64 rounded-br-lg">
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
        <p className="text-7xl grow text-projects-hl1">Projects</p>
        <Link href="/blog" className="bg-blog-base1 w-64 rounded-bl-lg">
          <div className="bg-blog-base2 rounded-lg mx-10 mt-1">
            <p className="text-2xl text-blog-hl1" >Blog</p>
            <svg width="215" height="40" viewBox="13 0 24 24" className="fill-blog-hl2">
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
      </nav>
    </body>
  )
}
