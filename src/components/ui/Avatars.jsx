import image from '../../assets/image.png'

const images = [
    {id : 1, img : {image}},
    {id : 2, img : {image}},
    {id : 3, img : {image}},
]
const Avatars = ({w}) => {

    return (
      <div className="flex items-center justify-center">
        <img
            src={image}
            alt="avatar-name"
            className={`object-contain rounded-full w-${w} border-2 border-[#fff]`}
          />
          <img
            src={image}
            alt="avatar-name"
            className={`object-contain rounded-full w-${w} ml-[-10px] border-2 border-[#fff]`}
          />
          <img
            src={image}
            alt="avatar-name"
            className={`object-contain rounded-full w-${w} ml-[-10px] border-2 border-[#fff]`}
          />
        {/* {images.map(({ id, image }) => (
          <img
            src={image}
            alt="avatar-name"
            key={id}
            className="object-contain mb-3 rounded-full w-10 h-10 ml-[-10px] border-2 border-[#fff]"
          />
        ))} */}
      </div>
    );
  };
  
  export default Avatars;