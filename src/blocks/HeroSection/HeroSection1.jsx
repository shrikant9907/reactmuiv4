import {
  makeStyles,
  Grid,
  Paper,
  Box,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CallMadeIcon from "@material-ui/icons/CallMade";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { getPlaceholderImageSrc } from "../../utils";

const bgImage = getPlaceholderImageSrc();
const HeroFooterImage = getPlaceholderImageSrc("600x300");

const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundImage: `url(${bgImage})`,
    position: "relative",
    backgroundSize: "cover",
    background: "#000000",
  },

  backOverlay: {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    background: "rgb(0 0 0 / 50%)",
  },

  heroSectionContent: {
    position: "relative",
    padding: theme.spacing(3),
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
      paddingRight: 0,
      fontFamily: "Montserrat, sans-serif",
    },
  },

  sliderText: {
    fontSize: "48px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    },
  },

  linkText: {
    color: "#fff",
  },

  noLink: {
    color: "inherit",
    textDecoration: "none",
  },
  btn: {
    borderRadius: "8px",
    padding: "16px 24px",
    fontWeight: 500,
    textTransform: "uppercase",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "#000",
    "&:hover": {
      background: "transparent",
      color: "#43D270",
      border: "2px solid #43D270",
    },
  },

  bottomSpace: {
    marginBottom: "20px",
  },

  buttonPrimary: {
    background: "#43D270 !important",
    border: "2px solid #43D270",
  },

  buttonWhite: {
    background: "#ffffff !important",
    border: "2px solid #fff",
  },

  buttonStyle: {
    padding: "10px 20px",
    borderRadius: "6px",
    "&:hover": {
      opacity: "0.8",
    },
  },

  linkWr: {
    textAlign: "center",
  },

  link: {
    color: "#ffffff",
  },

  headingStyle: {
    fontSize: "40px",
    marginBottom: "30px",
    fontWeight: "700",
  },

  descriptionStyle: {
    fontSize: "18px",
    marginBottom: "30px",
  },

  heroFooterImageStyle: {
    display: "block",
    margin: "auto",
    borderRadius: "8px 8px 0px 0px",
    position: "relative",
    zIndex: 99,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: 0,
    },
  },
}));

const HeroSection1 = () => {
  const classes = useStyles();

  const headingText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est iste odio, veritatis saepe porro tenetu";

  const descriptionText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est iste odio, veritatis saepe porro tenetu";

  const HeadingRenderer = ({ content, ...rest }) => {
    return (
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        align="center"
        gutterBottom
        className={classes.sliderText}
        {...rest}
      >
        {content ?? "No heading text found."}
      </Typography>
    );
  };

  const TextRenderer = ({ content, ...rest }) => {
    return (
      <Typography
        variant="h6"
        color="inherit"
        paragraph
        align="center"
        {...rest}
      >
        {content ?? "No heading text found."}
      </Typography>
    );
  };

  const ButtonRenderer = ({ label, link, ...rest }) => {
    return (
      <Link to={link} className={clsx(classes.noLink, classes.bottomSpace)}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          //   disableRipple
          endIcon={<CallMadeIcon />}
          {...rest}
        >
          {label}
        </Button>
      </Link>
    );
  };

  const LinkRenderer = ({ label, link, ...rest }) => {
    return (
      <Link to={link} className={classes.noLink}>
        <Button
          disableElevation
          disableRipple
          startIcon={<PlayArrowIcon />}
          {...rest}
        >
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <Paper elevation={0} square className={classes.heroSection}>
      <div className={classes.backOverlay}></div>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={12}>
            <div className={classes.heroSectionContent}>
              <HeadingRenderer
                content={headingText}
                className={classes.headingStyle}
              />
              <TextRenderer
                content={descriptionText}
                className={classes.descriptionStyle}
              />
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item sm={6} justifyContent="flex-end" container>
                  <ButtonRenderer
                    label="Call to action 1"
                    link={"/call-to-action1"}
                    className={clsx(classes.buttonPrimary, classes.buttonStyle)}
                  />
                </Grid>
                <Grid item sm={6} justifyContent="flex-start" container>
                  <ButtonRenderer
                    label="Call to action 1"
                    link={"/call-to-action1"}
                    color={"default"}
                    className={clsx(classes.buttonWhite, classes.buttonStyle)}
                  />
                </Grid>
              </Grid>

              <Box className={classes.linkWr}>
                <LinkRenderer
                  label={"How it works?"}
                  className={classes.link}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
        <img
          src={HeroFooterImage}
          alt=""
          className={classes.heroFooterImageStyle}
        />
      </Container>
    </Paper>
  );
};

export default HeroSection1;
