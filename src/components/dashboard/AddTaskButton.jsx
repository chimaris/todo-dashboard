import iconBlackPlus from '../../assets/icons/icon-plus-black.svg'

const AddTaskButton = () => {
  return (
    <button className='flex justify-center items-center gap-4 bg-[#F2F4F5] py-3 px-6 rounded-xl mt-4 border border-dashed border-[#D5D5D5]'>
        <img src={iconBlackPlus} alt="plus" />
        <span className='text-base text-[#7D8088] font-medium'>Add Task</span>
    </button>
  )
}

export default AddTaskButton