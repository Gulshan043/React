import Nav from "./nav/nav";
import Container from "./container/container";
  import type { User } from "../models/users.model";
const Main = (props: { users: User[] }) => {
  return (
    <>
      <Nav />
      <Container users={props.users} />
    </>
  );
};

export default Main;
