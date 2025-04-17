import { useState, useRef } from 'react';
import { VStack, Heading, Box, Flex, Grid, Text, IconButton } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

function PlayerProfile() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const player = {
    frontImg: "ally-40.jpeg",
    secondImg: "ai-basketball-placeholder.png",
    name: "Player Bio", 
    bioCategories: [
      { title: "Class", description: "2026" },
      { title: "Position", description: "L/DS" },
      { title: "Height", description: "5'3\"" },
      { title: "Weight", description: "120 lbs" },
      { title: "Hometown", description: "San Antonio, TX" },
      { title: "High School", description: "Taft High School" },
    ],
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const maxX = isMobile ? 80 : 400;
  const maxY = isMobile ? -30 : -80;
  
  const volleyballSpring = useSpring({
    from: { transform: 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' },
    to: async (next) => {
      const bounceSequence = (dir = 1) => ([
        { x: 0.25 * maxX * dir, y: 0.5 * maxY, r: 90 * dir, s: 1.05 },
        { x: 0.5 * maxX * dir, y: maxY, r: 180 * dir, s: 1.1 },
        { x: 0.75 * maxX * dir, y: 0.75 * maxY, r: 270 * dir, s: 1.05 },
        { x: maxX * dir, y: 0.25 * maxY, r: 360 * dir, s: 1 },
      ]);
  
      while (true) {
        for (const dir of [1, -1]) {
          const steps = bounceSequence(dir);
          for (const step of steps) {
            await next({
              transform: `translateX(${step.x}px) translateY(${step.y}px) rotate(${step.r}deg) scale(${step.s})`,
              config: { mass: 1, tension: 250, friction: 10 },
            });
            await next({
              transform: `translateX(${step.x}px) translateY(0px) rotate(${step.r + 45 * dir}deg) scale(0.98)`,
              config: { mass: 1, tension: 220, friction: 14 },
            });
            await next({
              transform: `translateX(${step.x}px) translateY(0px) rotate(${step.r + 45 * dir}deg) scale(1)`,
              config: { tension: 200, friction: 6 },
            });
          }
        }
      }
    },
  });
  
  
  const smokeAndBounce = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
      filter: 'blur(8px)',
    },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' });
      await next({ transform: 'translateY(-10px)', config: { tension: 180, friction: 12 } });
      await next({ transform: 'translateY(5px)', config: { tension: 180, friction: 12 } });
      await next({ transform: 'translateY(0px)', config: { tension: 180, friction: 12 } });
    },
    config: { tension: 120, friction: 20 },
    delay: 300,
  });

  return (
    <VStack
      spacing={10}
      p={6}
      mt={12} 
    >
<animated.div style={smokeAndBounce}>
  <Heading
    fontSize="3xl"
    fontWeight="medium"
    color="#E6E6FA"
    fontFamily="'Bungee', serif"
    mb="5"
  >
    {player.name}
  </Heading>
</animated.div>

{isPlaying ? (
  <button
    onClick={() => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E6E6FA"
      strokeWidth="2"
      width="40px"
      height="40px"
    >
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  </button>
) : (
  <button
    onClick={handlePlay}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E6E6FA"
      strokeWidth="2"
      width="40px"
      height="40px"
    >
      <polygon points="5,3 19,12 5,21" />
    </svg>
  </button>
)}

      <audio ref={audioRef} src="ally-song.mp3" preload="auto" />
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#E6E6FA"
          borderWidth="3px"
          minH="500px"
          minW="350px"
          m="5"
        />
        <Box
          w={{ base: '90%', md: '500px' }}
          h="700px"
          minW="320px"
          m="5"
          bgColor="#F8F8FF"
          bgImage="linear-gradient(-45deg, #F8F8FF 25%, transparent 25%, transparent 50%, #F8F8FF 50%, #F8F8FF 75%, transparent 75%, transparent)"
          bgSize="1px 1px"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#FFD700"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
        >
          <Grid gap={4}>
            {player.bioCategories.map((category, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#734F96" fontWeight="bold" fontFamily="'Bungee', serif" fontSize="lg">
                  {category.title}
                </Text>
                <Text color="#734F96" fontFamily="'Roboto', serif" fontSize="lg" fontWeight="semibold" mt={1}>
                  {category.description}
                </Text>
              </Box>
            ))}
          </Grid>
          <Flex justifyContent="center" mt={6}>
            <IconButton
              as={Link}
              to="https://www.facebook.com"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              color="#734F96" 
              fontSize="24px"
              _hover={{ color: '#0056b3' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://www.instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="#734F96" 
              fontSize="24px"
              _hover={{ color: '#e1306c' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://snapchat.com"
              aria-label="Snapchat"
              icon={<FaSnapchatGhost />}
              variant="ghost"
              color="#734F96" 
              fontSize="24px"
              _hover={{ color: '#fffc00' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://www.youtube.com"
              aria-label="YouTube"
              icon={<FaYoutube />}
              variant="ghost"
              color="#734F96" 
              fontSize="24px"
              _hover={{ color: '#c4302b' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
          </Flex>
        </Box>
      </Flex>
      <Box
        w="100%"
        h="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        border="none"
      >
        <animated.img
          src="/volleyball-2.png"
          alt="Player Image"
          style={{
            ...volleyballSpring,
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            willChange: 'transform',
          }}
        />
      </Box>
    </VStack>
  );
}

export default PlayerProfile;
