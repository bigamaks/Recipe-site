const Nutrition = () => {
    return (
        <div className="my-4">
            <h2 className="font-normal font-customFont text-2xl mb-4 text-[#854632]">Nutrition</h2>
            <p className="text-base font-paragraphFont text-gray-600">The table below shows nutritional values per serving without the additional fillings.</p>
            <div className="p-4 w-full font-paragraphFont">
                <div className="flex py-2 px-5 w-3/4 justify-between">
                    <p>Calories</p>
                    <p className="font-bold text-[#854632]">277kcal</p>
                </div>
                <hr />
                <div className="flex py-3 px-5 w-3/4 justify-between">
                    <p>Carbs</p>
                    <p className="font-bold text-[#854632]">0g</p>
                </div>
                <hr />
                <div className="flex py-3 px-5 w-3/4 justify-between">
                    <p>Protein</p>
                    <p className="font-bold text-[#854632]">20g</p>
                </div>
                <hr />
                <div className="flex py-3 px-5 w-3/4 justify-between">
                    <p>Fat</p>
                    <p className="font-bold text-[#854632]">22g</p>
                </div>
            </div>
        </div>
    )
}

export default Nutrition