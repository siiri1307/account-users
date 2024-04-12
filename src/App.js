import { Header } from "./components/Header";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { UsersList } from "./components/UsersList";
import { useState } from "react";
import data from "./data/users.json";

function App() {

  const [search, setSearch] = useState('')

  const filteredUsers = search ? data.users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) : data.users

  return (
    <AppContainer>
      <Header setSearchText={setSearch} />
      <UsersList users={filteredUsers} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Box)({
  backgroundColor: "#EDF2F7",
  padding: "30px"
})