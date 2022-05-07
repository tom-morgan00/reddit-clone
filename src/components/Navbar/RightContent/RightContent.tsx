import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
