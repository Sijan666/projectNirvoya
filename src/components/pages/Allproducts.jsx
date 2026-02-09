import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Slider } from "@/components/ui/slider"
import { IoMdStar } from 'react-icons/io'
import Product from '../Product'
import { IoStar } from 'react-icons/io5'
import f7 from '../../assets/f7.webp'
import w4 from '../../assets/w4.webp'
import f6 from '../../assets/f6.webp'
import w2 from '../../assets/w2.webp'
import w3 from '../../assets/w3.webp'
import f12 from '../../assets/f12.webp'



const Allproducts = () => {

    const [priceRange, setPriceRange] = useState([75]);
    const currentPrice = priceRange[0] * 25;

    return (
        <>
        <section>
            <div className="bg-[#FAFAFA] pt-[43px] pb-12.5 w-[420px] lg:w-full">
                <Container className={'lg:w-[1405px] w-[395px]'}>
                    <Flex className={'gap-x-13 items-start!'}>
                        {/* left side start */}
                        <div className="leftBar w-[20%] py-[25px] bg-white px-5 hidden lg:block">
                            <div className="pb-[18px] border-b border-[#F4F4F4]">
                                <h4 className='text-[#3D3D3F] text-[18px] font-medium'>Related Categories</h4>
                                <p className='text-[#757575] text-base py-1 hover:text-[#0198E9] cursor-pointer duration-300'>Men’s fashion</p>
                                <div className="pl-2">
                                    <ul className='text-[#757575] text-base '>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Men’s Jacket</li>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Men's T-Shirts</li>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Casual Shirts</li>
                                        <li className='mb-1 hover:text-[#0198E9] cursor-pointer duration-300'>Summer T-Shirts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-between items-center! cursor-pointer pb-8">
                                    <h4 className='text-[#383838] font-medium text-[18px]'>Filter by Price</h4>
                                    <MdOutlineKeyboardArrowDown/>
                                </div>
                                <div className="range">
                                    <Slider 
                                        defaultValue={[75]}
                                        max={100}
                                        step={1}
                                        onValueChange={(value) => setPriceRange(value)}
                                        className="custom-range-slider w-full mx-auto"
                                    />
                                </div>
                                <div className="price py-6 border-b border-[#F4F4F4]">
                                    <Flex className={'gap-x-2'}>
                                        <p className='text-[#A7A7A7] text-[18px]'>Price:</p>
                                        <p className='text-[#383838] text-[18px] font-medium'>
                                            ৳ 0 - ৳ {currentPrice}
                                        </p>
                                    </Flex>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-between items-center! cursor-pointer pb-8">
                                    <h4 className='text-[#383838] font-medium text-[18px]'>Filter by Rating</h4>
                                    <MdOutlineKeyboardArrowDown/>
                                </div>
                                <div className="">
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                    <div className="flex gap-x-3 items-center mb-4">
                                        <input type="checkbox" />
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                        <IoMdStar className='text-[#FFB340]'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* left side end */}
                        {/* right side start */}
                        <div className="rightSide w-full">
                            <Flex className="justify-between">
                                <div className="left">
                                    <h4 className='lg:text-[18px] text-sm text-[#424241]/50 font-medium'>Showing <span className='text-[#424241]'> 20 </span> of <span className='text-[#424241]'>160</span> product</h4>
                                </div>
                                <div className="right flex lg:gap-x-2 gap-x-1 items-center">
                                    <h4 className='lg:text-[18px] text-sm text-[#424241]/50 font-medium'>Sort by:</h4>
                                    <select className='px-4 py-1 text-[#424241] border border-[#F0F0F0] outline-none lg:w-40 w-30 appearance-none text-[18px]'>
                                        <option value="">Newest Items</option>
                                        <option value="">Featured</option>
                                        <option value="">Best Sellers</option>
                                        <option value="">Final Offer</option>
                                    </select>
                                </div>
                            </Flex>
                            {/* first line start */}
                            <div className="pt-6">
                                <Flex className={' flex-wrap gap-y-5 justify-between px-2'}>
                                    {/* product 1*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product 
                                        productImg={f7}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳5000"}
                                        />
                                    </div>
                                    {/* product 2*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={w4}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000.00"}
                                        />
                                    </div>
                                    {/* product 3*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={f6}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000"}
                                        />
                                    </div>
                                    {/* product 4*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product 
                                        productImg={w2}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000"}
                                        />
                                    </div>
                                    {/* product 5*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={w3}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳5000"}
                                        />
                                    </div>
                                    {/* product 6*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={f12}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000.00"}
                                        />
                                    </div>
                                    {/* product 7*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product 
                                        productImg={f7}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳5000"}
                                        />
                                    </div>
                                    {/* product 8*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={w4}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000.00"}
                                        />
                                    </div>
                                    {/* product 9*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={f6}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000"}
                                        />
                                    </div>
                                    {/* product 10*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product 
                                        productImg={w2}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000"}
                                        />
                                    </div>
                                    {/* product 11*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={w3}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳5000"}
                                        />
                                    </div>
                                    {/* product 12*/}
                                    <div className="w-[48%] lg:w-[33%]">
                                        <Product
                                        productImg={f12}
                                        badgeText={""}
                                        productRating={
                                            <>
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar /> 
                                            <IoStar className="text-[#D3D3D3]"/> 
                                            </>
                                        }
                                        productTitle={"Headrest Executive Mesh Office Chair set"}
                                        productPrice={"৳1000.00"}
                                        />
                                    </div>
                                </Flex>
                            </div>
                            {/* first line end */}
                        </div>
                        {/* right side end */}
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Allproducts