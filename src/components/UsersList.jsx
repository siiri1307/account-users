import { styled } from "@mui/system";
import { useState } from "react";
import { Box } from "@mui/system";
import { ActionBar } from "./ActionBar";
import MemoizedScrollList from "./ScrollList";
import { useCallback } from "react";
import { Labels } from "./Labels";

export const UsersList = ({ users }) => {

  const [selectedUserIds, setSelectedUserIds] = useState([])

  const setSelectedUsers = useCallback((id, selectionStatus) => {
    if (selectionStatus) {
      setSelectedUserIds((prevUsers) => [...prevUsers, id])
    } else {
      setSelectedUserIds((prevUsers) => prevUsers.filter(userId => userId !== id))
    }
  }, []);

  const orderByPermission = (data) => {
    console.log("TODO")
  }

  return (
    <UsersListContainer>
      <ActionBar selectedUsersCount={selectedUserIds.length}></ActionBar>
      <Labels onPermissionOrderChanged={orderByPermission}></Labels>
      <MemoizedScrollList users={users} selectedUserIds={selectedUserIds} onUserSelectionChange={setSelectedUsers} />
    </UsersListContainer>
  )
}

const UsersListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: "24px 32px",
  borderRadius: "4px",
  marginTop: "16px",
  height: "80vh"
})