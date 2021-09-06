import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import logo1 from '../../assets/logo1.png'
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.jpg';
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel,  ModalTitle, ModalSub } from './style';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';


const Home = () => {
const [inputValue, setInputValue] = useState('');// useState [Valor, função]
const [query,setQuery] = useState(null);
const [placeId, setPlaceId] = useState(null)
const [modalOpened, setModalOpened] = useState(false);
const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants)

const setting = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
};
    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
    }

    function handleKeyPress(e){

        if(e.key === 'Enter'){
            setQuery(inputValue)
        }
    }

return(
<Wrapper>
    <Container>
        <Search>
           <Logo src={logo1}/>
              <TextField
                label='Pesquisar Restaurantes' outlined autoFocus
                     trailingIcon={<MaterialIcon role="button" icon="search"/>}>
                    <Input
                 value={inputValue}
                 onKeyPress={handleKeyPress}
                onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            {restaurants.length > 0 ? (<>
                <CarouselTitle>Na sua Área Local</CarouselTitle>
            <Carousel {...setting}> 
            {restaurants.map((restaurant) => <Card
            key={restaurant.place_id} 
            photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
            title={restaurant.name}/>)}             
            </Carousel>
            </>)

            : (<Loader />)}
            
        </Search>
        {restaurants.map((restaurant) => <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} 
        restaurant={restaurant} />)}
        
   </Container>
  <Map query={query} placeId={placeId} />
   <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (<>
                <ModalTitle>{restaurantSelected?.name }</ModalTitle>
                <ModalSub>Contato: {restaurantSelected?.formatted_phone_number } <br/>
                         Endereço: {restaurantSelected?.formatted_address }<br/>
                         Funcionamento: {restaurantSelected?.opening_hours?.open_now ? 'Aberto agora' : 'Fechado'}
                         
                </ModalSub>
                </>) : 
                (<>
                    <Skeleton width="10px" height="10px" />
                    <Skeleton width="10px" height="10px" />
                    <Skeleton width="10px" height="10px" />
                    <Skeleton width="10px" height="10px" />
                </>)}
                
                
   </Modal> 
</Wrapper>
)};

export default Home;