import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" padding="4px 12px" boxShadow="md">
      <Flex alignItems="center">
        <Image src="/images/redditFace.svg" alt="reddit" height="32px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit"
          height="48px"
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      <SearchInput />
      <RightContent />
      {/* <Directory /> */}
    </Flex>
  );
};
export default Navbar;
