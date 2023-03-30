import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    p:'4',
    size:'3xl'
}


const Home = () => {
    return (
        <Box>                                         
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16">                                
                <Heading
                textTransform={"uppercase"}
                borderBottom={'2px solid'}
                width={'fit-content'}
                m={'auto'}
                py={'4'}
                >
                    Services</Heading>

                <Stack
                direction={['column', 'row']}
                h='full'
                p={'4'}
                alignItems={'center'}
                >
                    <Image src={img5} h={['40','400']}/>
                    <Text letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'} p={['4','16']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi eos quia possimus quo unde beatae sunt, earum ab magni facilis aut harum sit, cupiditate, vero odit fugiat vel aliquam magnam. Itaque aliquid adipisci, veniam, ab totam consectetur odit, nam impedit quia deleniti est? Ut incidunt aspernatur quisquam voluptatibus commodi similique ducimus, quas quaerat nobis cupiditate minus alias saepe, tempore perspiciatis voluptatum nemo beatae aliquid doloremque dicta eius itaque, eos iste ad. Aspernatur ut maiores dolorem velit adipisci. Maiores cum nobis, vero non culpa fuga repellat alias dolores consectetur architecto.
                    </Text>
                </Stack>
            </Container>

        </Box>
    );
};


const MyCarousel = () => (
    <Carousel autoPlay showThumbs={false} infiniteLoop showArrows={false} interval={'2000'} showStatus={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} w={'full'} h={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2} w={'full'} h={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Future is Gaming</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3} w={'full'} h={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming on Console</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img4} w={'full'} h={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Night life is cool</Heading>
        </Box>
    </Carousel>
);

export default Home

