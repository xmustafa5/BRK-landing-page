import React from 'react'
import SingleProduct from './SingleProduct'
import pru1 from "../assets/img/Product/pru1.png";
import pru2 from "../assets/img/Product/pru2.png";
import pru3 from "../assets/img/Product/pru3.png";
import pru4 from "../assets/img/Product/pru4.png";
export default function Products() {
  return (
    <div className='GradientColorProducts h-screen flex gap-4 justify-center items-center flex-col '>
        <div className="bg-gray-200 flex  ">
          <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
            |
          </p>
          <p className="text-md regular text-black-120 font-medium p-1">
          Products
          </p>
        </div>
        <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
          About Us
        </h1>
        <div className='flex gap-4'>
            <SingleProduct img={pru1} title={'UPVC Products'} script={"Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."} />
            <SingleProduct img={pru2} title={'PRO Products'} script={"Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."} />
            <SingleProduct img={pru3} title={'PPR Products'} script={"Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."} />
            <SingleProduct img={pru4} title={'Accessories'} script={"Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."} />
        </div>
    </div>
  )
}
