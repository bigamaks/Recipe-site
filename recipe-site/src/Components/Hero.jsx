import omelette from "../assets/images/omelette.jpeg"


const Hero = () => {
    return (
       <div>
         <img 
        src={omelette} 
        className="w-full rounded-md"
        alt=""
         />
          <div className="">
          <h1 className="text-3xl font-customFont font-normal mb-3 mt-4">Simple Omelette Recipe</h1>
          <p className="text-base mb-2 font-paragraphFont">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </div>
       </div>
    )
}

export default Hero