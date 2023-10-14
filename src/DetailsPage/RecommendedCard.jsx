import ReactImageFallback from "react-image-fallback";
import fallback from "../assets/fallback.png";

const RecomandedUserCard = ({ user }) => {
  const {
    name,
    image,
    intro,
    price,
    rating,
    reviewCount,
    testimonial,
    deliveryTime,
    about,
  } = user;
  return (
    <div className="shadow-md shadow-slate-500 pb-8 rounded-xl">
      <div>
        {/* <img src={image} alt={`${name} Image broken`}className="h-full w-full" /> */}
        <ReactImageFallback
          src={image}
          fallbackImage={fallback}
          alt="no image"
          className="h-auto w-full"
        />
      </div>
      <div className="px-6">
        <p className="lg:text-2xl font-bold mt-4">{name}</p>
        <p className="mt-2 font-serif">{intro}</p>
        <div className="flex gap-2 mt-6 font-bold">
          <p className="text-sky-700 ">{rating}</p>
          <p>({reviewCount})</p>
        </div>
        <div>
          <button className="border-2 w-full mt-5 border-sky-600 text-white bg-sky-600 px-4 py-1 rounded-md font-semibold ">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomandedUserCard;
