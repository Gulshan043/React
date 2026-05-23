import type { User } from "../../../models/users.model";
import RightCardContent from "./rightCardContent";

const RightCard = (props: { id: number; user: User }) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-60 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.user.img}
        alt=""
      />
      <RightCardContent id={props.id} user={props.user} />
    </div>
  );
};

export default RightCard;
