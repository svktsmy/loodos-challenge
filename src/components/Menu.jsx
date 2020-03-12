import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const data = [
  { label: "5 Seconds", value: 5000 },
  { label: "15 Seconds", value: 15000 },
  { label: "45 Seconds", value: 45000 }
];
export default function MenuC(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = value => {
    if (value) props.onSelect(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {data.find(x => x.value === props.data)?.label}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {data.map(d => (
          <MenuItem onClick={() => handleClose(d.value)}>{d.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
