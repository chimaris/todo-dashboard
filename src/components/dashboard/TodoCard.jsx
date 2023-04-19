import Avatars from '../ui/Avatars'
import iconBullet from '../../assets/icons/icon-bullet.svg'
import iconMessage from '../../assets/icons/icon-message.svg'
import iconShare from '../../assets/icons/icon-share.svg'
import IconthreeDots from '../../assets/icons/icon-three-dots.svg'
import ProgressBar from '../ui/ProgressBar'


const TodoCard = ({title, subTitle, img, progress, message, totalShare, bgColor}) => {
    
    return (
        <div className='flex flex-col gap-2 mt-4 p-4 bg-white rounded-xl'>
            {img ? (<img src={img} alt="card image" />) : null}
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-semibold text-base'>{title}</h3>
                    <p className='text-sm text-[#B8B9BD]'>{subTitle}</p>
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
            <ProgressBar completed={progress} bgColor={bgColor} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="iconMessage" />{message}</span>
                    <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="iconShare" />{totalShare}</span>
                </div>
                <Avatars w={6}/>
            </div>
        </div>
    )
}

export default TodoCard