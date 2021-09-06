import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";// Estrelas de rating
import { Restaurant , RestaurantInfo, Title, Address, RestaurantPhoto, Phone} from "./styles"
import restaurante from '../../assets/restaurante-fake.jpg';
import  Skeleton  from "../Skeleton";

const RestaurantCard = ({restaurant, onClick}) => {
const [imageLoaded, setImageLoaded] = useState(false);
return(<Restaurant onClick={onClick}>
    <RestaurantInfo>
        <Title>{restaurant.name}</Title>
       <ReactStars count={5} ishalf value={restaurant.rating} edit={false} activeColor='#e7711c' />
        <Address >{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto 
    imageLoaded={imageLoaded}
    src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
    onLoad={() => setImageLoaded(true)}
    />
    {!imageLoaded && <Skeleton width="80px" height="80px" />}
</Restaurant>)}

export default RestaurantCard;