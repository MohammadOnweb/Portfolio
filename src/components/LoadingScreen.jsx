import { useEffect, useState } from "react";

export default function LoadingScreen() {
  return (
<div className="flex items-center w-full h-screen justify-center bg-gradient-to-br from-blue-500 to-cyan-400 overflow-hidden">
    <div className="w-44 h-2 bg-green-600 oveflow-hidden rounded relative">
    <div className="h-full rounded bg-green-500 animate-loading-bar w-1/2">
  </div>
</div>
</div>
  );
  }
