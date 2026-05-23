import type { User } from "../../../models/users.model"

const RightCardContent = (props: { id: number; user: User }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
        <h2 className="rounded-full h-10 w-10 flex justify-center items-center text-lg font-semibold bg-white">{props.id + 1}</h2>
        <div>
            <p className="text-lg leading-relaxed text-white mb-14">{props.user.intro}</p>
            <div className=" flex justify-between">
                <button className="text-white bg-blue-600 font-medium px-4 py-2 rounded-full">{props.user.tag}</button>
                <button className="text-white bg-blue-600 font-medium px-4 py-2 rounded-full ml-2"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default RightCardContent
