import { MenuGroup, MenuItem, Flex, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsReddit } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal';

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CreateCommunityModal open={open} handleClose={handleClose} />
      <MenuGroup title="MY COMMUNITIES" fontSize="7pt" color="gray.500">
        <MenuItem
          fontSize="10pt"
          _hover={{ bg: 'gray.100' }}
          onClick={() => setOpen(true)}
        >
          <Flex alignItems="center">
            <Icon as={GrAdd} fontSize={20} mr={2} />
            Create Community
          </Flex>
        </MenuItem>
        <MenuItem
          fontSize="10pt"
          _hover={{ bg: 'gray.100' }}
          onClick={() => {}}
        >
          <Flex alignItems="center">
            <Icon as={BsReddit} fontSize={20} mr={2} color="brand.100" />
            r/tomsCommunity
          </Flex>
        </MenuItem>
      </MenuGroup>
    </>
  );
};
export default Communities;
