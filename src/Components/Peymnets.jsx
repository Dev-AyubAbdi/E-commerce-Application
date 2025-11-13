import React from 'react'

export const Peymnets = () => {
  return (
    <div className='border w-1/3 rounded-lg p-4'>
        <div>
            <h2 className='text-3xl font-semibold mb-4'><h2>Choose Peyment Methods</h2></h2>
        </div>
        <div className='border-b'>
            <div>
            < input type="radio" name="peyment" id="" />
            <label className='pl-3' htmlFor="">Card Peyment</label>
        </div>
        <div className='mb-7'>
            <input type="radio" name="peyment" id="" />
            <label className='pl-3' htmlFor="">Card Peyment</label>
        </div>
        </div>

        <div className='flex justify-between mt-6'>
            <span>SubTotal</span>
            <h2>$10</h2>
        </div>
        <div className='flex justify-between mt-4 mb-5'>
            <span>Total</span>
            <h2>$10</h2>
        </div>

        <button className='bg-pink-600 w-full p-3 text-white rounded-lg mt-10'>procced to checkout</button>
    </div>
  )
}
