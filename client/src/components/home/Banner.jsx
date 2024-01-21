import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data'
import { Box, styled } from '@mui/material';
const Slide = styled(Box)`
margin:15px 10px;
overflow:hidden;
`
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Banner = () => {
    return (
        <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        >
            {bannerData.map(data => (
                <Slide key={data.id}>
                    <img src={data.url} alt="banner" style={{height:'250px'}} />
                </Slide>
            ))}
        </Carousel>
    )
}

export default Banner