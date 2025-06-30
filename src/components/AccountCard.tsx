import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface AccountCardProps {
  rank: string;
  level: number;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export default function AccountCard({
  rank,
  level,
  price,
  features,
  isPopular,
}: AccountCardProps) {
  const handleBuyClick = () => {
    window.open("https://vk.me/shadowshop_cs2", "_blank");
  };

  return (
    <Card
      className={`relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/80 border transition-all duration-500 hover:scale-[1.02] group ${
        isPopular
          ? "border-neon-pink shadow-[0_0_30px_rgba(255,0,128,0.3)] hover:shadow-[0_0_50px_rgba(255,0,128,0.6)]"
          : "border-gray-700 hover:border-neon-green hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 -right-3 z-10">
          <Badge className="bg-gradient-to-r from-neon-pink to-neon-purple text-black font-bold px-3 py-1 animate-pulse">
            ТОП
          </Badge>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-neon-green/20 to-neon-blue/20 border border-neon-green/30">
              <Icon name="Trophy" size={20} className="text-neon-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{rank}</h3>
              <p className="text-gray-400 text-sm">Уровень {level}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              {price.toLocaleString()}₽
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-300"
            >
              <Icon
                name="Check"
                size={14}
                className="text-neon-green flex-shrink-0"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={handleBuyClick}
          className="w-full bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-pink text-black font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] border-0 group"
        >
          <Icon name="MessageCircle" size={16} className="mr-2" />
          Купить в ВК
          <Icon
            name="ExternalLink"
            size={14}
            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </Button>
      </div>
    </Card>
  );
}
