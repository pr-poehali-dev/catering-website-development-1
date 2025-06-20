import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="ChefHat" size={32} className="text-orange-500" />
          <span className="text-2xl font-bold text-gray-900">TastyEvents</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#menu"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Меню
          </a>
          <a
            href="#portfolio"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Портфолио
          </a>
          <a
            href="#reviews"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#contacts"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Phone" size={16} />
            <span>+7 (384) 299-99-99</span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
