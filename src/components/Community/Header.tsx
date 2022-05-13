import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaReddit } from 'react-icons/fa';
import { Community } from '../../atoms/communitiesAtom';

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const [isJoined, setIsJoined] = useState(false);

  return (
    <Flex direction="column" width="100%" height={148}>
      <Box height="50%" bg="blue.400" />
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          {communityData.imageURL ? (
            <Image src={communityData.imageURL} alt={communityData.id} />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position="relative"
              top="-25%"
              color="blue.500"
              bg="white"
              border="4px solid white"
              borderRadius="50%"
            />
          )}
          <Flex pt={2} pl={2}>
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt">
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="gray.400">
                r/{communityData.id}
              </Text>
            </Flex>
            <Button
              height="32px"
              px={6}
              variant={isJoined ? 'outline' : 'solid'}
              onClick={() => setIsJoined(!isJoined)}
            >
              {isJoined ? 'Joined' : 'Join'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
