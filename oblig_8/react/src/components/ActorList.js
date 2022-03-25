import { Link } from "react-router-dom"

function ActorList({ actors }) {
    return (
      <>
        {actors.map((actor) => (
          <p
            key={actor.slug}
            className="shadow-md shadow-slate-200 px-6 py-4"
          >
            <h2 className="font-lg font-extrabold mb-2 text-gray-700">
              {actor.name}
            </h2>
            <h2 className=" text-gray-700">
              {actor._id}
            </h2>
            <Link to={actor.slug} className="text-blue-600 underline">
              {actor.slug}
            </Link>
          </p>
        ))}
      </>
    )
  }

  export default ActorList