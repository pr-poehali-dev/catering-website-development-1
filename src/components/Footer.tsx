import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="ChefHat" size={32} className="text-orange-500" />
              <span className="text-2xl font-bold">TastyEvents</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Премиальный кейтеринг в Кемерово. Превращаем ваши мероприятия в
              незабываемые гастрономические переживания с 2019 года.
            </p>

            {/* Социальные сети */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-orange-500" />
                <div>
                  <div>+7 (384) 299-99-99</div>
                  <div className="text-sm text-gray-400">Круглосуточно</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-orange-500" />
                <div>info@tastyevents.ru</div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={18}
                  className="text-orange-500 mt-1"
                />
                <div>
                  <div>г. Кемерово, пр. Ленина, 123</div>
                  <div className="text-sm text-gray-400">
                    Офис и кулинарная студия
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="text-orange-500" />
                <div>
                  <div>Пн-Пт: 9:00-20:00</div>
                  <div className="text-sm text-gray-400">
                    Сб-Вс: 10:00-18:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Корпоративные мероприятия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Свадьбы и торжества
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Детские праздники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  BBQ и пикники
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  VIP обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Доставка блюд
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TastyEvents. Все права защищены.
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Оферта
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Icon name="ArrowUp" size={18} className="mr-2" />
              Вернуться наверх
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
