import type { User } from '../../models/users.model';
import Left from './left/left';
import RightContent from './right/rightContent';

const Container = (props: { users: User[] }) => {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10'>
      <Left />
      <RightContent users={props.users} />
    </div>
  )
}

export default Container
