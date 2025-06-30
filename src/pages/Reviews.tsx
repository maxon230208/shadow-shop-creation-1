import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,128,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)] pointer-events-none"></div>

      <Header />

      <main className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
            Отзывы
          </h1>

          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-lg p-8 mb-8 backdrop-blur-sm text-center">
            <div className="mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 border border-neon-green/30 w-fit mx-auto mb-6">
                <Icon
                  name="MessageSquare"
                  size={32}
                  className="text-neon-green"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Отзывы наших клиентов
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Посмотрите, что говорят о нас довольные покупатели аккаунтов CS2
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="p-6 bg-black/30 rounded-lg border border-gray-600 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                </div>
                <p className="text-gray-300 text-lg">
                  Читайте реальные отзывы от наших клиентов в нашей официальной
                  группе ВКонтакте
                </p>
              </div>
            </div>

            <Button
              onClick={() =>
                window.open("https://vk.com/topic-230417842_53981656", "_blank")
              }
              className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-pink text-black font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] border-0"
              size="lg"
            >
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Читать отзывы в ВК
            </Button>

            <div className="mt-8 p-6 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 border border-neon-green/30 rounded-lg">
              <h3 className="text-xl font-semibold text-neon-green mb-3">
                Почему нам доверяют?
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <Icon
                    name="Shield"
                    size={24}
                    className="text-neon-green mx-auto mb-2"
                  />
                  <p className="text-gray-300">Честные продажи</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-neon-blue mx-auto mb-2"
                  />
                  <p className="text-gray-300">Быстрая выдача</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Heart"
                    size={24}
                    className="text-neon-pink mx-auto mb-2"
                  />
                  <p className="text-gray-300">Довольные клиенты</p>
                </div>
              </div>
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
          <p className="text-xs text-gray-500 mt-4">
            © 2025 ShadowShop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
