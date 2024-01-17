import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { animateScroll } from "react-scroll";

export default function Banner() {
  function handleClick() {
    animateScroll.scrollToBottom(options);
  }
  const options = {
    duration: 1000,
    smooth: true,
  };
  return (
    <div id="app" className="background">
      <h1>Milosz Wrobel</h1>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton aria-label="Github link" size="large" color="secondary">
          <GitHubIcon sx={{ width: "50px", height: "auto" }} />
        </IconButton>
        <IconButton aria-label="LinkedIn link" size="large" color="secondary">
          <LinkedInIcon sx={{ width: "50px", height: "auto" }} />
        </IconButton>
      </Stack>
      <IconButton
        aria-label="scroll"
        onClick={handleClick}
        size="large"
        color="secondary"
        sx={{ marginTop: "30vh" }}
      >
        <KeyboardDoubleArrowDownIcon sx={{ width: "50px", height: "auto" }} />
      </IconButton>
    </div>
  );
}
