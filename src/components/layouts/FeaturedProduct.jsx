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
import Button from '../Button'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


const FeaturedProduct = () => {
    return (
        <>
        <div className="pb-12.5">
            <Container>
                <div className="flex justify-between items-center pb-10">
                    <h3 className="text-[26px] font-medium text-[#2E2E2E]">Featured Product</h3>
                    <button className="flex items-center gap-x-2 text-[#757575] text-base font-medium cursor-pointer">View More <FaArrowRight /></button>
                </div>
                <Flex className={'justify-between'}>
                    <Product
                        productImg={f1}
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
                        productPrice={"৳10500"}
                    />
                    <Product
                        productImg={f2}
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
                        productTitle={"Women fashion dress set"}
                        productPrice={"৳1000"}
                    />
                    <Product
                        productImg={f3}
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
                    <Product
                        productImg={f4}
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
                </Flex>
                {/* second line */}
                <Flex className={'justify-between pt-5'}>
                    <Product
                        productImg={f5}
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
                        productPrice={"৳10500"}
                    />
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
                        productTitle={"Women fashion dress set"}
                        productPrice={"৳1000"}
                    />
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
                </Flex>
                {/* third line */}
                <Flex className={'justify-between pt-5'}>
                    <Product
                        productImg={f9}
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
                        productPrice={"৳10500"}
                    />
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
                        productTitle={"Women fashion dress set"}
                        productPrice={"৳1000"}
                    />
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
                </Flex>
                {/* fourth line */}
                <Flex className={'justify-between py-5'}>
                    <Product
                        productImg={f1}
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
                        productPrice={"৳10500"}
                    />
                    <Product
                        productImg={f14}
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
                        productTitle={"Women fashion dress set"}
                        productPrice={"৳1000"}
                    />
                    <Product
                        productImg={f15}
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
                    <Product
                        productImg={f16}
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
                </Flex>
                <div className="text-center pt-5">
                    <button className='px-6.5 py-[11px] text-white font-semibold text-base rounded-[81px] bg-[#0198E9] cursor-pointer flex gap-x-2 items-center mx-auto'>Show more<MdOutlineKeyboardArrowDown/></button>
                </div>
            </Container>
        </div>
        </>
    )
}

export default FeaturedProduct