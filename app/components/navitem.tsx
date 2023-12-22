import Link from "next/link"

export function NavItem(props: {path: string, displayText: string}){
  return (
        <Link href={props.path} className="flex items-center justify-center h-16">
          <p>{props.displayText}</p>
        </Link>
  )
}

export default NavItem