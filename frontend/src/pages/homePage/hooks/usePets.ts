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

  // Filter pets based on search query
  useEffect(() => {
    if (searchPetQuery.trim() === "") {
      setFilteredPets(pets)
    } else {
      const lowercasedQuery = searchPetQuery.toLowerCase()
      const filtered = pets.filter((pet) =>
        pet.label.toLowerCase().includes(lowercasedQuery)
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
