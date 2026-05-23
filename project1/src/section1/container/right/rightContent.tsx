import type { User } from "../../../models/users.model";
import RightCard from "./rightCard";

const RightContent = (props: { users: User[] }) => {
  return (
    <div
      id="right"
      className="flex flex-nowrap gap-10 h-full overflow-x-auto rounded-4xl w-2/3 p-6"
    >
      {props.users.map((user, indx) => (
        <RightCard key={indx} id={indx} user={user} />
      ))}
    </div>
  );
};

export default RightContent;
