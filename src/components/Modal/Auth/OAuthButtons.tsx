import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" gap={2} mb={4}>
      <Button
        variant="oauth"
        gap={2}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
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
