import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

export default function TodoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={remove}>
          <DeleteForeverRoundedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton onClick={toggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            // onChange={toggle}  // not needed because the whole listitem is encapsulated in the ListItemButton which toggles
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
