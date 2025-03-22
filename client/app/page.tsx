import { useChat } from "ai/react";

export default function Home() {
  const {
    input,
    messages,
    handleInputChange,
    handleSubmit
  }= useChat();
  return (
    <div>
      {}
    </div>
  );
}
