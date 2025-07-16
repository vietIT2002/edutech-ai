import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, User, Cpu } from "lucide-react";
import products from "../../data/products";

function normalize(text) {
  return removeVietnameseTones(text).toLowerCase().trim();
}

function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

const ChatBotFloating = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Xin chào! Tôi là trợ lý AI của Edutech. Bạn muốn học gì hôm nay?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const inputNormalized = normalize(input);
      const keywords = inputNormalized.split(/\s+/).filter(word => word.length > 2);

      const matched = products.filter(product => {
        const name = normalize(product.name);
        const desc = normalize(product.shortDescription || "");
        return keywords.some(word =>
          name.includes(word) || desc.includes(word)
        );
      });

      let reply = "";

      if (matched.length === 0) {
        reply = "Xin lỗi, tôi chưa tìm thấy khóa học phù hợp. Bạn có thể thử lại với từ khóa khác.";
      } else {
        reply = `Dưới đây là khóa học bạn có thể quan tâm:\n\n${matched.map(p =>
          `📘 ${p.name} - ${p.price.toLocaleString()}đ`
        ).join("\n")}`;
      }

      setMessages((prev) => [...prev, { role: "bot", content: reply }]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <div className="relative group">
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-pulse"
            onClick={() => setOpen(true)}
          >
            <MessageSquare size={28} />
          </button>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Hỏi Edutech AI
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      )}

      {open && (
        <div className="bg-white w-80 md:w-96 h-[500px] md:h-[550px] rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Edutech AI</h3>
                <p className="text-sm text-blue-100">Trợ lý tìm khóa học thông minh</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200">
              <X size={20} />
            </button>
          </div>

          {/* Chat content */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                      : "bg-gradient-to-r from-purple-500 to-purple-600"
                  }`}>
                    {msg.role === "user" ? <User size={16} /> : <Cpu size={16} />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl shadow-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-md"
                      : "bg-white text-gray-800 border border-gray-200 rounded-tl-md"
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                    <Cpu size={16} />
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-md shadow-sm">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-600">Đang tư vấn</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={loading}
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 disabled:bg-gray-100"
                placeholder="Nhập câu hỏi của bạn..."
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-4 py-3 rounded-xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg disabled:shadow-none"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotFloating;