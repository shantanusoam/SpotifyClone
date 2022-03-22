import { Box } from '@chakra-ui/layout';

const PlayerLayout = ({ children }) => {
  return (
    <Box
      bg="gray.100"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      Layout
      {children}
    </Box>
  );
};
export default PlayerLayout;
