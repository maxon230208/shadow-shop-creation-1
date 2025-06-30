import Header from "@/components/Header";
import AccountCard from "@/components/AccountCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const accounts = [
  {
    rank: "Рандом КС Прайм",
    price: 550,
    features: [
      "Prime статус",
      "Чистая история",
      "50+ часов игры",
      "Готов к ММ",
    ],
  },
  {
    rank: "Рандом КС Прайм с инвентарём",
    price: 1000,
    features: [
      "Prime статус",
      "Скины в инвентаре",
      "100+ часов игры",
      "Отличное качество",
    ],
    isPopular: true,
  },
  {
    rank: "Рандом КС Прайм и отлёга",
    price: 1500,
    features: [
      "Prime статус",
      "Отлёжка аккаунта",
      "200+ часов игры",
      "Trust Factor: Зелёный",
    ],
  },
  {
    rank: "Рандом КС Прайм и от 2к инвентарь",
    price: 3000,
    features: [
      "Prime статус",
      "Инвентарь от 2000₽",
      "300+ часов игры",
      "Премиум качество",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,128,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)] pointer-events-none"></div>

      <Header />

      <main className="relative z-10">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent animate-pulse">
              ShadowShop
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Премиум аккаунты CS2 с гарантией качества
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-pink text-black font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] border-0"
              >
                <Icon name="GameController2" size={20} className="mr-2" />
                Выбрать аккаунт
              </Button>
              <Button
                onClick={() =>
                  window.open("https://vk.com/stalin_i_lenin_top", "_blank")
                }
                variant="outline"
                size="lg"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        <section id="accounts" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Каталог аккаунтов
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accounts.map((account, index) => (
                <AccountCard
                  key={index}
                  rank={account.rank}
                  price={account.price}
                  features={account.features}
                  isPopular={account.isPopular}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Почему выбирают нас?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-700 bg-black/30 backdrop-blur-sm hover:border-neon-green transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 border border-neon-green/30 w-fit mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all duration-300">
                  <Icon name="Shield" size={24} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  100% Гарантия
                </h3>
                <p className="text-gray-400">
                  Все аккаунты проверены и имеют полную гарантию качества
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-700 bg-black/30 backdrop-blur-sm hover:border-neon-blue transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 w-fit mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300">
                  <Icon name="Zap" size={24} className="text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Мгновенная выдача
                </h3>
                <p className="text-gray-400">
                  Получите доступ к аккаунту в течение 5 минут после оплаты
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-700 bg-black/30 backdrop-blur-sm hover:border-neon-pink transition-all duration-300 group">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/30 w-fit mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(255,0,128,0.5)] transition-all duration-300">
                  <Icon
                    name="HeadphonesIcon"
                    size={24}
                    className="text-neon-pink"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  24/7 Поддержка
                </h3>
                <p className="text-gray-400">
                  Наша команда готова помочь вам в любое время суток
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-gray-800 bg-black/80 backdrop-blur-md py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
              ShadowShop
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            Премиум аккаунты CS2 с гарантией качества
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              onClick={() =>
                window.open("https://vk.com/stalin_i_lenin_top", "_blank")
              }
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-neon-green transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              ВКонтакте
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © 2025 ShadowShop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
