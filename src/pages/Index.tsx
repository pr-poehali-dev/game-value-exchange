import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

interface Seller {
  id: number;
  name: string;
  rating: number;
  sales: number;
  avatar: string;
  verified: boolean;
}

interface GameOffer {
  id: number;
  game: string;
  item: string;
  price: number;
  seller: Seller;
  category: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<GameOffer | null>(null);

  const topSellers: Seller[] = [
    { id: 1, name: 'ProGamer2024', rating: 4.9, sales: 1247, avatar: '', verified: true },
    { id: 2, name: 'TrustySeller', rating: 4.8, sales: 892, avatar: '', verified: true },
    { id: 3, name: 'GameMaster', rating: 4.7, sales: 654, avatar: '', verified: false },
    { id: 4, name: 'FastDeal', rating: 4.9, sales: 1103, avatar: '', verified: true },
  ];

  const gameOffers: GameOffer[] = [
    {
      id: 1,
      game: 'CS2',
      item: 'AWP Dragon Lore FN',
      price: 25000,
      seller: topSellers[0],
      category: 'skins',
    },
    {
      id: 2,
      game: 'Dota 2',
      item: 'Arcana Bundle',
      price: 3500,
      seller: topSellers[1],
      category: 'items',
    },
    {
      id: 3,
      game: 'Valorant',
      item: 'Account Immortal',
      price: 15000,
      seller: topSellers[2],
      category: 'accounts',
    },
    {
      id: 4,
      game: 'PUBG',
      item: 'Battle Pass + 6000 UC',
      price: 1200,
      seller: topSellers[3],
      category: 'currency',
    },
  ];

  const transactions = [
    { id: 1, item: 'M4A4 Howl FN', buyer: 'User123', amount: 18500, status: 'completed', date: '2024-10-05' },
    { id: 2, item: 'Dota 2 Arcana', buyer: 'GamerPro', amount: 3200, status: 'pending', date: '2024-10-06' },
    { id: 3, item: 'Valorant Points', buyer: 'ShooterKing', amount: 2000, status: 'completed', date: '2024-10-07' },
  ];

  const openChat = (offer: GameOffer) => {
    setSelectedOffer(offer);
    setChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold gradient-gaming bg-clip-text text-transparent">
                GAMING MARKETPLACE
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-muted h-14">
            <TabsTrigger value="main" className="text-sm">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="sellers" className="text-sm">
              <Icon name="Trophy" size={16} className="mr-2" />
              Рейтинг
            </TabsTrigger>
            <TabsTrigger value="rules" className="text-sm">
              <Icon name="Shield" size={16} className="mr-2" />
              Правила
            </TabsTrigger>
            <TabsTrigger value="faq" className="text-sm">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="history" className="text-sm">
              <Icon name="History" size={16} className="mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-50"></div>
              <div className="relative z-10 text-center space-y-4 px-6">
                <h2 className="text-5xl font-bold">Безопасная торговля игровыми ценностями</h2>
                <p className="text-xl text-muted-foreground">Покупай и продавай с гарантией</p>
                <div className="flex gap-4 justify-center mt-6">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    <Icon name="Plus" size={20} className="mr-2" />
                    Создать объявление
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Icon name="Search" size={20} className="mr-2" />
                    Искать предложения
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Популярные предложения</h3>
                <div className="flex gap-2">
                  <Input placeholder="Поиск..." className="w-64" />
                  <Button variant="outline" size="icon">
                    <Icon name="Search" size={20} />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gameOffers.map((offer) => (
                  <Card key={offer.id} className="hover-scale bg-card border-border overflow-hidden group">
                    <div className="h-32 bg-gradient-to-br from-primary/30 to-secondary/30 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="Gamepad2" size={48} className="text-white/80" />
                      </div>
                      <Badge className="absolute top-2 right-2 bg-secondary text-white">
                        {offer.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-primary border-primary">
                          {offer.game}
                        </Badge>
                        {offer.seller.verified && (
                          <Icon name="BadgeCheck" size={16} className="text-primary" />
                        )}
                      </div>
                      <CardTitle className="text-lg">{offer.item}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {offer.seller.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{offer.seller.name}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-accent fill-accent" />
                          <span className="text-sm font-semibold">{offer.seller.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {offer.seller.sales} продаж
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-accent">{offer.price} ₽</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                          Купить
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => openChat(offer)}
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <Icon name="MessageCircle" size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sellers" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Топ продавцов</h2>
              <p className="text-muted-foreground">Самые надежные участники площадки</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topSellers.map((seller, index) => (
                <Card key={seller.id} className="bg-card border-border hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="w-20 h-20 border-2 border-primary">
                          <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                            {seller.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                          #{index + 1}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{seller.name}</h3>
                          {seller.verified && (
                            <Icon name="BadgeCheck" size={20} className="text-primary" />
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-accent fill-accent" />
                            <span className="font-semibold">{seller.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Icon name="ShoppingBag" size={16} />
                            <span>{seller.sales} продаж</span>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white">
                            Профиль
                          </Button>
                          <Button size="sm" variant="outline" className="border-primary text-primary">
                            Написать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Shield" size={28} className="text-primary" />
                  Правила площадки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Честная торговля</h4>
                      <p className="text-muted-foreground">
                        Все сделки должны быть прозрачными. Запрещены мошеннические схемы и обман покупателей.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Безопасность аккаунтов</h4>
                      <p className="text-muted-foreground">
                        При продаже аккаунтов необходимо предоставить полный доступ и гарантию отсутствия возврата.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Корректное общение</h4>
                      <p className="text-muted-foreground">
                        Уважайте других участников. Оскорбления и угрозы строго запрещены.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Система отзывов</h4>
                      <p className="text-muted-foreground">
                        После каждой сделки оставляйте честный отзыв. Это помогает другим участникам.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="HelpCircle" size={28} className="text-primary" />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2 text-primary">Как проходит оплата?</h4>
                    <p className="text-sm text-muted-foreground">
                      Мы поддерживаем различные способы оплаты: банковские карты, электронные кошельки, криптовалюту. Средства замораживаются до подтверждения сделки.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2 text-primary">Что делать, если продавец не отвечает?</h4>
                    <p className="text-sm text-muted-foreground">
                      Обратитесь в службу поддержки. Мы решаем спорные ситуации в течение 24 часов.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2 text-primary">Как стать проверенным продавцом?</h4>
                    <p className="text-sm text-muted-foreground">
                      Совершите минимум 50 успешных сделок с рейтингом выше 4.5 и пройдите верификацию личности.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2 text-primary">Какая комиссия площадки?</h4>
                    <p className="text-sm text-muted-foreground">
                      Комиссия составляет 5% от суммы сделки для продавцов. Покупатели не платят комиссию.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="History" size={28} className="text-primary" />
                  История сделок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-muted hover-scale">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name="Package" size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{tx.item}</h4>
                          <p className="text-sm text-muted-foreground">Покупатель: {tx.buyer}</p>
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-accent">{tx.amount} ₽</p>
                        <Badge
                          variant={tx.status === 'completed' ? 'default' : 'secondary'}
                          className={tx.status === 'completed' ? 'bg-primary' : 'bg-secondary'}
                        >
                          {tx.status === 'completed' ? 'Завершена' : 'В процессе'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border md:col-span-1">
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground text-4xl">U</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">User Account</h3>
                  <p className="text-sm text-muted-foreground mb-4">user@example.com</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Редактировать профиль
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border md:col-span-2">
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="ShoppingBag" size={20} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Всего покупок</span>
                      </div>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Package" size={20} className="text-secondary" />
                        <span className="text-sm text-muted-foreground">Всего продаж</span>
                      </div>
                      <p className="text-2xl font-bold">0</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Star" size={20} className="text-accent" />
                        <span className="text-sm text-muted-foreground">Рейтинг</span>
                      </div>
                      <p className="text-2xl font-bold">5.0</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Wallet" size={20} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Баланс</span>
                      </div>
                      <p className="text-2xl font-bold">0 ₽</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" size={20} className="text-primary" />
              Чат с продавцом
            </DialogTitle>
            {selectedOffer && (
              <DialogDescription>
                {selectedOffer.seller.name} • {selectedOffer.item}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-64 rounded-lg bg-muted p-4 overflow-y-auto">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {selectedOffer?.seller.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-background p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Здравствуйте! Интересует этот товар?</p>
                    <span className="text-xs text-muted-foreground">14:23</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Textarea placeholder="Введите сообщение..." className="resize-none" rows={2} />
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="mt-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" size={24} className="text-primary" />
              <span className="font-bold">GAMING MARKETPLACE</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
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
