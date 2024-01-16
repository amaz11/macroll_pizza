'use client'
import ProductSlider from "@/app/compontents/slider/ProductSlider";
import Slider from "@/app/compontents/slider/Slider";
import { fraunces, mooli, staatliches } from "@/app/layout";
import Image from "next/image";
import pic1 from "../../../public/home-4-img-1.jpg"
import pic2 from '@/public/h2-blog-img1.jpg'
import pic3 from '@/public/h2-blog-img2.jpg'
import { IoPersonOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import pizza from '@/public/product-list-3.png'
import ProductMenuCard from "@/app/compontents/cards/ProductMenuCard";


export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <div className={`flex flex-col lg:flex-row justify-between items-center gap-4 py-16 px-5 lg:px-0 md:py-24 lg:pl-28 overflow-hidden bg-[url('https://marcello.qodeinteractive.com/wp-content/uploads/2022/04/home-noise-.png')]`}>
        <div>
          <span className={`${fraunces.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] italic mb-4`}>Family Pizzeria</span>
          <h1 className={`${staatliches.className} text-[60px] sm:text-[80px] md:text-[90px] lg:text-[110px] font-bold uppercase  leading-[55px] sm:leading-[70px] md:leading-[99px] text-[#F43B00]`}>
            WELCOME<br />
            TO ORIGINAL<br />
            ITALIAN<br />
            PIZZERIA</h1>
        </div>
        <div>
          <Slider />
        </div>
      </div>

      {/* Product Slide */}
      <div className="py-[80px]">
        <ProductSlider />
      </div>

      {/* Work schedule */}
      <div className="py-[80px] flex items-stretch flex-col lg:flex-row">
        <div className="">
          <Image src={pic1} alt="pic" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="bg-[url('https://marcello.qodeinteractive.com/wp-content/uploads/2022/04/home-noise-.png')] p-5 md:p-10 lg:p-28 max-h-full flex flex-col justify-between gap-6">
          <div>
            <span className={`${fraunces.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] italic mb-4`}>Working Hours</span>
            <h2 className={`${staatliches.className} text-[36px] sm:text-[60px] md:text-[80px] font-bold uppercase leading-[30px] sm:leading-[50px] md:leading-[70px] text-[#F43B00]`}>ENJOY AUTHENTIC ITALIAN TASTE</h2>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between gap-4 items-end">
              <h5 className={`${staatliches.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] p-0 m-0 leading-6`}>MONDAY - FRIDAY</h5>
              <div className="grow border-b-2 border-b-[#F43B00] border-dashed"></div>
              <span className={`${fraunces.className} text-[14px] sm:text-[16px] md:text-[20px]  text-[#F43B00] leading-4`}>9:00 - 22:00</span>
            </div>
            <div className="flex justify-between gap-4 items-end">
              <h5 className={`${staatliches.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] p-0 m-0 leading-6`}>SATRUDAY</h5>
              <div className="grow border-b-2 border-b-[#F43B00] border-dashed"></div>
              <span className={`${fraunces.className} text-[14px] sm:text-[16px] md:text-[20px] text-[#F43B00] leading-4`}>10:00 - 20:00</span>
            </div>
            <div className="flex justify-between gap-4 items-end">
              <h5 className={`${staatliches.className} text-[18px] sm:text-[24px] md:text-[34px] text-[#F43B00] p-0 m-0 leading-6`}>SUNDAY</h5>
              <div className="grow border-b-2 border-b-[#F43B00] border-dashed"></div>
              <span className={`${fraunces.className} text-[14px] sm:text-[16px] md:text-[20px] text-[#F43B00] leading-4`}>closed</span>
            </div>
          </div>

          <div>
            <span className={`${fraunces.className} text-[16px] text-[#F43B00]`}>* CALL US NOW +00 458 713 55</span>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="py-[80px] px-[20px] md:px-[50px] lg:px-[100px] flex flex-wrap md:flex-nowrap gap-8 items-stretch justify-around ">
        <div className="w-[500px] h-full flex justify-center items-center">
          <div className="space-y-6">
            <div className="xl:w-[500px]">
              <Image src={pic2} alt="" style={{
                width: "100%",
              }} />
            </div>
            <div className="space-y-6">
              <h4 className={`${staatliches.className} text-[34px] text-[#F43B00]`}>NEW PIZZA WITH PARSLEY YOU MUST TRY IT OUT!</h4>
              <h5 className={`${fraunces.className} text-[20px] text-[#F43B00] leading-4`}>May 24, 2022</h5>
            </div>
          </div>
        </div>


        <div className="w-[500px] h-full flex justify-center items-center">
          <div className="space-y-6">
            <div className="xl:w-[500px]">
              <Image src={pic3} alt="" style={{
                width: "100%",
              }} />
            </div>

            <div className="space-y-6">
              <h4 className={`${staatliches.className} text-[34px] text-[#F43B00]`}>PAPRIKA PIZZA SPICY AND HOT NEW FLAVOURS JUST FOR YOU.</h4>
              <h5 className={`${fraunces.className} text-[20px] text-[#F43B00] leading-4`}>May 24, 2022</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Reservetion  */}
      <div className="py-[80px] px-[20px] md:px-[50px] lg:px-[100px] bg-[url('https://marcello.qodeinteractive.com/wp-content/uploads/2022/04/home-noise-.png')]">
        <form action="" className="p-0 m-0 space-y-6">
          <h2 className={`${staatliches.className} text-[50px] font-bold uppercase text-[#F43B00]`}>MAKE A RESERVATION</h2>
          <div className="grid grid-cols-1 md:flex gap-4 justify-between items-center m-0">
            <div className="relative grow">
              <select name="person" className="border border-[#F43B00] text-[#F43B00] border-b-4 px-8 py-4 w-full rounded focus:outline-none">
                <option value="person1">Person 1</option>
                <option value="person2">Person 2</option>
                <option value="person3">Person 3</option>
                <option value="person4">Person 4</option>
                <option value="person5">Person 5</option>
                <option value="person6">Person 6</option>
                <option value="person7">Person 7</option>
                <option value="person8">Person 8</option>
                <option value="person9">Person 9</option>
                <option value="person10">Person 10</option>
              </select>
              <IoPersonOutline size={24} className="absolute top-4 right-4 text-[#F43B00]" />
            </div>
            <span className={`${mooli.className} text-[#F43B00] text-center`}>FOR</span>
            <div className="grow">
              <input type="date" name="" id="" className="border border-[#F43B00] border-b-4 px-8 py-3.5 w-full rounded focus:outline-none text-[#F43B00] caret-inherit text-[16px] custom-date-input" />
            </div>
            <span className={`${mooli.className} text-[#F43B00] text-center`}>AT</span>
            <div className="relative grow">
              <select name="time" className="border border-[#F43B00] text-[#F43B00] border-b-4 px-8 py-4 w-full rounded focus:outline-none">
                <option value="10">10:00 AM</option>
                <option value="11">11:00 AM</option>
                <option value="12">12:00 PM</option>
                <option value="1">1:00 PM</option>
                <option value="2">2:00 PM</option>
                <option value="3">3:00 PM</option>
                <option value="4">4:00 PM</option>
                <option value="5">5:00 PM</option>
                <option value="6">6:00 PM</option>
                <option value="7">7:00 PM0</option>
              </select>
              < IoTimeOutline size={24} className="absolute top-4 right-4 text-[#F43B00]" />
            </div>
            <input type="submit" value="Book Now" className="bg-[#F43B00] text-white px-8 py-4 rounded" />
          </div>
        </form>
      </div>

      {/* Prallax */}
      <div className="flex items-center justify-center h-[700px] bg-fixed bg-center bg-cover custom-img bg-img"></div>

      {/* Menu Item */}
      <div className="flex items-stretch flex-col-reverse lg:flex-row">
        <div className="bg-[#F43B00] grow text-white p-5 py-14 md:p-10 lg:p-28 flex flex-col justify-between">
          <div>
            <span className={`${fraunces.className} text-[18px] sm:text-[24px] md:text-[34px]  italic mb-4`}>From Our Menu</span>
            <h2 className={`${staatliches.className} text-[36px] sm:text-[60px] md:text-[80px] font-bold uppercase leading-[30px] sm:leading-[50px] md:leading-[70px]`}>POPULAR PICKS &<br /> NEW TASTES!</h2>
          </div>
          <div>
            <p>VOLUPTATEM EA RERUM NISI. ULLAM DEBITIS OPTIO. QUAE ODIO</p>
          </div>
        </div>
        <div className="md:grow p-5 py-14 md:p-10 lg:p-28">
          <div className="space-y-6 h-[700px] overflow-y-scroll scroll-bar px-4">
            {
              arr!.map(item => <ProductMenuCard key={item} image={pizza} name="DIAVOLO" price="16" ingredient="Peeled tomato, cheese, mushrooms, red onion, cherry tomato, black olives, rocket" />
              )
            }

          </div>
        </div>
      </div>
    </main>
  )
}
