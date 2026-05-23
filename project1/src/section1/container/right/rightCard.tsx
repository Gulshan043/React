import type { User } from "../../../models/users.model";
import RightCardContent from "./rightCardContent";

const RightCard = (props: { id: number; user: User }) => {
  return (
    <div className="shrink-0 overflow-hidden relative w-[86vw] max-w-sm sm:w-60 rounded-4xl aspect-[10/14]">
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
