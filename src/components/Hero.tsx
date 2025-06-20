import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-black/60 to-black/40">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Кейтеринг для
          <span className="text-orange-400 block">ваших событий</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Превращаем любое мероприятие в незабываемый гастрономический опыт. От
          интимных ужинов до масштабных корпоративов.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Заказать кейтеринг
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-black border-white hover:bg-white hover:text-black text-lg px-8 py-4"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Посмотреть портфолио
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Icon name="Users" size={24} className="text-orange-400" />
            <span className="text-lg">От 10 до 1000+ гостей</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Icon name="Clock" size={24} className="text-orange-400" />
            <span className="text-lg">Работаем 24/7</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Icon name="Award" size={24} className="text-orange-400" />
            <span className="text-lg">5+ лет опыта</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
