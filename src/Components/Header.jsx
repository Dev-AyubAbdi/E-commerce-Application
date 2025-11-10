
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const Header = () => {
  return (
    
      <div className='flex justify-around bg-white shadow p-6 items-center text-center'>
      <div>
        {/* logo */}
        <Link className='text-1xl text-gray-600' to={"/"}>E-commerce Shop</Link>
      </div>
      {/* navbars */}
      <div className='space-x-7  text-gray-500'>
        <Link className='hover:text-pink-500' to="/">Home</Link>
        <Link className='hover:text-pink-500' to="/products">Products</Link>
        <Link className='hover:text-pink-500' to="/about">About</Link>
        <Link className='hover:text-pink-500' to="/contact">Contact</Link>
      </div>

      <div className='relative'>
        <Link to={"/cart"}>
         <span> <HiOutlineShoppingBag className='w-9 h-9'/></span>
        <span className='absolute w-5 h-6  -top-0 -right-0   bg-pink-500 rounded-full text-white'>10</span>
        </Link>
       
      </div>
    </div>
  )
}
