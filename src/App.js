import { Header } from "./components/Header";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { UsersList } from "./components/UsersList";
import { useState, useEffect } from "react";
import data from "./data/users.json";
import { sortUsersBy } from "./helpers/sortUsersBy";

function App() {

  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("")

  const trimSearchQuery = (text) => {
    setSearchQuery(text.trim())
  }

  useEffect(() => {
    const fetchUsers = () => {
      setTimeout(() => {
        const { users } = data
        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
        if (orderBy === "permission") {
          const sortedUsers = sortUsersBy(filteredUsers, order, (user) => user.role)
          setUsers(sortedUsers)
        } else if (orderBy === "name") {
          const sortedUsers = sortUsersBy(filteredUsers, order, (user) => user.name)
          setUsers(sortedUsers)
        }
        else {
          setUsers(filteredUsers)
        }
      }, 500)
    }
    fetchUsers()
  }, [searchQuery, order, orderBy])

  const sortUsers = (sortProperty, sortOrder) => {
    setOrderBy(sortProperty)
    setOrder(sortOrder)
  }

  return (
    <AppContainer>
      <Header setSearchText={trimSearchQuery} />
      <UsersList users={users} onSortTriggered={sortUsers} orderBy={orderBy} order={order} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Box)({
  backgroundColor: "#EDF2F7",
  padding: "30px"
})