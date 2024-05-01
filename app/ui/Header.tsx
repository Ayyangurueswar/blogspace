import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full bg-slate-950 text-white sm:flex-row flex-col flex justify-between items-center 
    px-12 py-6 gap-4 sm:gap-0">
      <Link href='/' className="bg-transparent flex gap-4 sm:w-1/3 justify-self-center">
        <Image src='/images/logo.png' alt="logo" width={40} height={25}/>
        <h1 className="text-3xl font-bold">BlogSpace</h1>
      </Link>
      <nav className="flex gap-7 justify-between items-center sm:w-1/3 sm:justify-end">
        <Link href='/blog/page/1' className="hover:text-indigo-500">BLOGS</Link>
        <Link href='/about' className="hover:text-indigo-500">ABOUT</Link>
      </nav>
    </header>
  )
}

export default Header