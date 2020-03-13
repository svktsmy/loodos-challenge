import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MenuC(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = value => {
    props.onSelect(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        {props.value.label}
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {props.data.map(d => (
          <MenuItem onClick={() => handleSelect(d)}>{d.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
