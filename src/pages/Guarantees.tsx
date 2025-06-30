import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Guarantees = () => {
  const guarantees = [
    "ГАРАНТИИ НА ТОВАР! , И РАБОТОСПОСОБНОСТЬ АККАУНТОВ ТОЛЬКО НА МОМЕНТ ПРОДАЖИ",
    "АККАУНТЫ ВОЗВРАТУ НЕ ПОДЛЕЖАТ!",
    "ПРИОБРЕТАЯ В НАШЕМ МАГАЗИНЕ ВЫ ДОЛЖНЫ ПОНИМАТЬ ЧТО АККАУНТЫ НЕ ЛИЧНЫЕ(ФИШ, БРУТ)!!!",
    "АККАУНТЫ ВЫ ПРИОБРЕТАЕТЕ НА СВОЙ СТРАХ И РИСК!!!! ( С НАШЕЙ СТОРОНЫ ВЫ 100% ПОЛУЧАЕТЕ АККАУНТ В ОДНИ РУКИ!!!)",
    "ДЕНЬГИ ЗА ОПЛАЧЕННЫЕ АККАУНТЫ/АККАУНТЫ НА ЗАКАЗ/РАНДОМ ТОВАРЫ! НЕ ВОЗВРАЩАЮ!",
    "НЕЗНАНИЕ ПРАВИЛ НЕ ОСВОБОЖДАЕТ ОТ ИХ ОТВЕТСТВЕННОСТИ!!!!!!!!!!!!",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,128,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)] pointer-events-none"></div>

      <Header />

      <main className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
            Гарантии
          </h1>

          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-500/50 rounded-lg p-8 mb-8 backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,128,0.2)]">
            <div className="text-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 w-fit mx-auto mb-6">
                <Icon name="AlertTriangle" size={32} className="text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-red-400 mb-4">
                ВАЖНАЯ ИНФОРМАЦИЯ
              </h2>
            </div>

            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-black/30 rounded-lg border border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-neon-pink to-red-500 text-black font-bold rounded-full text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {guarantee}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Info" size={20} className="text-orange-400" />
                <h3 className="text-lg font-semibold text-orange-400">
                  Исключения
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                *бывают исключения когда я даю гарантию на какой либо аккаунт.
                временную или бесконечную
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-red-400 mb-3">
                СОГЛАСИЕ С УСЛОВИЯМИ
              </h3>
              <p className="text-gray-300 font-semibold">
                ПОКУПАЯ/ЗАКАЗЫВАЯ АККАУНТЫ ВЫ АВТОМАТИЧЕСКИ СОГЛАШАЕТЕСЬ С ВЫШЕ
                ПЕРЕЧИСЛЕННЫМ!
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
          <p className="text-xs text-gray-500 mt-4">
            © 2025 ShadowShop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Guarantees;
