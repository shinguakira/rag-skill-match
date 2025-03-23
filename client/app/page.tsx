'use client';
import { AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@radix-ui/react-avatar';
import { useChat } from '@ai-sdk/react';
import { Send } from 'lucide-react';

export default function Home() {
  const { input, messages, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bgImageReact.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute bottom-[70%] left-0 right-0 z-10 h-[calc(50% - 70px)] overflow-y-auto p-4">
          <ScrollArea className="h-full">
            {messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className={`items-end mb-4 flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="mr-2 h-8 w-8">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-2x1 max-w-[70%] p-3 ${
                      message.role === 'assistant'
                        ? 'rounded-bl-none bg-white text-gray-800'
                        : 'rounded-br-none bg-blue-500 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              );
            })}
          </ScrollArea>
        </div>
      </div>
      <div className="bg-opacity-80 absolute right-0 bottom-0 left-0 z-20 bg-white p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="メッセージを入力"
            className="flex-1 rounded-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
          />
          <Button type="submit" size="icon" className="rounded-full bg-blue-500 hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
