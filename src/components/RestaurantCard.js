import { CDN_URL } from "../utlis/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-wrap">{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
