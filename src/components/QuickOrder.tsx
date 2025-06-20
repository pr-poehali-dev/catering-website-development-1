import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const QuickOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    guestCount: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Форматирование данных для отправки
    const messageText = `
🎉 Новая заявка на кейтеринг!

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
🎊 Тип мероприятия: ${getEventTypeLabel(formData.eventType)}
👥 Количество гостей: ${formData.guestCount}
📅 Дата: ${formData.date}
💬 Пожелания: ${formData.message || "Не указаны"}

Получатель: @THREATSweden
    `.trim();

    console.log("Данные для отправки в Telegram:", messageText);
    alert(
      "Заявка подготовлена! Интеграция с Telegram будет доступна в ближайшее время.",
    );
  };

  const getEventTypeLabel = (value: string) => {
    const types: Record<string, string> = {
      corporate: "Корпоратив",
      wedding: "Свадьба",
      birthday: "День рождения",
      children: "Детский праздник",
      bbq: "BBQ/Пикник",
      other: "Другое",
    };
    return types[value] || value;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Быстрый заказ
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и получите персональное коммерческое предложение в
              течение 30 минут
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Calendar" size={24} className="text-orange-500" />
                  <span>Форма заказа</span>
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для уточнения деталей
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="eventType">Тип мероприятия</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, eventType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип мероприятия" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Корпоратив</SelectItem>
                        <SelectItem value="wedding">Свадьба</SelectItem>
                        <SelectItem value="birthday">День рождения</SelectItem>
                        <SelectItem value="children">
                          Детский праздник
                        </SelectItem>
                        <SelectItem value="bbq">BBQ/Пикник</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guestCount">Количество гостей</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestCount: e.target.value,
                          })
                        }
                        placeholder="10"
                        min="1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="date">Дата мероприятия</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Дополнительные пожелания</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Расскажите о ваших пожеланиях к меню, оформлению или особенностях мероприятия"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700 flex items-center space-x-2">
                    <Icon name="Clock" size={24} />
                    <span>Быстрый ответ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-600">
                    Мы свяжемся с вами в течение 30 минут и предоставим
                    персональное коммерческое предложение
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center space-x-2">
                    <Icon name="Shield" size={24} />
                    <span>Гарантии качества</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-blue-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} />
                      <span>Свежие продукты от проверенных поставщиков</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} />
                      <span>Соблюдение всех санитарных норм</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} />
                      <span>Профессиональная команда поваров</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center space-x-2">
                    <Icon name="Phone" size={24} />
                    <span>Срочный заказ?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600 mb-3">
                    Звоните прямо сейчас для срочных заказов:
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Icon name="Phone" size={18} className="mr-2" />
                    +7 (384) 299-99-99
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOrder;
