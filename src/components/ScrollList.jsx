import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box } from "@mui/system";
import { UserRow } from "./UserRow";
import { memo } from "react";
import { useMediaQuery } from "@mui/material";

const ScrollList = ({ users, onUserSelectionChange, selectedUserIds }) => {

  const isSmallScreen = useMediaQuery("(max-width:899px)")

  const renderUser = ({ index, style }) => {
    const user = users[index]
    const selected = selectedUserIds.includes(user.id)

    return <UserRow user={user} style={style} onUserSelectionChange={onUserSelectionChange} isSelected={selected} key={user.id} />
  }

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            itemCount={users.length}
            itemSize={isSmallScreen ? 128 : 64}
          >
            {renderUser}
          </List>
        )}
        </AutoSizer>
      </Box>
  )
}

const MemoizedScrollList = memo(ScrollList)

export default MemoizedScrollList

