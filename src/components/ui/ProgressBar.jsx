const ProgressBar = (props) => {
    const { bgColor, completed } = props;
        
    const fillerStyles = {
      backgroundColor: bgColor,
      borderRadius: 'inherit',
      width: `${completed}%`
    }
  
    return (
      <div className={`h-2 w-full bg-[#EBEBEB] rounded-3xl`}>
        <div style={fillerStyles} className='h-full'>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;