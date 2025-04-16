import { Box, VStack, Heading, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function ExtendedRally() {
  return (
    <VStack spacing={10} p={6} mt={12} align="center">
      <Heading
        fontSize="3xl"
        fontWeight="medium"
        color="#E6E6FA"
        fontFamily="'Bungee', serif"
        mb="5"
        textAlign="center"
      >
        Extended Rally
      </Heading>
            <Box textAlign="center">
              <Text fontSize="xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif">
                  Additional Highlight Reels
              </Text>
              </Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        width="100%"
        gap={6}
      >
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="300px"
          bgColor="#E6E6FA"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#FFD700"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <video width="100%" height="100%" controls>
            <source src="ally-extended-rally-5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="300px"
          bgColor="#E6E6FA"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#FFD700"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <video width="100%" height="100%" controls>
            <source src="ally-extended-rally-6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default ExtendedRally;
