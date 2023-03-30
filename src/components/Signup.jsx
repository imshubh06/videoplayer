import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'Container.xl'} h={'100vh'} p={'16'}>
            <form>
                <VStack
                    w={['full', '96']}
                    alignItems='stretch'
                    spacing={'8'}
                    my='16'
                    m={'auto'}

                >
                    <Heading>Video Hub</Heading>
                    <Input
                        type={'text'}
                        placeholder={'Name'}
                        required
                        focusBorderColor={'purple.500'}
                    />

                    <Input
                        type={'email'}
                        placeholder={'Email'}
                        focusBorderColor={'purple.500'}
                        required
                    />

                    <Input
                        type={'password'}
                        placeholder={'Password'}
                        focusBorderColor={'purple.500'}
                        required
                    />

                    <Button colorScheme={'purple'} type='submit'>Sign Up</Button>

                    <Text textAlign={'right'}>
                        Already Signed in?{" "}
                        <Button variant={'link'} alignSelf={'end'}>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Signup