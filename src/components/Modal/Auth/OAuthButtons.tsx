import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction="column" width="100%" gap={2} mb={4}>
      <Button variant="oauth" gap={2}>
        <Image src="/images/googlelogo.png" alt="Google" height="20px" />
        Continue with Google
      </Button>
      <Button variant="oauth" gap={2}>
        {/* <Image src="/images/googlelogo.png" alt="GitHub" height="20px" /> */}
        Continue with GitHub
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
