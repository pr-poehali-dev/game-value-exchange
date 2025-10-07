import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Offer {
  id: number;
  game: string;
  gameIcon: string;
  seller: string;
  sellerRating: number;
  sellerOrders: number;
  description: string;
  price: number;
  delivery: string;
  online: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const popularGames = [
    { name: 'Dota 2', icon: 'Gamepad2', offers: 2847 },
    { name: 'CS2', icon: 'Target', offers: 1923 },
    { name: 'Valorant', icon: 'Crosshair', offers: 1456 },
    { name: 'Genshin Impact', icon: 'Sparkles', offers: 1234 },
    { name: 'Fortnite', icon: 'Trophy', offers: 987 },
    { name: 'Minecraft', icon: 'Box', offers: 876 },
    { name: 'Roblox', icon: 'Blocks', offers: 765 },
    { name: 'PUBG', icon: 'Crosshair', offers: 654 },
  ];

  const offers: Offer[] = [
    {
      id: 1,
      game: 'Dota 2',
      gameIcon: 'Gamepad2',
      seller: 'ProGamer2024',
      sellerRating: 99,
      sellerOrders: 1247,
      description: 'Золото на любом сервере. Быстро и безопасно. Минимум 100 золота.',
      price: 50,
      delivery: '5-15 мин',
      online: true,
    },
    {
      id: 2,
      game: 'CS2',
      gameIcon: 'Target',
      seller: 'TrustySeller',
      sellerRating: 98,
      sellerOrders: 892,
      description: 'Прокачка рейтинга | От Silver до Global Elite | Гарантия безопасности',
      price: 1500,
      delivery: '1-3 дня',
      online: false,
    },
    {
      id: 3,
      game: 'Valorant',
      gameIcon: 'Crosshair',
      seller: 'GameMaster',
      sellerRating: 97,
      sellerOrders: 654,
      description: 'Valorant Points | Любой регион | Моментальная доставка после оплаты',
      price: 800,
      delivery: 'мгновенно',
      online: true,
    },
    {
      id: 4,
      game: 'Genshin Impact',
      gameIcon: 'Sparkles',
      seller: 'FastDeal',
      sellerRating: 99,
      sellerOrders: 1103,
      description: 'Кристаллы Genesis | Все сервера | Первая покупка = бонус',
      price: 600,
      delivery: '10-30 мин',
      online: true,
    },
    {
      id: 5,
      game: 'Fortnite',
      gameIcon: 'Trophy',
      seller: 'EliteTrader',
      sellerRating: 96,
      sellerOrders: 432,
      description: 'V-Bucks | Безопасная передача | Работаю с 2019 года',
      price: 450,
      delivery: '15-45 мин',
      online: false,
    },
    {
      id: 6,
      game: 'Minecraft',
      gameIcon: 'Box',
      seller: 'CraftPro',
      sellerRating: 98,
      sellerOrders: 789,
      description: 'Minecraft Java Premium | Полный доступ | Гарантия навсегда',
      price: 350,
      delivery: '1-5 мин',
      online: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gradient">EasyGame</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Button variant="ghost" className="text-sm font-medium">
                  Категории
                </Button>
                <Button variant="ghost" className="text-sm font-medium">
                  Продавцам
                </Button>
                <Button variant="ghost" className="text-sm font-medium">
                  Помощь
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Покупай и продавай игровые ценности
            </h2>
            <p className="text-lg text-muted-foreground">
              Безопасная торговля валютой, предметами, аккаунтами и услугами для геймеров
            </p>
            <div className="flex gap-3 max-w-2xl mx-auto">
              <Input
                placeholder="Поиск игры или товара..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Популярные игры</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularGames.map((game) => (
              <Card
                key={game.name}
                className="hover-scale cursor-pointer border-border bg-card"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={game.icon as any} size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{game.name}</h4>
                  <p className="text-xs text-muted-foreground">{game.offers} предл.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h3 className="text-2xl font-bold">Актуальные предложения</h3>
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="currency">Валюта</SelectItem>
                  <SelectItem value="accounts">Аккаунты</SelectItem>
                  <SelectItem value="items">Предметы</SelectItem>
                  <SelectItem value="boosting">Буст</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="price-asc">Цена: по возр.</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыв.</SelectItem>
                  <SelectItem value="rating">Рейтинг</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {offers.map((offer) => (
              <Card key={offer.id} className="hover-scale border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={offer.gameIcon as any} size={32} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {offer.game}
                            </Badge>
                            {offer.online && (
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs text-green-600 font-medium">Онлайн</span>
                              </div>
                            )}
                          </div>
                          <p className="text-base font-normal text-foreground mb-3">
                            {offer.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                  {offer.seller.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{offer.seller}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Icon name="ThumbsUp" size={14} />
                              <span>{offer.sellerRating}%</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Icon name="ShoppingBag" size={14} />
                              <span>{offer.sellerOrders}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Icon name="Clock" size={14} />
                              <span>{offer.delivery}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 md:min-w-[160px]">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{offer.price} ₽</div>
                        <div className="text-xs text-muted-foreground">за 1 шт.</div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto px-8">
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">
              Показать еще
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </div>

      <section className="bg-secondary py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold">Безопасность сделок</h4>
              <p className="text-muted-foreground">
                Защита покупателя и продавца на каждом этапе
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold">Быстрая доставка</h4>
              <p className="text-muted-foreground">
                Большинство заказов выполняются в течение 15 минут
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold">Проверенные продавцы</h4>
              <p className="text-muted-foreground">
                Система рейтингов и отзывов для вашей уверенности
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h1 className="text-xl font-bold text-gradient">EasyGame</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Маркетплейс для геймеров. Покупай и продавай игровые ценности безопасно.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Покупателям</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Как купить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Правила сервиса
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продавцам</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Как продать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Комиссии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Вывод средств
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Центр помощи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Связаться с нами
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 EasyGame. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
