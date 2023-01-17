import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../store/AdminRoutes/AllUsers/allUsers.action";

function AllUsers() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const deleteUser = (id) => {
    let response = axios
      .delete(`https://sephora-backend.onrender.com/users${id}`)
      .then((e) => console.log(e.data))
      .catch((e) => console.log(e));
  };

  if (loading) {
    return (
      <Center h="500px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  if (error) {
    return <h3>Something went Wrong</h3>;
  }

  return (
    <Box p={5}>
      <Box>
        <Text fontSize="3xl">All Users</Text>
      </Box>
      <TableContainer p={10}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Username</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((e) => (
              <Tr key={e.id}>
                <Td>{e.name}</Td>
                <Td>{e.email}</Td>
                <Td>{e.username}</Td>
                <Td onClick={() => deleteUser(e.id)}>Delete</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AllUsers;
