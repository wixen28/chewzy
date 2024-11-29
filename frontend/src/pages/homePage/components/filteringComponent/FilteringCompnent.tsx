import { useState } from "react"
import usePets from "./hooks/usePets"

const FilteringComponent = () => {
  const { pets, filteredPets, searchPetQuery, setSearchPetQuery } = usePets()
  const [selectedAnimal, setSelectedAnimal] = useState<string>("")
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPetQuery(e.target.value)
    if (selectedAnimal) {
      setSelectedAnimal('')
    }
  }

  const handleSelectAnimal = (pet: { id: string; label: string; value: string }) => {
    setSelectedAnimal(pet.label)
    setSearchPetQuery(pet.label)
    setIsDropdownOpen(false)
  }

  const handleClearSelection = () => {
    setSelectedAnimal("")
    setSearchPetQuery("")
    setIsDropdownOpen(true)
  }

  //filtered pets
  const filteredPetsList = searchPetQuery ? filteredPets : pets

  return (
    <div className='flex flex-col mt-10 items-center justify-center'>
      <h3 className='text-center text-[#e5e5e5] md:text-left text-xl md:text-2xl font-bold uppercase'>
        Vyhľadávanie
      </h3>
      <form className='p-8 rounded-lg w-11/12	 md:w-full'>
        {/* Animals */}
        <div className='relative w-full md:w-96'>
          <input
            type='text'
            value={selectedAnimal || searchPetQuery} 
            onChange={handleInputChange} 
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
            placeholder='Vybrať zviera'
            className='outline-none w-full p-2 text-gray-400 bg-zinc-800 border-gray-400 border-[1px] rounded-md'
          />
          {/* Show clear button if there is a selected animal */}
          { selectedAnimal && (
            <button
              type='button'
              onClick={handleClearSelection}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
            >
              &#10005;
            </button>
          )}
          {/* Show all pets when input is focused or filter results based on query */}
          { isDropdownOpen && (
            <ul className='absolute max-h-52 overflow-auto bg-zinc-900 w-full border border-gray-500 mt-1 rounded-md z-10'>
              {filteredPetsList.map((pet) => (
                <li
                  key={pet.id} 
                  onClick={() => handleSelectAnimal(pet)} 
                  className='p-2 text-gray-400 hover:bg-gray-700 cursor-pointer'
                >
                  {pet.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* cities */}
      </form>
    </div>
  )
}

export default FilteringComponent
