import cardImage from '../../assets/card-image-l.png'
import cardImage2 from '../../assets/card-image-l2.png'
import cardImage3 from '../../assets/card-image-l3.png'
import AddTaskButton from './AddTaskButton'
import TodoCard from './TodoCard'

const Todos = [
  {title: 'Highfidelity Design', subTitle: 'Make clear design and color', img: cardImage, progress: 0, message: 7, totalShare: 2 },
  {title: 'Usability testing', subTitle: 'Make clear design and color', img: null, progress: 0, message: 7, totalShare: 2 },
  {title: 'Highfidelity Design', subTitle: 'Make clear design and color', img: cardImage2, progress: 60, message: 7, totalShare: 2 },
  {title: 'Usability testing', subTitle: 'Make clear design and color', img: null, progress: 100, message: 7, totalShare: 2 },
  {title: 'Highfidelity Design', subTitle: 'Make clear design and color', img: cardImage3, progress: 100, message: 7, totalShare: 2 }
]


const Main = () => {
  return (
    <div className='flex justify-between px-16 mt-16 gap-8'>
      {/* Yet To Do Section */}
      <div className='flex flex-col'>
            <div className='w-[266px] bg-[#F4F6F8] py-2 px-4 flex justify-between items-center'>
              <span className='font-medium text-[#858A93]'>To Do</span>
              <span className='py-2 px-3 bg-black rounded text-white'>3</span>
            </div>
            {/* filter Todo that are in 0% progress */}
            <div className='mt-6'>
              {Todos.map((todo, index) => { return todo.progress === 0 ? (
                  <TodoCard title={todo.title} subTitle={todo.subTitle} img={todo.img} progress={todo.progress} message={todo.message} totalShare={todo.totalShare} bgColor={'#EBEBEB'} key={index} />
              ) : null })}
            </div>
            <AddTaskButton/>
      </div>
      {/* On Progress Section */}
      <div className='flex flex-col'>
          <div className='w-[266px] bg-[#F4F6F8] py-2 px-4 flex justify-between items-center'>
              <span className='font-medium text-[#858A93]'>Inprogress</span>
              <span className='py-2 px-3 bg-black rounded text-white'>1</span>
          </div>
          {/* filter Todo that are more than 0% progress and less than 100% */}
          <div className='mt-6'>
            {Todos.map((todo, index) => { return todo.progress > 0 && todo.progress <= 99 ? (
                <TodoCard title={todo.title} subTitle={todo.subTitle} img={todo.img} progress={todo.progress} message={todo.message} totalShare={todo.totalShare} bgColor={'#FF5F37'} key={index} />
            ) : null })}
          </div>
          <AddTaskButton/>
      </div>
      {/* Completed Section */}
      <div className='flex flex-col'>
            <div className='w-[266px] bg-[#F4F6F8] py-2 px-4 flex justify-between items-center'>
              <span className='font-medium text-[#858A93]'>Completed</span>
              <span className='py-2 px-3 bg-black rounded text-white'>2</span>
            </div>
           {/* filter Todo that are in 100% progress / completed */}
           <div className='mt-6'>
            {Todos.map((todo, index) => { return todo.progress === 100 ? (
                <TodoCard title={todo.title} subTitle={todo.subTitle} img={todo.img} progress={todo.progress} message={todo.message} totalShare={todo.totalShare} bgColor={'#8BC488'} key={index} />
            ) : null })}
          </div>
          <AddTaskButton/>
      </div>
    </div>
  )
}

export default Main