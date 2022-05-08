import { Flex, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from 'react-icons/io5';
import React from 'react';

const Icons: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
        gap={1.5}
      >
        <Flex
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: 'gray.200' }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: 'gray.200' }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={24} />
        </Flex>
        <Flex
          mr={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: 'gray.200' }}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex>
      </Flex>
      <Flex gap={1.5} align="center">
        <Flex
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: 'gray.200' }}
        >
          <Icon as={BsChatDots} fontSize={20} />
        </Flex>
        <Flex
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: 'gray.200' }}
        >
          <Icon as={IoNotificationsOutline} fontSize={22} />
        </Flex>
        <Flex
          padding={1}
          display={{ base: 'none', md: 'flex' }}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: 'gray.200' }}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Icons;
