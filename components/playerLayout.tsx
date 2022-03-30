import { Box } from '@chakra-ui/layout';
import { Sidebar } from './sidebar';
const PlayerLayout = ({ children }) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      bg="gray.100"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar></Sidebar>
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}{' '}
      </Box>
      <Box position="absolute" bottom="0" left="0">
        Player
      </Box>
    </Box>
  );
};
export default PlayerLayout;
