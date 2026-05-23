import type { User } from "../../../models/users.model";
import RightCard from "./rightCard";

const RightContent = (props: { users: User[] }) => {
  return (
    <div
      id="right"
      className="h-full flex snap-x snap-mandatory gap-6 sm:gap-10 overflow-x-auto rounded-4xl w-full lg:w-2/3 p-4 sm:p-6"
    >
      {props.users.map((user, indx) => (
        <RightCard key={indx} id={indx} user={user} />
      ))}
    </div>
  );
};

export default RightContent;
