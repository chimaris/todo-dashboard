import { NavLink } from 'react-router-dom';
import iconDashboard from '../../assets/icons/icon-dashboard.svg'
import iconSetting from '../../assets/icons/icon-setting.svg'
import iconActivity from '../../assets/icons/icon-activity.svg'
import iconUser from '../../assets/icons/icon-user.svg'
import iconAddUser from '../../assets/icons/icon-addUser.svg'
import iconAffiliate from '../../assets/icons/icon-affiliate.svg'
import iconProfile from '../../assets/icons/icon-profile.svg'
import iconLogout from '../../assets/icons/icon-logout.svg'
import iconPlus from '../../assets/icons/icon-plus.svg'

const sidebarNavList = [
  {name: 'Dashboard', link: '', icon: iconDashboard},
  {name: 'Settings', link: '', icon: iconSetting},
  {name: 'Activities', link: '', icon: iconActivity},
  {name: 'Users', link: '', icon: iconUser},
  {name: 'Added User', link: '', icon: iconAddUser},
  {name: 'Affiliate', link: '', icon: iconAffiliate}
]

const sidebarNavList2 = [
  {name: 'Profile', link: '', icon: iconProfile},
  {name: 'Logout', link: '', icon: iconLogout},
]

const Sidebar = () => {
  return (
    <div className='flex flex-col h-[1024px] w-[272px] bg-[#1D1042] text-white px-8 py-10 rounded-l-xl'>
      <div className='flex justify-around items-center gap-1 bg-[#45269C] w-[208px] h-[46px] py-3 px-7 rounded-lg'>
        <img src={iconProfile} alt="logo" />
        <h1 className='text-base'>Welcome Keerthi</h1>
      </div>
      <div className='border-b border-[#FFFFFF] mt-10'>
         {sidebarNavList.map(category => (
                <NavLink key={category.name} to={category.link}>
                    <button className='flex items-center justify-start gap-2 font-medium text-sm cursor-pointer px-2 pb-8'>
                        <img src={category.icon} alt="" />
                        <span>{category.name}</span>
                    </button>
                </NavLink>
            ))}
      </div>
      <div className='mt-10'>
         {sidebarNavList2.map(category => (
            <NavLink key={category.name} to={category.link}>
                    <button className='flex items-center justify-start gap-2 font-medium text-sm cursor-pointer px-2 pb-8'>
                        <img src={category.icon} alt="" />
                        <span>{category.name}</span>
                    </button>
                </NavLink>
           ))}
      </div>

      <button className='flex justify-around items-center gap-1 bg-[#703EFE] w-[208px] h-[46px] py-3 px-7 rounded-lg mt-[350px]'>
        <img src={iconPlus} alt="plus" />
        <span className='text-base'>NEW PROJECT</span>
      </button>
    </div>
  )
}

export default Sidebar