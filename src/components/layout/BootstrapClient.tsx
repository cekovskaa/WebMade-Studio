"use client";

import { useEffect } from "react";

export function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return null;
}
