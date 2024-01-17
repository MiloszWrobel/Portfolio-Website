import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { scroller } from "react-scroll";
import { grey } from "@mui/material/colors";

export default function Banner() {
  function handleClick() {
    scroller.scrollTo("Scroll here", options);
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
        <IconButton
          aria-label="Github link"
          size="large"
          href="https://github.com/MiloszWrobel"
          target="_blank"
        >
          <GitHubIcon
            sx={{ width: "50px", height: "auto", color: grey[100] }}
          />
        </IconButton>
        <IconButton
          aria-label="LinkedIn link"
          size="large"
          href="https://www.linkedin.com/in/milosz-w/"
          target="_blank"
        >
          <LinkedInIcon
            sx={{ width: "50px", height: "auto", color: grey[100] }}
          />
        </IconButton>
      </Stack>
      <IconButton
        aria-label="scroll"
        onClick={handleClick}
        size="large"
        sx={{ marginTop: "30vh" }}
      >
        <KeyboardDoubleArrowDownIcon
          sx={{ width: "50px", height: "auto", color: grey[100] }}
        />
      </IconButton>
    </div>
  );
}
