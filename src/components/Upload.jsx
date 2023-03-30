import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'8'}>
            <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
                <AiOutlineCloudUpload size={'10vmax'} />
                <form>

                    <HStack>
                        <Input type={'file'} colorScheme={'purple'}
                            css={{
                                '&::file-selector-button': {
                                    border: 'none',
                                    width: 'calc(100% + 36px)',
                                    height: '100%',
                                    color: 'purple',
                                    backgroundColor: 'white',
                                    marginLeft:'-18px',
                                    cursor:'pointer'
                                }

                            }}

                        ></Input>
                        <Button type='submit' colorScheme={'purple'}>Upload</Button>
                    </HStack>


                </form>


            </VStack>

        </Container>
    )
}

export default Upload