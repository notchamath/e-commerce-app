import { useNavigate } from 'react-router-dom';
import { BUTTON_TYPES } from '../button/Button';

import Button from '../button/Button';
import defaultImg from '../../assets/images/img-not-found.png';

import './HomeBanner.scss';

export default function HomeBanner({product}) {
    const navigate = useNavigate();

    // handle button
    const handleClick = () => {
        navigate(`/products/${product?._id}`)
    }

    return (
        <section className='home-banner__container'>
            <img 
                src={product?.image}
                alt={product?.name}
                onError={({currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = defaultImg;
                }}
            />
            <div className="home-banner__details">
                <div className="home-banner__name">{product?.name}</div>
                <div className="home-banner__description">{product?.description}</div>
                <Button onClick={handleClick} className={'home-banner__btn'} buttonType={BUTTON_TYPES.RED}>Buy Now</Button>
            </div>
        </section>
    )
}
