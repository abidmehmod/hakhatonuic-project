import Link from "next/link";


export default function Navbar() {
    return (
      
        <div>
            <div className="w-[1920px] h-[90px] bg-[#0D0D0D] flex items-center sm:flex sm:items-center sm:justify-center sm:gap-4 sm:h-[90px]">
                <div className="w-[1320px] h-[32px] ">
                    <ul className="flex text-white justify-center gap- 4 font-semiboldflex flex-col sm:flex-row items-center gap-4 font-semibold ">
                        <li className="hover:text-gray-400" ><Link href="/">Home</Link></li>
                        <li className="hover:text-gray-400"><Link href="/menu">Menu</Link></li>
                        <li className="hover:text-gray-400"><Link href="/blog">Blog</Link></li>
                        <li className="hover:text-gray-400"><Link href="/pages">Pages</Link></li>
                        <li className="hover:text-gray-400"><Link href="/about">About</Link></li>
                        <li className="hover:text-gray-400"><Link href="/shop">Shop</Link></li>
                        <li className="hover:text-gray-400"><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            
        </div>
      
    );
  }
  