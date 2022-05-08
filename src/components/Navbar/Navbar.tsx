import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';
import Directory from './Directory/Directory';

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      bg="white"
      height="44px"
      padding="8px 12px"
      boxShadow="md"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Image src="/images/redditFace.svg" alt="reddit" height="32px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit"
          height="40px"
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
