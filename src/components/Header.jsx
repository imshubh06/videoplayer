import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (

        <>
            <Button
                pos={'fixed'}
                top={'4'}
                zIndex={'overlay'}
                left={'4'}
                colorScheme={"purple"}
                w={10}
                h={10}
                p={0}
                borderRadius={'full'}
                onClick={onOpen}
            >

                <BiMenuAltLeft size={"20"} />

            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement='left'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Video Hub</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'} >
                            <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                                <Link to={"/"}>Home</Link>

                            </Button>
                            <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                                <Link to={"/videos"}>Videos</Link>

                            </Button>
                            <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                                <Link to={"/videos?category=free"}>Free Video</Link>

                            </Button>
                            <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                                <Link to={"/upload"}>Upload Video</Link>

                            </Button>

                        </VStack>

                        <HStack position={"absolute"} bottom={4} width={'full'} justifyContent={"space-evenly"} left={0}>
                            <Button onClick={onClose} colorScheme={"purple"} variant={"solid"}>
                                <Link to={"/login"}>Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme={"purple"} variant={"solid"}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header