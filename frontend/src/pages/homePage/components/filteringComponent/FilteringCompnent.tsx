import { useState } from "react";

type FilterOption = {
  label: string;
  value: string;
};

const FilteringComponent = () => {
  const animalOptions: FilterOption[] = [
    { label: "Pes", value: "pes" },
    { label: "Mačka", value: "macka" },
    { label: "Zajac", value: "zajac" },
    { label: "Škrečok", value: "skrecok" },
    { label: "Činčila", value: "cincila" },
  ]

  const cityOptions: FilterOption[] = [
    { label: "Bratislava", value: "bratislava" },
    { label: "Banska Bystrica", value: "bratislava" },
    { label: "Košice", value: "kosice" },
    { label: "Prešov", value: "presov" },
  ]

  const reviewOptions: FilterOption[] = [
    { label: "5 Hviezdičiek", value: "5" },
    { label: "4 Hviezdičky", value: "4" },
    { label: "3 Hviezdičky", value: "3" },
    { label: "2 Hviezdičky", value: "3" },
    { label: "1 Hviezdička", value: "3" },
  ]

  const [selectedAnimal, setSelectedAnimal] = useState<string>("")
  const [selectedCity, setSelectedCity] = useState<string>("")
  const [selectedReview, setSelectedReview] = useState<string>("")

  return (
    <div className='flex flex-col mt-10 items-center justify-center'>
      <h3 className='text-center text-[#e5e5e5] md:text-left text-xl md:text-2xl font-bold uppercase'>
        Vyhľadávanie
      </h3>
      <form className='flex flex-col p-8 rounded-lg shadow-md w-full h-auto'>
        <div className='flex justify-center gap-10 '>
          <div>
          <select
            id="animal"
              value={selectedAnimal}
              onChange={(e) => setSelectedAnimal(e.target.value)}
              className='abosolute w-96 pr-10 placeholder:text-sm outline-none border-[1px] border-gray-500 focus:border-green-200 p-2 bg-zinc-900 rounded-md text-gray-400'
            >
              <option value="" disabled >
                Vyberte zviera
              </option>
              { animalOptions.map((option) => (
                <option key={option.value} value={option.value} >
                  {option.label}
                </option>
              ))}
            </select>
        </div>
        <div>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className='w-96 placeholder:text-sm outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md text-gray-400'
          >
            <option value="" disabled className=''>
              Zvoľte lokalitu
            </option>
            { cityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id="review"
            value={selectedReview}
            onChange={(e) => setSelectedReview(e.target.value)}
            className='w-96 placeholder:text-sm outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md text-gray-400'
          >
            <option value="" disabled>
              Preferované Hodnotenie
            </option>
            { reviewOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button 
        className='m-auto w-1/4 p-2 mt-10 bg-black rounded-md text-green-300 hover:bg-zinc-900'
        onClick={ () => alert("todo")} 
      >
        Vyhľadať
      </button>
      </form>
    </div>
  )
}

export default FilteringComponent
