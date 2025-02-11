import { Box, VStack, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Media() {
  const mediaArticles = [
    {
      title: "Ally Rosa Shines on the Court",
      url: "https://www.expressnews.com/sports/high-school/?utm_source=marketing&utm_medium=google&utm_campaign=content_acquisition&gad_source=1&gclid=CjwKCAiA5Ka9BhB5EiwA1ZVtvKAQPFLun4dJaHWT7I5ctFof54J1JWUhoJ5YV0k4FbEKbCVp0aufjxoCA_wQAvD_BwE",
    },
    {
      title: "Ally Rosa has Clutch Performance",
      url: "https://www.expressnews.com/sports/high-school/?utm_source=marketing&utm_medium=google&utm_campaign=content_acquisition&gad_source=1&gclid=CjwKCAiA5Ka9BhB5EiwA1ZVtvKAQPFLun4dJaHWT7I5ctFof54J1JWUhoJ5YV0k4FbEKbCVp0aufjxoCA_wQAvD_BwE",
    },
  ];

  return (
    <VStack spacing={10} p={6} mt={12} align="center"> 
      <Heading fontSize="3xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif" mb="5" textAlign="center">
        Media Coverage
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        {mediaArticles.map((article, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="120px"
            m="5"
            bgColor="#E6E6FA"
            borderRadius="12px"
            borderWidth="4px"
            borderColor="#FFD700"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Link
              href={article.url}
              isExternal
              color="#734F96"
              fontWeight="bold"
              fontSize="lg" 
              p={3} 
              _hover={{ color: '#FFD700', textDecoration: 'underline' }}
            >
              {article.title}
            </Link>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Media;