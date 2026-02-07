import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import { IoStar } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa6'
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'
import f7 from '../../assets/f7.png'
import w4 from '../../assets/w4.png'
import f9 from '../../assets/f9.png'
import w2 from '../../assets/w2.png'
import w3 from '../../assets/w3.png'
import f12 from '../../assets/f12.png'
import f14 from '../../assets/f14.png'
import f15 from '../../assets/f15.png'
import f16 from '../../assets/f16.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'


const FeaturedProduct = () => {
    return (
        <>
        <div className="pb-12.5">
            <Container>
                <div className="flex justify-between items-center pb-10 px-2">
                    <h3 className="text-[26px] font-medium text-[#2E2E2E]">Featured Product</h3>
                        <Link to={'/allproducts'}>
                        <button className="flex items-center gap-x-2 text-[#757575] text-base font-medium cursor-pointer">
                                View More <FaArrowRight />
                        </button>
                        </Link>
                </div>
                <Flex className={'flex-wrap gap-y-5 justify-between px-2'}>
                    {/* Product 1 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f1}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳10500"}
                        />
                    </div>
                    {/* Product 2 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f2}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Women fashion dress set"}
                            productPrice={"৳1000"}
                        />
                    </div>
                    {/* Product 3 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f3}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳5000"}
                        />
                    </div>
                    {/* Product 4 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f4}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳1000.00"}
                        />
                    </div>
                    {/* Product 5 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f5}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳10500"}
                        />
                    </div>
                    {/* Product 6 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f6}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Women fashion dress set"}
                            productPrice={"৳1000"}
                        />
                    </div>
                    {/* Product 7 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f7}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳5000"}
                        />
                    </div>
                    {/* Product 8 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={w4}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳1000.00"}
                        />
                    </div>
                    {/* Product 9 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f9}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳10500"}
                        />
                    </div>
                    {/* Product 10 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={w2}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Women fashion dress set"}
                            productPrice={"৳1000"}
                        />
                    </div>
                    {/* Product 11 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={w3}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳5000"}
                        />
                    </div>
                    {/* Product 12 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f12}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳1000.00"}
                        />
                    </div>
                    {/* Product 13 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f1}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳10500"}
                        />
                    </div>
                    {/* Product 14 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f14}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Women fashion dress set"}
                            productPrice={"৳1000"}
                        />
                    </div>
                    {/* Product 15 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f15}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳5000"}
                        />
                    </div>
                    {/* Product 16 */}
                    <div className="w-[48%] lg:w-[24%]">
                        <Product
                            productImg={f16}
                            badgeText={""}
                            productRating={<div className="flex"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar className="text-[#D3D3D3]"/></div>}
                            productTitle={"Headrest Executive Mesh Office Chair set"}
                            productPrice={"৳1000.00"}
                        />
                    </div>
                </Flex>
                <div className="text-center pt-10">
                    <Link to={'/allproducts'}>
                    <button className='px-6.5 py-[11px] text-white font-semibold text-base rounded-[81px] bg-[#0198E9] cursor-pointer flex gap-x-2 items-center mx-auto hover:bg-sky-600 transition-colors'>
                        Show more <MdOutlineKeyboardArrowDown/>
                    </button>
                    </Link>
                </div>
            </Container>
        </div>
        </>
    )
}

export default FeaturedProduct