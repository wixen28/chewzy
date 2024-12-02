import PetsSearch from "../PetsSearch"

const FilteringComponent = () => {


  return (
    <div className='flex flex-col mt-10 items-center justify-center'>
      <h3 className='text-center text-[#e5e5e5] md:text-left text-xl md:text-2xl font-bold uppercase'>
        Vyhľadávanie
      </h3>
      <form className='p-8 rounded-lg w-11/12	md:w-full flex flex-col'>
        {/* Animals */}
        <PetsSearch />
        {/* cities */}
        <button 
          type="submit" 
          className='p-2 w-10/12	 md:w-1/6 mt-10 m-auto bg-black rounded-md text-green-300 hover:bg-zinc-900'
          onClick={() => alert("TODO")}
        >
          Vyhľadať
        </button>
      </form>
    </div>
  )
}

export default FilteringComponent
