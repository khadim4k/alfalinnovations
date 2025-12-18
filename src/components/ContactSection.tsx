import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { getWhatsAppLink, PHONE_NUMBER, buildWhatsAppMessage, getGreeting } from "./WhatsAppButton";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email");
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (contactMethod === "whatsapp") {
      const whatsappMessage = buildWhatsAppMessage(formData);
      const whatsappUrl = getWhatsAppLink(whatsappMessage);
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Redirection vers WhatsApp",
        description: "Votre message est prêt à être envoyé.",
      });
    } else { // email
      const domainLabels: Record<string, string> = {
        "export-import": "Export & Import",
        "agriculture": "Agriculture",
        "water-treatment": "Traitement d'eau",
        "other": "Autre",
      };
      const greeting = getGreeting();
      const subject = `Demande de devis via le site : ${domainLabels[formData.domain] || 'Non spécifié'}`;
      const body = `${greeting},\n\nJe suis ${formData.name}.\n\n${formData.message}`;
      const mailtoLink = `mailto:alfalinnovationsn@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      toast({
        title: "Ouverture de votre client de messagerie",
        description: "Votre message est prêt à être envoyé.",
      });
    }

    setFormData({ name: "", domain: "", message: "" });
    setIsSubmitting(false);
  };

  const formatPhoneDisplay = (phone: string) => {
    return `+${phone.slice(0, 3)} ${phone.slice(3, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 10)} ${phone.slice(10)}`;
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Demandez un Devis
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir une proposition personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Nos Coordonnées
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Thiès, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <a
                        href="tel:+221764410598"
                        className="hover:text-primary transition-colors"
                      >+221 76 441 05 98</a>
                      <a
                        href="tel:+221339119579"
                        className="hover:text-primary transition-colors"
                      >+221 33 911 95 79</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#25D366] transition-colors"
                    >
                      {formatPhoneDisplay(PHONE_NUMBER)}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:alfalinnovationsn@outlook.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      alfalinnovationsn@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
            >
              {/* Contact Method Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Comment souhaitez-vous être contacté ?
                </label>
                <RadioGroup
                  value={contactMethod}
                  onValueChange={(value) => setContactMethod(value as "email" | "whatsapp")}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-method" />
                    <Label 
                      htmlFor="email-method" 
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      Par Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp-method" />
                    <Label 
                      htmlFor="whatsapp-method"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      Par WhatsApp
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Prénom et Nom *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Votre prénom et nom"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="domain"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Domaine d'activité *
                  </label>
                  <Select
                    value={formData.domain}
                    onValueChange={(value) =>
                      setFormData({ ...formData, domain: value })
                    }
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Sélectionnez un domaine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="export-import">Export & Import</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="water-treatment">Traitement d'eau</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={`w-full sm:w-auto ${
                  contactMethod === "whatsapp" 
                    ? "bg-[#25D366] hover:bg-[#128C7E] hover:shadow-none" 
                    : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : contactMethod === "whatsapp" ? (
                  <>
                    Envoyer via WhatsApp
                    <MessageCircle className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Envoyer
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
