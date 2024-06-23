"use client";

import { CartService } from "@/service/cart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DelModal({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: any;
  id: any;
}) {
  const handleDelete = async () => {
    const delc = await CartService.deleteProductInCart(id);
    if (delc) {
      alert("Delete success");
      window.location.reload();
      handleClose();
    } else {
      alert("Delete fail");
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-product-modal-title"
        aria-describedby="delete-product-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="delete-product-modal-title"
            variant="h6"
            component="h2"
          >
            Confirm Delete
          </Typography>
          <Typography id="delete-product-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this product? This action cannot be
            undone.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button onClick={handleDelete} color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
