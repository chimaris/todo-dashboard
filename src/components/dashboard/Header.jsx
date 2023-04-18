import { NavLink } from 'react-router-dom';
import Avatars from '../ui/Avatars'
import iconParticipants from '../../assets/icons/icon-participants.svg'
import iconBoard from '../../assets/icons/icon-board.svg'
import iconList from '../../assets/icons/icon-list.svg'
import iconPower from '../../assets/icons/icon-power.svg'
import iconBlackPlus from '../../assets/icons/icon-plus-black.svg'



const NavList = [
    {name: 'Participants View', link: '', icon: iconParticipants},
    {name: 'Board View', link: '', icon: iconBoard},
    {name: 'List View', link: '', icon: iconList},
    {name: 'Power View', link: '', icon: iconPower},
  ]

const Header = () => {
  return (
    <div className='bg-white px-16 pt-10 pb-6'>
        <div className='flex justify-between items-center'>
            <div className='w-[700px]'>
                <h1 className='font-semibold text-[38px]'>New Campaign Run</h1>
                <p className='text-[#B8B9BD]'>A new campaign launch work for brand new feature in May month</p>
            </div>
            <button className='p-3 bg-black rounded-lg text-white text-sm font-medium'>ADD MEMBERS</button>
        </div>
         {/* Nav Menu */}
        <div className='flex justify-between items-center mt-14'>
            <div className='flex items-center gap-2'>
                <Avatars w={10}/>
                <span className='text-[#B8B9BD]'>8 members</span>
            </div>
            <div className='flex gap-2 items-center justify-between'>
                {NavList.map(category => (
                    <NavLink key={category.name} to={category.link}>
                            <button className='flex items-center gap-2 font-medium text-sm cursor-pointer px-2 py-2'>
                                <img src={category.icon} alt="" />
                                <span className='text-[#7D8088] font-medium'>{category.name}</span>
                            </button>
                    </NavLink>
                ))}
            <button className='cursor-pointer py-2 w-auto'>
                <img src={iconBlackPlus} alt="" />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Header