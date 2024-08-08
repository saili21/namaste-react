import { CDN_URL } from "../utlis/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4 className="cuisines-text">{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
