import React from 'react'
import Image from 'next/image';
import ChildComponents from './ChildComponents';

const CarArrayData =[
    {
      id: 1,
      carName: "Toyota Corolla",
      carPrice: "PKR 75,50,000 Lacs",
      carImage: "image/ToyotaCorolla.jpg",
      carReviews: "626 Reviews",
      carRating: "4.5"
    },
    {
      id:2,
      carName: "Suzuki Alto",
      carPrice: "PKR 30,50,000 Lacs",
      carImage: "image/SuzukiAlto.png",
      carReviews: "202 Reviews",
      carRating: "4.5"
    },
    {
      id:3,
      carName: "Honda City",
      carPrice: "PKR 30,50,000 Lacs",
      carImage: "image/HondaCity.jpg",
      carReviews: "457 Reviews",
      carRating: "4.5"
    },
    {
      id:4,
      carName: "Honda Civic",
      carPrice: "PKR 99,00,000 Lacs",
      carImage: "image/HondaCivic.jpg",
      carReviews: "363 Reviews",
      carRating: "4.5"
    }
  ];

  const CarCards = () => {
    return(
      <section id="card">

        <div className="items-center justify-center px-6 py-0 md:py-0 " >

            <ul className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 md:gap-8">{CarArrayData.map((card,index)=>(

                <div key={index}>
                  
                <ChildComponents 
                Key={card.id}
                Name={card.carName}
                Price={card.carPrice}
                ImgUrl={card.carImage}
                Review={card.carReviews}
                Rating={card. carRating}
                />
                </div>
            ))
                }
            </ul>
        </div>
        </section>
    )
  }
  


export default CarCards

