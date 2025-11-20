import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "Loading...";

  useEffect(() => {
    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 100);
          return 100;
        }
        return prev + 1; // speed of progress
      });
    }, 100);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50  text-green-700 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[8px] bg-green-700 rounded relative overflow-hidden">
      <div
  className="w-[40%]h-full bg-green-700 shadow-[0_0_15px_#3b82f6] transition-all "
  style={{ width: `${progress}%` }}
></div>

      </div>
    </div>
  );
}
