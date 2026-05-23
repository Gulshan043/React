import Arrow from './arrow'
import Content from './content'

const Left = () => {
  return (
    <div className='flex flex-col justify-between w-full lg:w-1/3 min-h-[28rem] lg:min-h-0'>
      <Content />
      <Arrow />
    </div>
  )
}

export default Left
