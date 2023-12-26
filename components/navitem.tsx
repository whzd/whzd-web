import Link from "next/link"

export function NavItem(props: {path: string, displayText: string, className?: string}){
  return (
        <Link href={props.path} className={props.className}>
          <p>{props.displayText}</p>
        </Link>
  )
}

export default NavItem