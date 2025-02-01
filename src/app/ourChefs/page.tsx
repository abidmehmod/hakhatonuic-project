// "use client"
// import { useEffect, useState } from "react"
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import chef from "./page1";
// import { truncate } from "fs";

// const sanity = sanityClient({
//     projectId : "x6fmax34",
//     dataset : "production",
//     apiVersion : "2021-08-31",
//     useCdn : true,
// });

// interface Chef {
//     _id: string;
//     name: string;
//     position: string;
//     specialty: string;
//     description: string;
//     experience: number;
//     available: boolean;
//     imageUrl: string;
// }


// const chefCard: React.FC = () => {
//     const [chefs,setchef] = useState<Chef[]>([]);
//     const  [card,setCard] = useState<Chef[]>([]);

//     const fetchChef = async  () => {
//       try {
//         const  query = `
//         *[_type == "chef"]{
//          _id,
//       name,
//       position,
//       specialty,
//       description,
//       experience,
//       available,
//       "imageUrl": image.asset->url,
//       _createdAt,
//       _updatedAt
//         }
//         `;


//         const data = await sanity.fetch(query);
//         setchef(data);

//       }catch (error){
//         console.error("error fetching",error)
//       }
//     };

//    const addtocart = (chef : Chef)=>{
//     setCard((pravCard)=>[...pravCard,chef]);
//     alert(`${chef.name} has added cart`)
//    };

//    useEffect(()=>{
//     fetchChef();
//    },[]);
//     function truncateDiscribtion(description: string): import("react").ReactNode | Iterable<import("react").ReactNode> {
//         throw new Error("Function not implemented.");
//     }

//    return(
//       <div className="p-4">
//         <h2 className="text-center text-slate-700 mt-5">chef from Api data</h2>

//         <div className="grid grid-cols-1 sm:cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {chefs.map((chef)=>(
//              <div key={chef._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transistion-shadow duration-300 ">
//                 <Image src={chef.imageUrl} alt={chef.name} width={300} height={300} 
//                 className="w-full h-28 object-cover rounded-md"/>
//                 <div className="mt-4">
//                     <h2 className="text-lg font-samibold">{chef.name}</h2>
//                     <p text-slate-800 mt-2 text-sm>{truncateDiscribtion(chef.description)}</p>
//                     <div className="flex-justify-between items-center mt-4">
//                         <div>
//                             <p className="text-slate-600 font-bold">{chef.available}</p>
//                             {chef.experience}
//                         </div>

//                     </div>
//                 </div>
//              </div>
//             ))}
//         </div>

//       </div>
//    )


// }
