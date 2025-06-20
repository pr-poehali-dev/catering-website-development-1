import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Корпоративные мероприятия",
    description: "Фуршеты, банкеты и кофе-брейки для вашего бизнеса",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "от 800 ₽/чел",
    icon: "Briefcase",
  },
  {
    title: "Свадьбы и торжества",
    description: "Создаем незабываемые моменты вашего особенного дня",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "от 1200 ₽/чел",
    icon: "Heart",
  },
  {
    title: "Детские праздники",
    description: "Яркие и вкусные угощения для маленьих гостей",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "от 600 ₽/чел",
    icon: "Baby",
  },
  {
    title: "BBQ и пикники",
    description: "Гриль-меню на открытом воздухе для любой компании",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "от 900 ₽/чел",
    icon: "Flame",
  },
  {
    title: "Доставка готовых блюд",
    description: "Свежие блюда прямо к вашему столу в удобное время",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "от 400 ₽/порция",
    icon: "Truck",
  },
  {
    title: "VIP обслуживание",
    description: "Эксклюзивное меню и персональный подход",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "от 2000 ₽/чел",
    icon: "Crown",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр кейтеринговых услуг для любых мероприятий.
            Индивидуальный подход к каждому клиенту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-orange-500"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
