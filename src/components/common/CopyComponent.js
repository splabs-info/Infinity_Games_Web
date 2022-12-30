import { ContentCopyRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { toast } from "react-toastify";

const CopyComponent = ({ content, children }) => {
  const handleCopy = () => {
    toast.success("Copped");
  };

  return (
    <CopyToClipboard text={content} onCopy={(value, e) => handleCopy()}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#869ba5"
        sx={{
          opacity: 0.8,
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography variant="body2" style={{ cursor: "pointer" }}>
          {children}
        </Typography>
        <IconButton
          sx={{
            padding: 0,
            background: "transparent!important",
            border: "none!important",
          }}
        >
          <ContentCopyRounded fontSize="small" />
        </IconButton>
      </Box>
    </CopyToClipboard>
  );
};

export default CopyComponent;
