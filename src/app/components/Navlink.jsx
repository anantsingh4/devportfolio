import Link from 'next/link';

const Navlink = ({href, title}) => {
  return (
    <Link href={href}
    className = "block py-3 pl-3 pr-4 text-[#000000] sm:text-xl rounded md:p-0 hover:text-[#818181]"
    >
        {title}
    </Link>
  )
}

export default Navlink