import Image from "next/image"
// import Link from "next/link"

const Cards  = () => {
    return (

     
  <div className= " backgroundimage{./bg.png}   flex  rounded  shadow   px-8  py-6 mb-3 mt-5 w-30 h-48">
{/* card 1 */}
  <div className=" w-[550px]  h-[550px] justify-center  text-center  bg-pink-400 rounded overflow-hidden shadow-lg ml-12  px-8">
    <Image src="/images/pic1.png"   layout="intrinsic"  objectFit="contain" width={200} height={20}
     alt="image"  className="mb-6" />
     <p className="justify-center text-2xl text-center font-bold  mb-3">Rs 5000</p>
<div className="justify-center  text-center">
  <p> perfume  a silent emotion that reflects personality. Its fragrance is not just felt but lingers in memories. 
A good perfume completes the picture—one that wins hearts without uttering a word.</p>
</div>
<div className="justify-center  items-center flex">
<button className="bg-blue-500 text-white grid   font-bold py-2 px-9 rounded
  mt-4 ">
  Buy Now
</button>
</div>
</div>
     


{/* card 2 */}
<div className=" w-[550px]  h-[550px]  rounded overflow-hidden  bg-pink-400 shadow-lg  ml-12  px-8">
<Image src="/images/pic1.png"   layout="intrinsic"  objectFit="contain" width={200} height={20}
 alt="image" className="mb-6"  />
 <p className="justify-center text-2xl text-center font-bold  mb-3">Rs 5000</p>
 <div className="justify-center  text-center">
<p> perfume  a silent emotion that reflects personality. Its fragrance is not just felt but lingers in memories. 
A good perfume completes the picture—one that wins hearts without uttering a word.</p>
</div>
<div className="justify-center  place-items-center flex">
<button className="bg-blue-500 text-white grid   font-bold py-2 px-9 rounded
  mt-4 ">
  Buy Now
</button>
</div>
</div>

{/* card 3  */}

 
 <div className=" w-[550px]  h-[550px]  rounded overflow-hidden shadow-lg bg-pink-400 ml-12  px-8">
    <Image src="/images/pic1.png"    layout="intrinsic"  objectFit="contain" width={200} height={20}
alt="image" className="mb-6"   />

<p className="justify-center text-2xl text-center font-bold  mb-3">Rs 5000</p>
<div className="justify-center  text-center">
<p> perfume  a silent emotion that reflects personality. Its fragrance is not just felt but lingers in memories. 
A good perfume completes the picture—one that wins hearts without uttering a word.</p>
</div>
<div className="justify-center  place-items-center flex">
<button className="bg-blue-500 text-white grid   font-bold py-2 px-9 rounded
  mt-4 ">
  Buy Now
</button>
</div>

</div>
{/* card 4 */}
<div className=" w-[550px]  h-[550px]  rounded overflow-hidden  bg-pink-400 shadow-lg  ml-12  px-8">
<Image src="/images/pic1.png"   layout="intrinsic"  objectFit="contain" width={200} height={20}
 alt="image" className="mb-6"  />
 <p className="justify-center text-2xl text-center font-bold  mb-3">Rs 5000</p>
 <div className="justify-center  text-center">
<p> perfume  a silent emotion that reflects personality. Its fragrance is not just felt but lingers in memories. 
A good perfume completes the picture—one that wins hearts without uttering a word.</p>
</div>
<div className="justify-center  place-items-center flex">
<button className="bg-blue-500 text-white grid   font-bold py-2 px-9 rounded 
  mt-4 ">
  Buy Now
</button>
</div>
</div>
</div>


)}
export default Cards
