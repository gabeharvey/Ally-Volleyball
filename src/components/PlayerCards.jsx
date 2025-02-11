/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio, funFact, cardNumber, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="420px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >

        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
            <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            borderColor="#FFD700"
            borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
            boxShadow="0 0 25px rgba(255, 215, 0, 0.9), 0 0 50px rgba(218, 165, 32, 0.7)"
            >
            <Text
              bg="rgba(0, 0, 0, 0)"
              w="100%"
              color="#E6E6FA"
              fontSize="2xl"
              fontFamily="'Bungee', serif"
              textAlign="center"
              p={2}
              borderBottomRadius="12px"
            >
              {name}
            </Text>
          </Box>
        </Box>

        <Box
  bgGradient="linear(to-t, rgba(189, 252, 201, 0.7), rgba(152, 251, 152, 0.8), rgba(60, 179, 113, 0.6), rgba(46, 139, 87, 0.8))"
  position="absolute"
  style={{ backfaceVisibility: 'hidden' }}
  w="100%"
  h="100%"
  borderRadius="12px"
  borderColor="#E6E6FA" 
  borderWidth="3px"
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  boxShadow="0 0 25px rgba(189, 252, 201, 0.9), 0 0 50px rgba(46, 139, 87, 0.7)"
  transform="rotateY(180deg)"
  p={5}
>


  <Box mb={2}>
    <img src="sa-elite-logo.png" alt="Team Logo" style={{ width: '60px', height: 'auto' }} />
  </Box>

  <Text
  mt={2}
  color="#F8F8FF"
  fontFamily="'Roboto', serif"
  fontWeight="bold"
  fontSize="md"
  textAlign="center"
  textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
>
  Digs Per Set: 4.5
</Text>
<Text
  color="#F8F8FF"
  fontFamily="'Roboto', serif"
  fontWeight="bold"
  fontSize="md"
  textAlign="center"
  textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
>
  Serve Receive Rating: 2.3
</Text>
  <Text
    mt={4}
    color="#F8F8FF"
    fontFamily="'Roboto', serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    Card #{cardNumber}
  </Text>
  <Text
    mt={4}
    color="#F8F8FF"
    fontFamily="'Bungee', serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    {bio}
  </Text>
  <Text
    mt={2}
    color="#F8F8FF"
    fontFamily="'Roboto', serif"
    fontWeight="bold"
    fontSize="md"
    textAlign="center"
    textShadow="2px 2px 5px rgba(0, 0, 0, 0.7)"
  >
    Fun Fact: {funFact}
  </Text>
</Box>

      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "ally-2.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa is a defensive specialist, known for her lightning-fast reflexes and game-changing digs.",
      funFact: "Watches slow-motion replays to perfect her digging technique.",
      cardNumber: 1,
    },
    {
      frontImg: "ally-32.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa thrives in the back row, always reading the hitters and positioning herself for the perfect pass.",
      funFact: "Has a ritual of bouncing the ball three times before every serve receive.",
      cardNumber: 2,
    },
    {
      frontImg: "ally-33.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa's quick reactions and fearless dives make her a dominant force on defense.",
      funFact: "Can do a perfect one-handed pancake save in her sleep.",
      cardNumber: 3,
    },
    {
      frontImg: "ally-34.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa is a serve receive master, giving her team the perfect start to every play.",
      funFact: "Loves watching international libero highlights for inspiration.",
      cardNumber: 4,
    },
    {
      frontImg: "ally-35.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa’s leadership on the court keeps her teammates energized and locked in on defense.",
      funFact: "Wears the same lucky knee pads for every big match.",
      cardNumber: 5,
    },
    {
      frontImg: "ally-36.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa never lets a ball hit the floor without giving everything to save it.",
      funFact: "Can predict where a hitter will spike just by their approach.",
      cardNumber: 6,
    },
    {
      frontImg: "ally-37.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa turns defense into offense, setting up perfect plays after digging impossible shots.",
      funFact: "Has a collection of libero jerseys from around the world.",
      cardNumber: 7,
    },
    {
      frontImg: "ally-38.jpeg",
      name: "Ally Rosa",
      bio: "Ally Rosa’s relentless hustle and fearless dives make her the heart of the team’s defense.",
      funFact: "Can read a setter’s mind and knows where the ball is going before it even moves.",
      cardNumber: 8,
    },
  ];  

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
    //   bgImage="url('/volleyball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
    <Box textAlign="center">
    <Text fontSize="3xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif">
        Player Cards
    </Text>
    </Box>

      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="medium" color="#E6E6FA" fontFamily="'Bungee', serif">
            Click on a card to see more info
        </Text>
        </Box>
      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }}
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card
            key={index}
            frontImg={player.frontImg}
            name={player.name}
            bio={player.bio}
            funFact={player.funFact}
            cardNumber={player.cardNumber}
            flipSound={flipSound}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
