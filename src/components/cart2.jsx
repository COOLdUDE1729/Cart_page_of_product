import React from 'react';
import { AiOutlineClose, AiFillHeart } from 'react-icons/ai';
// import {LuHeart} from 'react-icons/lu' ;
import { TbCurrencyRupee } from 'react-icons/tb';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import Shoe1 from '../asets/img/shoe1.jpg';
import Shoe2 from '../asets/img/shoe2.jpeg';

export default function () {

    return (
        <div className='w-[712px] h-[1024px] sm:mx-auto sm:p-[30px] bg-[#FFFFFF] '>
            <div className='flex justify-between text-xl'>
                <h1 className='font-bold text-2xl'>Cart</h1>
                <AiOutlineClose className='font-semibold mt-1 h-6 w-6' />
            </div>

            <div className='my-[30px] flex gap-[30px]'>
                <img src={Shoe1} alt="shoe1" className='w-[120px] h-[120px]' />
                <div className='w-[495px] flex flex-col my-[25px] gap-[10px]'>
                    <div className='flex justify-between items-center h-[27px]'>
                        <h1 className='font-semibold text-lg '>Nike Air Kicks</h1>
                        <div className='flex'>
                            <h1 className='pr-[10px] line-through opacity-60'>₹ 220</h1>
                            <h1 className='pr-[5px] font-medium'>₹ 159</h1>
                        </div>
                    </div>

                    <div className='flex justify-between items-center h-[34px]'>
                        <h1 className='text-[#EB8105] text-base font-medium '>In stocks</h1>
                        <div className='flex gap-[30px]'>
                            <CiSquareMinus size='3rem' className='opacity-60' />
                            <div className='my-auto'>1</div>
                            <CiSquarePlus size='3rem' className='opacity-60' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-[30px] flex gap-[30px]'>
                <img src={Shoe2} alt="shoe1" className='w-[120px] h-[120px]' />
                <div className='w-[495px] flex flex-col my-[25px] gap-[10px]'>
                    <div className='flex justify-between items-center h-[27px]'>
                        <h1 className='font-semibold text-lg '>Wildcraft limited edition</h1>
                        <div className='flex'>
                            <h1 className='pr-[10px] line-through opacity-60'>₹ 220</h1>
                            <h1 className='pr-[5px] font-medium'>₹ 159</h1>
                        </div>
                    </div>

                    <div className='flex justify-between items-center h-[34px]'>
                        <h1 className='text-[#EB8105] text-base font-medium '>In stocks</h1>
                        <div className='flex gap-[30px]'>
                            <CiSquareMinus size='3rem' className='opacity-60' />
                            <div className='my-auto'>1</div>
                            <CiSquarePlus size='3rem' className='opacity-60' />
                        </div>
                    </div>
                </div>
            </div>


            <hr className='mt-[430px] ' />
            <div className='flex flex-col mt-[30px]'>
                <div className='flex justify-between'>
                    <h1 className='text-lg'>Product Pricing:</h1>
                    <div className='flex text-lg '><h1 className='pr-[5px] font-bold'> ₹. 150</h1></div>
                </div>
            </div>
            <div className='flex flex-col my-[12px]'>
                <div className='flex justify-between'>
                    <h1 className='text-lg'>Discount:</h1>
                    <div className='flex text-lg '><h1 className='pr-[5px] font-bold text-[#16A34A]'>2.5%</h1></div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col my-[12px]'>
                <div className='flex justify-between'>
                    <h1 className='text-lg'>Subtotal:</h1>
                    <div className='flex text-lg '><h1 className='pr-[5px] font-bold'> ₹. 125</h1></div>
                </div>
            </div>
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