import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Phone } from 'lucide-react';
import { chatService, INITIAL_CHAT_MESSAGE } from '../../services/chatService';
import { CONTACT_INFO } from '../../utils/constants';

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_CHAT_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const assistantResponse = await chatService.sendMessage(text);
      setMessages((prev) => [...prev, assistantResponse]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-gold-primary to-gold-bright text-white shadow-premium hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-primary/30"
            aria-label="Open AI Travel Assistant"
          >
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-bright rounded-full border-2 border-white animate-pulse" />
            <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />

            {/* Tooltip on hover */}
            <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-charcoal-main text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
              Ask AI Travel Assistant
            </span>

            {/* Unread indicator */}
            {unreadCount > 0 && (
              <span className="sr-only">{unreadCount} new message</span>
            )}
          </button>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[600px] h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-charcoal-main via-charcoal-light to-charcoal-main p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold-primary/20 border border-gold-light/30 flex items-center justify-center text-gold-bright">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  <span>Natarajan Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[11px] text-gray-300">24/7 Smart Travel & Car Concierge</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-charcoal-light transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[85%] ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      msg.sender === 'user'
                        ? 'bg-gold-primary text-white'
                        : 'bg-white border border-gray-200 text-gold-primary shadow-sm'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gold-primary text-white rounded-tr-none'
                        : 'bg-white border border-gray-200/80 text-text-primary rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span
                      className={`block text-[9px] mt-1.5 ${
                        msg.sender === 'user' ? 'text-gold-light' : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>

                {/* Quick suggestions if attached to message */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%] pl-9">
                    {msg.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(suggestion)}
                        className="px-2.5 py-1 rounded-full bg-white hover:bg-gold-pale border border-gold-light/80 text-[11px] font-medium text-gold-primary hover:text-gold-bright transition-colors shadow-2xs text-left"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-400 text-xs pl-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gold-primary">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-gray-200 px-3.5 py-2 rounded-2xl shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gold-primary rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Support Link */}
          <div className="px-4 py-2 bg-gray-100/80 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
            <span>Need human booking manager?</span>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="font-semibold text-gold-primary hover:text-gold-bright flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about cars, rates, or Ooty tours..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-gold-primary/20 focus:border-gold-primary transition-all text-text-primary placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright disabled:opacity-40 disabled:hover:bg-gold-primary text-white shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
