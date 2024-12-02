import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function Modal(promps) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <div className="contact-img" onClick={handleOpen} >
        {promps.btn}
      </div>
      <Dialog open={open} handler={handleOpen} className="modal-width mx-auto ">
        <DialogHeader className="standard-h1">{ promps.title }</DialogHeader>
        <DialogBody className="standard-p">
        {promps.paragraph}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="white"
            onClick={handleOpen}
            className="mr-1 bg-red-600"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Modal;