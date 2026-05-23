import Button from './button'
import Logo from './logo'

const Nav = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 gap-4 sm:gap-0'>
      <Button />
      <Logo />
    </div>
  )
}

export default Nav
