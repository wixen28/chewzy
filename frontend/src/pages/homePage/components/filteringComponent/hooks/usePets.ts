import { useState, useEffect } from "react"

type Pet = {
  id: string;
  label: string;
  value: string;
}

const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([])
  const [filteredPets, setFilteredPets] = useState<Pet[]>([])
  const [searchPetQuery, setSearchPetQuery] = useState("")

  useEffect(() => {
    fetch("mocks/GET_pets.json")
      .then((response) => response.json())
      .then((data) => {
        setPets(data)
        setFilteredPets(data)
      })
      .catch((error) => console.error("Error fetching pets data:", error))
  }, [])

  //remove diacritics
  const removeDiacritics = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, '')

  // Filter pets based on search query
  useEffect(() => {
    if (searchPetQuery.trim() === "") {
      setFilteredPets(pets)
    } else {
      const lowercasedQuery = removeDiacritics(searchPetQuery.toLowerCase())
      const filtered = pets.filter((pet) =>
        removeDiacritics(pet.label.toLowerCase()).includes(lowercasedQuery)
      )
      setFilteredPets(filtered)
    }
  }, [searchPetQuery, pets])


  return {
    pets,
    filteredPets,
    searchPetQuery,
    setSearchPetQuery
  }
}

export default usePets
