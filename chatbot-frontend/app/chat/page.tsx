import { ChatInterface } from "../../components/chat-interface"
import { Button } from "@/components/ui/button"

export default function ChatPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg border shadow-lg">
        <ChatInterface />
      </div>
    </div>
  )
}

