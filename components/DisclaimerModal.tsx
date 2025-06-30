import React from "react";
import { DISCLAIMER_CONTENT } from "../constants";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DisclaimerModalProps {
  onAgree: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAgree }) => {
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-description"
      maxWidth="md"
    >
      <DialogTitle id="disclaimer-title" sx={{ textAlign: "center" }}>
        {DISCLAIMER_CONTENT.title}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText
          id="disclaimer-description"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          <Typography variant="body1" gutterBottom>
            {DISCLAIMER_CONTENT.introduction}
          </Typography>
          <Box sx={{ my: 3, maxHeight: "40vh", overflowY: "auto", pr: 2 }}>
            {DISCLAIMER_CONTENT.points.map((point, index) => (
              <Box key={point.title} sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "text.primary",
                  }}
                >
                  {index + 1}. {point.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {point.content}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="body2">
            {DISCLAIMER_CONTENT.conclusion}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Please also read our{" "}
            <Link
              href="#/terms"
              target="_blank"
              rel="noopener"
              sx={{ color: "primary.main" }}
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              href="#/privacy"
              target="_blank"
              rel="noopener"
              sx={{ color: "primary.main" }}
            >
              Privacy Policy
            </Link>{" "}
            before continuing.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onAgree} variant="contained" fullWidth>
          I Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DisclaimerModal;
