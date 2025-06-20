import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна Петрова",
    role: "Организатор мероприятий",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Великолепный сервис! Организовывали корпоратив на 150 человек. Все прошло на высшем уровне - от подачи блюд до обслуживания. Гости были в восторге от меню и презентации. Обязательно обратимся снова!",
  },
  {
    name: "Михаил Сидоров",
    role: "Жених",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Наша свадьба стала незабываемой благодаря TastyEvents! Каждое блюдо было произведением искусства. Профессиональная команда, внимание к деталям и невероятно вкусная еда. Спасибо за лучший день в нашей жизни!",
  },
  {
    name: "Елена Козлова",
    role: "Мама именинника",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Детский праздник прошел идеально! Дети были в восторге от красивого оформления блюд и вкусных угощений. Команда учла все пожелания и даже больше. Рекомендую всем родителям!",
  },
  {
    name: "Дмитрий Волков",
    role: "Директор компании",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Уже третий год подряд заказываем кейтеринг для новогодних корпоративов. Всегда свежие продукты, разнообразное меню и безупречное обслуживание. Коллеги каждый раз спрашивают, кто готовил такую вкуснятину!",
  },
  {
    name: "Ирина Морозова",
    role: "Event-менеджер",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Сотрудничаем с TastyEvents уже более года. Они никогда не подводят - всегда вовремя, всегда качественно, всегда с душой. Особенно ценим их гибкость и готовность подстроиться под любые требования клиентов.",
  },
  {
    name: "Сергей Новиков",
    role: "Частный клиент",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Заказывали BBQ для дачи на день рождения. Приехали вовремя, все организовали, мангал привезли свой. Мясо было просто потрясающее! Гости до сих пор вспоминают. Однозначно наши фавориты!",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 500 успешно проведенных мероприятий. Читайте, что говорят о
            нас наши клиенты.
          </p>

          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4.9</div>
              <div className="flex justify-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Средний рейтинг</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">500+</div>
              <div className="text-sm text-gray-600 mt-1">
                Довольных клиентов
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">98%</div>
              <div className="text-sm text-gray-600 mt-1">
                Повторных заказов
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">{review.role}</p>

                    <div className="flex space-x-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className="fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Поделитесь своим опытом с нами!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Icon name="MapPin" size={18} />
              <span>Оставить отзыв на Яндекс.Картах</span>
            </a>
            <a
              href="https://2gis.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Icon name="Navigation" size={18} />
              <span>Отзыв в 2ГИС</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
