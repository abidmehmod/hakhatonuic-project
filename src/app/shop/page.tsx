import Image from "next/image"


export default function Shop(){
    return(<div className="flex flex-col items-center p-4">
        <div className="w-[1320px] h-[1923px] top-[530px] left-[300px] flex flex-wrap justify-center gap-4 mb-6">
          <div className="w-[312px] h-[330px] flex gap-4 ">
            <Image className="" src={'/Mask Group (1).png'} alt="" width={312} height={267}></Image>
            <Image className="" src={'/Mask Group (2).png'} alt="" width={312} height={267}></Image>
            <Image className="" src={'/Mask Group (3).png'} alt="" width={312} height={267}></Image>
            <Image className="" src={'/Mask Group (4).png'} alt="" width={312} height={267}></Image>
          </div>
          <div className="w-[312px] h-[330px] flex gap-4 rounded" >
           <Image className="" src={'/food1.png'} alt="" width={312} height={267}></Image>
           <Image className="" src={'/food2.png'} alt="" width={312} height={267}></Image>
           <Image className="" src={'/food3.png'} alt="" width={312} height={267}></Image>
           <Image className="" src={'/pizza.png'} alt="" width={312} height={267}></Image>
           
           </div>
          <div className=""    ></div>
         
        </div>
        </div>
    )
}
        