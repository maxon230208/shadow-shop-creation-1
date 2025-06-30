import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="relative border-b border-gray-800 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
                ShadowShop
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-pink/20 blur-sm rounded-lg opacity-50"></div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-300 hover:text-neon-green transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"
            >
              Аккаунты
            </a>
            <a
              onClick={() =>
                window.open("https://vk.com/shadowshopcs2", "_blank")
              }
              className="text-gray-300 hover:text-neon-blue transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] cursor-pointer"
            >
              О нас
            </a>
            <a
              onClick={() =>
                window.open("https://vk.com/topic-230417842_53981653", "_blank")
              }
              className="text-gray-300 hover:text-neon-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] cursor-pointer"
            >
              Гарантии
            </a>
            <a
              onClick={() =>
                window.open("https://vk.com/topic-230417842_53981656", "_blank")
              }
              className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,128,0.8)] cursor-pointer"
            >
              Отзывы
            </a>
            <a
              onClick={() =>
                window.open("https://vk.com/stalin_i_lenin_top", "_blank")
              }
              className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.8)] cursor-pointer"
            >
              Контакты
            </a>
          </nav>

          <Button
            onClick={() =>
              window.open("https://vk.com/stalin_i_lenin_top", "_blank")
            }
            className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-pink text-black font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] border-0"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Написать в ВК
          </Button>
        </div>
      </div>
    </header>
  );
}
