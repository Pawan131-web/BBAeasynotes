"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getSnapshot = () => String(new Date().getFullYear());
const getServerSnapshot = () => "2025";

export default function CurrentYear() {
  const year = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  return <>{year}</>;
}
