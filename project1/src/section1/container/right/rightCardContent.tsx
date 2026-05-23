import type { User } from "../../../models/users.model"

const RightCardContent = (props: { id: number; user: User }) => {
  return (
    <>
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-black/10 via-black/10 to-black/40">
        <h2 className="rounded-full h-10 w-10 flex justify-center items-center text-base sm:text-lg font-semibold bg-white">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-white mb-6 sm:mb-14">
            {props.user.intro}
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <button className="text-white bg-blue-600 font-medium px-4 py-2 rounded-full text-sm sm:text-base">
              {props.user.tag}
            </button>
            <button className="text-white bg-blue-600 font-medium px-4 py-2 rounded-full text-sm sm:text-base self-start sm:self-auto">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightCardContent
