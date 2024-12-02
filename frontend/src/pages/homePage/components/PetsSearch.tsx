import { useState } from "react"
import { IoClose } from "react-icons/io5"

import usePets from "./filteringComponent/hooks/usePets"

const PetsSearch = () => {
  const { pets, filteredPets, searchPetQuery, setSearchPetQuery } = usePets()
  const [selectedAnimal, setSelectedAnimal] = useState<string>("")
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)


  const handleInputAnimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleClearAnimalSelection = () => {
    setSelectedAnimal("")
    setSearchPetQuery("")
    setIsDropdownOpen(true)
  }

  const filteredPetsList = searchPetQuery ? filteredPets : pets


  return (
    <div className='relative w-full md:w-96'>
      <input
        type='text'
        value={selectedAnimal || searchPetQuery} 
        onChange={handleInputAnimalChange} 
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
        placeholder='Vybrať zviera'
        className='outline-none w-full p-2 text-black placeholder-black bg-[#A4C3A2] border-green-900 border-[1px] rounded-md'
      />
      {/* Show clear button if there is a selected animal */}
      { selectedAnimal && (
        <button
          type='button'
          onClick={handleClearAnimalSelection}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 text-black'
        >
          <IoClose  size={20}/>
        </button>
      )}
      {/* Show all pets when input is focused or filter results based on query */}
      { isDropdownOpen && (
        <ul className='absolute max-h-52 overflow-auto bg-zinc-900 w-full border border-gray-500 mt-1 rounded-md z-10'>
          { filteredPetsList.map((pet) => (
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
  )
}

export default PetsSearch