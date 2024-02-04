import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import "./toast.css";
import { HandIcon, HeartIcon, MixIcon, RocketIcon } from "@radix-ui/react-icons";

const ToastComponent = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Hi there! ");
  const [icon, setIcon] = useState("heart");

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
    setTimeout(() => {
      setOpen(true);
      setMessage("Welcome to Zero Latency! ");
      setIcon("rocket");
    }, 6000);
    setTimeout(() => {
      setOpen(false);
    }, 11000);
    setTimeout(() => {
      setOpen(true);
      setMessage("Why wait, register now! ");
      setIcon("game");
    }, 15000);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">
          {message}
          {icon === "heart" && <HeartIcon />}
          {icon === "rocket" && <RocketIcon />}
          {icon === "game" && <MixIcon />}
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastComponent;
