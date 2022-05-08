import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';

type SearchInputProps = {
  user?: User | null;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex
      flexGrow={1}
      maxW={user ? 'auto' : '480'}
      alignItems="center"
      mr="8px"
    >
      <InputGroup alignItems="center" height="32px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" mb="8px" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: 'gray.500' }}
          _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          bg="gray.50"
          height="100%"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
