import Header from "../../app/layout/header/Header"
import PetLove from '../../utils/images/pet-love.jpg'
import FilteringComponent from "./components/filteringComponent/FilteringCompnent"

const HomePage = () => {
  return (
    <div className=''>
      <Header />
      <img 
        src={PetLove} 
        alt="pet-love" 
        className='w-full h-[10rem] md:h-[18rem] object-cover opacity-60 border-t-[5px]  border-transparent mask-faded'
      />
      <FilteringComponent />
    </div>
  )
}

export default HomePage