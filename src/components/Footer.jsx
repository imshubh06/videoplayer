import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box
            minH={'40'}
            bgColor={'blackAlpha.900'}
            p={'16'}
            color={'white'}
        >
            <Stack direction={['column', 'row']}>
                <VStack w={'full'}>
                    <Heading
                    size={'md'}
                    textAlign={['center','left']}
                    textTransform={'uppercase'}
                    >Subscribe to get Updates</Heading>
                    <HStack borderBottom={'2px solid white'} p={'2'}>
                        <Input placeholder='Enter your email' outline={'none'} focusBorderColor={'none'} border={'none'} />
                        <Button
                        p={'0'}
                        variant={'ghost'}
                        colorScheme={'purple'}
                        borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20}/>
                        </Button>
                    </HStack>
                </VStack>

                <VStack 
                w={'full'}
                borderLeft={'2px solid white'}
                borderRight={'2px solid white'}
                >
                    <Heading>VIDEO HUB</Heading>
                    <Text>All rights reserved</Text>
                </VStack>

                <VStack w={'full'}>
                    <Heading
                    size={'md'}
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    >Social Media</Heading>

                    <Button variant={'link'} colorScheme={'white'}>
                        <a href='www.youtube.com' target={'_blank'}>Youtube</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a href='www.instagram.com' target={'_blank'}>Instagram</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a href='www.github.com' target={'_blank'}>Github</a>
                    </Button>
                    

                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer