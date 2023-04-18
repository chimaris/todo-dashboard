import React from 'react'
// import cardImage from '../../assets/card-image.png'
// import cardImage2 from '../../assets/card-image2.png'
// import cardImage3 from '../../assets/card-image3.png'
import cardImage from '../../assets/card-image-l.png'
import cardImage2 from '../../assets/card-image-l2.png'
import cardImage3 from '../../assets/card-image-l3.png'
import Avatars from '../ui/Avatars'
import iconBullet from '../../assets/icons/icon-bullet.svg'
import iconMessage from '../../assets/icons/icon-message.svg'
import iconShare from '../../assets/icons/icon-share.svg'
import IconthreeDots from '../../assets/icons/icon-three-dots.svg'
import ProgressBar from '../ui/ProgressBar'
import AddTaskButton from './AddTaskButton'


const Main = () => {
  return (
    <div className='flex justify-between px-16 mt-16 gap-8'>
      {/* First card */}
      <div className='flex flex-col'>
            <div className='w-[266px] bg-[#F4F6F8] py-2 px-4 flex justify-between items-center'>
              <span className='font-medium text-[#858A93]'>To Do</span>
              <span className='py-2 px-3 bg-black rounded text-white'>3</span>
            </div>
            <div className='flex flex-col gap-2 mt-6 p-4 bg-white rounded-xl'>
              <img src={cardImage} alt="card image" />
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-base'>Highfidelity Design</h3>
                  <p className='text-sm text-[#B8B9BD]'>Make clear design and color</p>
                </div>
                <img src={IconthreeDots} alt="Three Dots icon"/>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                  <img src={iconBullet} alt="iconBullet" />
                  <span className='text-sm text-[#B8B9BD]'>Progress </span>
                </div>
                <span className='text-sm font-medium'>2/10</span>
              </div>
              <ProgressBar completed={0} bgColor={'#EBEBEB'} />
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="iconMessage" />7</span>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="iconShare" />2</span>
                </div>
                <Avatars w={6}/>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-6 p-4 bg-white rounded-xl '>
            <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-base'>Usability testing</h3>
                  <p className='text-sm text-[#B8B9BD]'>Make clear design and color</p>
                </div>
                <img src={IconthreeDots} alt="Three Dots icon"/>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                  <img src={iconBullet} alt="iconBullet" />
                  <span className='text-sm text-[#B8B9BD]'>Progress </span>
                </div>
                <span className='text-sm font-medium'>2/10</span>
              </div>
              <ProgressBar completed={0} bgColor={'#EBEBEB'} />
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="iconMessage" />7</span>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="iconShare" />2</span>
                </div>
                <Avatars w={6}/>
              </div>
            </div>
            <AddTaskButton/>
      </div>
      {/* Second Card */}
      <div className='flex flex-col'>
          <div className='w-[266px] bg-[#F4F6F8] py-2 px-4 flex justify-between items-center'>
              <span className='font-medium text-[#858A93]'>Inprogress</span>
              <span className='py-2 px-3 bg-black rounded text-white'>1</span>
          </div>
          <div className='flex flex-col gap-2 mt-6 p-4 bg-white rounded-xl '>
              <img src={cardImage2} alt="card image"/>
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-base'>Highfidelity Design</h3>
                  <p className='text-sm text-[#B8B9BD]'>Make clear design and color</p>
                </div>
                <img src={IconthreeDots} alt="Three Dots icon"/>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                  <img src={iconBullet} alt="iconBullet" />
                  <span className='text-sm text-[#B8B9BD]'>Progress </span>
                </div>
                <span className='text-sm font-medium'>2/10</span>
              </div>
              <ProgressBar completed={60} bgColor={'#FF5F37'} />
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="iconMessage" />7</span>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="iconShare" />2</span>
                </div>
                <Avatars w={6}/>
              </div>
          </div>
          <AddTaskButton/>
      </div>
      {/* Third Card */}
      <div className='flex flex-col'>
            <div className='w-[266px] bg-[#F4F6F8] py-2 px-4 flex justify-between items-center'>
              <span className='font-medium text-[#858A93]'>Completed</span>
              <span className='py-2 px-3 bg-black rounded text-white'>2</span>
            </div>
            <div className='flex flex-col gap-2 mt-6 p-4 bg-white rounded-xl '>
              <div className='flex justify-between'>
                  <div>
                    <h3 className='font-semibold text-base'>Usability testing</h3>
                    <p className='text-sm text-[#B8B9BD]'>Make clear design and color</p>
                  </div>
                  <img src={IconthreeDots} alt="Three Dots icon"/>
                </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                  <img src={iconBullet} alt="iconBullet" />
                  <span className='text-sm text-[#B8B9BD]'>Progress </span>
                </div>
                <span className='text-sm font-medium'>2/10</span>
              </div>
              <ProgressBar completed={100} bgColor={'#8BC488'} />
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="iconMessage" />7</span>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="iconShare" />2</span>
                </div>
                <Avatars w={6}/>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-6 p-4 bg-white rounded-xl '>
              <img src={cardImage3} alt="card image" />
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-base'>Highfidelity Design</h3>
                  <p className='text-sm text-[#B8B9BD]'>Make clear design and color</p>
                </div>
                <img src={IconthreeDots} alt="Three Dots icon"/>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                  <img src={iconBullet} alt="iconBullet" />
                  <span className='text-sm text-[#B8B9BD]'>Progress </span>
                </div>
                <span className='text-sm font-medium'>2/10</span>
              </div>
              <ProgressBar completed={100} bgColor={'#8BC488'} />
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="iconMessage" />7</span>
                  <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="iconShare" />2</span>
                </div>
                <Avatars w={6}/>
              </div>
            </div>
            <AddTaskButton/>
      </div>
    </div>
  )
}

export default Main