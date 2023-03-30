import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'Container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack 
            w={['full','96']}
            alignItems='stretch'
            spacing={'8'}
            my='16'
            m={'auto'}
            
            >
                <Heading>Welcome back</Heading>
                <Input 
                type={'email'} 
                placeholder={'Email'} 
                required
                focusBorderColor={'purple.500'} 
                />

                <Input 
                type={'password'} 
                placeholder={'Password'} 
                focusBorderColor={'purple.500'} 
                required
                />

                <Button variant={'link'} alignSelf={'end'}>
                    <Link to={'/forgotpassword'}>Forgot Password?</Link>
                </Button>
                <Button colorScheme={'purple'} type='submit'>Log In</Button>

                <Text textAlign={'right'}>
                    New user?{" "}
                    <Button variant={'link'} alignSelf={'end'}>
                    <Link to={'/signup'}>Signup</Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login