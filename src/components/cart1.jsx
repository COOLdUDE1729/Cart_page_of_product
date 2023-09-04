import React from 'react';
import {AiOutlineClose} from 'react-icons/ai' ;
import {AiFillHeart } from 'react-icons/ai';
import Empty_cart from '../asets/img/empty_cart.png';
export default function() {
    return(
        <div className='flex flex-col gap-[30px] w-[712px] h-[1024px] sm:mx-auto sm:p-[30px] bg-white'>
            <div className='flex justify-between text-xl'>
                <h1 className='font-bold text-2xl'>Cart</h1>
                <AiOutlineClose className='font-semibold mt-1 h-6 w-6' />
            </div>
            <div className='flex flex-col my-auto'>
                <img src={Empty_cart} alt="Empty_cart" className='w-[220px] h-[220px] justify-center mx-auto mt-3'/>
                <h1 className='mx-auto font-medium text-base'>Looks like your cart is empty</h1>
            </div>
            <hr className='' />
            <div className='flex justify-stretch gap-[10px]'>
                <button className=' text-black font-bold w-full h- rounded flex justify-center place-items-center gap-[5px]' style={{ background: "linear-gradient(180deg, #EB8105 0%, #FAAC06 100%)" }}>
                    <AiFillHeart size='1.5rem' />
                    <p className='text-base'>
                        ADD TO WISHLIST
                    </p>
                </button>
                <button className=' text-black font-bold text-base w-full h-11 rounded' style={{ background: "linear-gradient(180deg, #EB8105 0%, #FAAC06 100%)" }}>
                    PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
}