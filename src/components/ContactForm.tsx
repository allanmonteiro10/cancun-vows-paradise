import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 paradise-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Vamos planejar seu
            <span className="block text-primary font-normal">Grande Dia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e transforme seu sonho de casamento no Caribe em realidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="luxury-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-center">Solicite seu Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome *</Label>
                  <Input id="firstName" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome *</Label>
                  <Input id="lastName" placeholder="Seu sobrenome" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weddingDate">Data Desejada</Label>
                  <Input id="weddingDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Número de Convidados</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-20">10 a 20 pessoas</SelectItem>
                      <SelectItem value="20-50">20 a 50 pessoas</SelectItem>
                      <SelectItem value="50-100">50 a 100 pessoas</SelectItem>
                      <SelectItem value="100+">Mais de 100 pessoas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="package">Pacote de Interesse</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um pacote" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="intimista">Intimista</SelectItem>
                    <SelectItem value="classico">Clássico</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="personalizado">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos mais sobre seu casamento dos sonhos..."
                  rows={4}
                />
              </div>
              
              <Button variant="paradise" className="w-full" size="lg">
                Enviar Solicitação
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="gentle-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                    <p className="text-muted-foreground">WhatsApp disponível 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gentle-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">contato@cancunvows.com</p>
                    <p className="text-muted-foreground">Resposta em até 2 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gentle-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Escritório</h3>
                    <p className="text-muted-foreground">São Paulo - Brasil</p>
                    <p className="text-muted-foreground">Cancun - México</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gentle-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Horário</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-muted-foreground">Emergência 24h via WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;