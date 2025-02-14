'use client'
import { toastBox } from './Toast.css';

interface ToastProps {
  message: string;
}

export default function Toast({ message }:ToastProps) {
  return <div className={toastBox}>{message}</div>;
}
