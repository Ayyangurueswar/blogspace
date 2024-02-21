import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full bg-slate-950 text-white sm:flex-row flex-col flex justify-between items-center 
    px-12 py-6 gap-4 sm:gap-0">
      <Link href='/' className="bg-transparent flex gap-4 sm:w-1/3 justify-self-center">
        <Image src='/images/logo.png' alt="logo" width={40} height={25}/>
        <h1 className="text-2xl font-bold">BlogSpace</h1>
      </Link>
      <nav className="flex gap-7 justify-between items-center sm:w-1/3 sm:justify-end">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  )
}

export default Header