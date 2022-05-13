import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex border="1px solid red" justify="center" padding="16px 0">
      <Flex border="1px solid green" width="95%" maxW="860px" justify="center">
        <Flex
          border="1px solid blue"
          direction="column"
          width={{ base: '100%', md: '65%' }}
          mr={{ base: 0, md: 6 }}
        >
          {children[0 as keyof typeof children]}
        </Flex>
        <Flex
          border="1px solid orange"
          direction="column"
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'none', md: '35%' }}
        >
          {children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
