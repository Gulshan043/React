import type { User } from '../../models/users.model';
import Left from './left/left';
import RightContent from './right/rightContent';

const Container = (props: { users: User[] }) => {
  return (
    <div className='h-[calc(100vh-4rem)] flex gap-10 p-10'>
      <Left/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Container
