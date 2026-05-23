import './App.css'
import type { User } from './models/users.model';
import Main from './section1/main'
function App() {

  const users: User[] = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
      tag: 'UnderBanking'
    },
    {
      img: 'https://images.unsplash.com/photo-1759593218431-6f1585bc14de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: `lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.`,
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro: `lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.`,
      tag: 'Satisfied'
    }
  ];

  return (
    <>
      <Main users = {users}/>
    </>
  )
}

export default App
