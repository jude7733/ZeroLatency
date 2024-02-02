import * as Toast from "@radix-ui/react-toast";
import { useEffect, useRef, useState } from "react";
import "./toast.css";
import { RocketIcon } from "@radix-ui/react-icons";

const ToastComponent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">
          Welcome! to Zero Latency <br />
          <RocketIcon />
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastComponent;
