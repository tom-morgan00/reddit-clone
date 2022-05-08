import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
  Text,
  MenuGroup,
} from '@chakra-ui/react';
import { MdOutlineLogin } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { signOut, User } from 'firebase/auth';
import React from 'react';

import { useSetRecoilState } from 'recoil';

import { BsHouseFill, BsReddit } from 'react-icons/bs';
import { authModalState } from '../../../atoms/authModalAtom';
import { auth } from '../../../firebase/clientApp';
import Communities from './Communities';

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        mr={2}
        ml={{ base: 2, md: 0 }}
        height="28px"
        alignSelf="center"
        cursor="pointer"
        padding="0 2px"
        borderRadius={4}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex width={{ base: 'auto', lg: 'flex' }} align="center" gap={1}>
          <Icon as={BsHouseFill} fontSize={20} />
          <Text
            display={{ base: 'none', md: 'inline' }}
            fontWeight={600}
            fontSize="10pt"
          >
            Home
          </Text>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList justifyContent="space-between" mt={2} py={2} minWidth="180px">
        <MenuGroup title="MODERATING" fontSize="7pt" color="gray.500">
          <MenuItem
            fontSize="10pt"
            _hover={{ bg: 'gray.100' }}
            onClick={() => {}}
          >
            <Flex alignItems="center">
              <Icon as={BsReddit} fontSize={20} mr={2} color="brand.100" />
              r/shadesCommunity
            </Flex>
          </MenuItem>
        </MenuGroup>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
