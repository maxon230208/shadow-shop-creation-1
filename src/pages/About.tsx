import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,128,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)] pointer-events-none"></div>

      <Header />

      <main className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
            О нас
          </h1>

          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-lg p-8 mb-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                ❤️{" "}
                <span className="text-neon-pink font-semibold">
                  Топовый магазин аккаунтов CS2
                </span>
                , у нас низкие цены на товар, быстрая тех поддержка и широкий
                ассортимент! ❤️
              </p>

              <p className="text-gray-300 mb-4">
                Так же публикуются аккаунты на стену, а когда их приобретают -
                они удаляются!
              </p>

              <p className="text-xl text-center mb-6 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent font-semibold">
                Нужен аккаунт поиграть? - Тебе к нам.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Вам больше не нужно искать на разных сайтах где можно купить и
                бояться быть обманутым. У нас всё всегда{" "}
                <span className="text-neon-green font-semibold">
                  честно и качественно
                </span>
                .
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://vk.com/shadowshopcs2?from=groups",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-pink text-black font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] border-0"
                size="lg"
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Посетить наш магазин в ВК
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-700 backdrop-blur-sm hover:border-neon-green transition-all duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 border border-neon-green/30 w-fit mx-auto mb-4">
                <Icon
                  name="ShoppingCart"
                  size={24}
                  className="text-neon-green"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Низкие цены
              </h3>
              <p className="text-gray-400">
                Самые выгодные предложения на рынке аккаунтов CS2
              </p>
            </div>

            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-700 backdrop-blur-sm hover:border-neon-blue transition-all duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 w-fit mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Быстрая поддержка
              </h3>
              <p className="text-gray-400">
                Отвечаем на вопросы в течение нескольких минут
              </p>
            </div>

            <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-700 backdrop-blur-sm hover:border-neon-pink transition-all duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/30 w-fit mx-auto mb-4">
                <Icon name="Package" size={24} className="text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Широкий ассортимент
              </h3>
              <p className="text-gray-400">
                Большой выбор аккаунтов на любой вкус и бюджет
              </p>
            </div>
          </div>
        </div>
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

export default About;
