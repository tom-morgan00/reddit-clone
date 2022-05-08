import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
  Text,
} from '@chakra-ui/react';
import { FaRedditSquare } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineLogin } from 'react-icons/md';
import { IoSparkles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0 2px"
        height="28px"
        borderRadius={4}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align="center" gap={1}>
          {user ? (
            <>
              <Icon as={FaRedditSquare} fontSize={24} color="gray.300" />
              <Flex
                direction="column"
                alignItems="start"
                fontSize="8pt"
                display={{ base: 'none', md: 'flex' }}
                lineHeight={1.2}
                mx={1}
              >
                <Text
                  fontWeight={700}
                  maxWidth="80px"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {user.displayName || user.email?.split('@')[0]}
                </Text>
                <Flex alignItems="center" gap={1}>
                  <Icon as={IoSparkles} color="brand.100" />
                  <Text>1 karma</Text>
                </Flex>
              </Flex>
            </>
          ) : (
            <Icon as={VscAccount} fontSize={24} color="gray.400" mr={1} />
          )}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList mt={2} minWidth="180px">
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
            >
              <Flex alignItems="center">
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
              onClick={() => signOut(auth)}
            >
              <Flex alignItems="center">
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: 'blue.500', color: 'white' }}
            onClick={() =>
              setAuthModalState({
                open: true,
                view: 'login',
              })
            }
          >
            <Flex alignItems="center">
              <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
              Log in / Sign up
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
