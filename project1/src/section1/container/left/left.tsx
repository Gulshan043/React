import Arrow from './arrow'
import Content from './content'

const Left = () => {
  return (
    <div className='flex flex-col justify-between w-1/3'>
      <Content/>
      <Arrow/>
    </div>
  )
}

export default Left
