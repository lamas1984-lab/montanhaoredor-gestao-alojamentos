export type Lang = "pt" | "en" | "de" | "nl";

type ServiceItem = { title: string; text: string; note: string };
type Step = { number: string; title: string; text: string };
type Plan = { type: string; title: string; text: string; includes: string[]; price: string };

type SiteCopy = {
  status: string;
  menu: string;
  close: string;
  nav: { services: string; area: string; operation: string; value: string; plans: string; contact: string };
  links: { casa: string; transfers: string };
  hero: { eyebrow: string; title: string; italic: string; description: string; primary: string; secondary: string; photoAlt: string };
  proof: Array<{ value: string; label: string }>;
  intro: { label: string; title: string; text: string; quote: string };
  coverage: { label: string; title: string; text: string; region: string; places: string[]; exceptionTitle: string; exceptionText: string };
  services: { label: string; title: string; intro: string; items: ServiceItem[] };
  operation: { label: string; title: string; text: string; imageAlt: string; steps: Step[] };
  preparation: { label: string; title: string; text: string; imageAlt: string; points: string[] };
  value: { label: string; title: string; text: string; imageAlt: string; points: string[] };
  plans: { label: string; title: string; intro: string; cards: Plan[]; noteTitle: string; noteText: string };
  contact: { label: string; title: string; text: string; whatsapp: string; email: string; note: string };
  footer: { descriptor: string; note: string };
};

export const flags: Record<Lang, string> = { pt: "PT", en: "EN", de: "DE", nl: "NL" };

export const copy: Record<Lang, SiteCopy> = {
  pt: {
    status: "Região Centro · apoio local e propostas à medida",
    menu: "Abrir menu",
    close: "Fechar menu",
    nav: { services: "Serviços", area: "Área de atuação", operation: "Operação", value: "Valorização", plans: "Formas de apoio", contact: "Contacto" },
    links: { casa: "Casa do Lagar", transfers: "Transfers & Tours" },
    hero: {
      eyebrow: "Gestão de alojamentos locais",
      title: "A sua casa,",
      italic: "cuidada como se fosse nossa.",
      description: "Da receção dos hóspedes à preparação, limpeza e valorização do espaço: um apoio próximo, flexível e pensado à medida da sua propriedade.",
      primary: "Conhecer o apoio",
      secondary: "Falar sobre a sua casa",
      photoAlt: "Preparação cuidada de um alojamento rural português",
    },
    proof: [
      { value: "flexível", label: "um serviço ou gestão alargada" },
      { value: "local", label: "presença de proximidade" },
      { value: "cuidado", label: "antes, durante e depois" },
      { value: "à medida", label: "sem pacotes rígidos" },
    ],
    intro: {
      label: "Uma presença de confiança",
      title: "Gerir bem começa por conhecer a casa.",
      text: "Cada alojamento tem uma história, um ritmo e necessidades próprias. Começamos por ouvir o proprietário, visitar o espaço e perceber onde a nossa presença acrescenta valor — sem transformar um serviço próximo numa operação impessoal.",
      quote: "Libertar o tempo do proprietário sem retirar personalidade à casa.",
    },
    coverage: {
      label: "Área de atuação",
      title: "Perto da sua casa, onde a presença conta.",
      text: "A nossa intervenção concentra-se na Região Centro de Portugal, onde conseguimos assegurar proximidade, resposta e um conhecimento prático do território.",
      region: "Região Centro · prioridade local",
      places: ["Leiria e praias", "Figueira da Foz", "Mira de Aire", "Fátima", "Óbidos", "Caldas da Rainha"],
      exceptionTitle: "Outras zonas",
      exceptionText: "Áreas mais abrangentes ou fora destas localidades podem ser consideradas excecionalmente, após análise da viabilidade operacional, orçamento específico e aceitação prévia.",
    },
    services: {
      label: "O nosso apoio",
      title: "Da chave ao próximo passo.",
      intro: "Pode escolher apenas a tarefa que precisa ou combinar vários serviços num acompanhamento continuado.",
      items: [
        { title: "Receção de hóspedes", text: "Check-in e check-out presenciais, entrega de chaves, apresentação da casa e um primeiro contacto atento.", note: "Acolhimento · orientação" },
        { title: "Limpeza & lavandaria", text: "Preparação entre estadias, roupa de cama e banho, limpeza cuidada e controlo final do espaço.", note: "Turnover · verificação" },
        { title: "Consumíveis & controlo", text: "Reposição do essencial, inspeção visual da casa e coordenação de pequenas necessidades no terreno.", note: "Reposição · acompanhamento" },
        { title: "Apoio ao hóspede", text: "Resposta a dúvidas práticas e apoio na articulação de necessidades que surjam durante a estadia.", note: "Presença · tranquilidade" },
        { title: "Espaço & identidade", text: "Sugestões de decoração, preparação fotográfica e melhorias práticas para receber melhor.", note: "Imagem · funcionalidade" },
        { title: "Potencial & crescimento", text: "Leitura do posicionamento, organização de preços e apoio em decisões de valorização do alojamento.", note: "Estratégia · evolução" },
      ],
    },
    operation: {
      label: "Operação no terreno",
      title: "Uma chegada tranquila começa muito antes da porta abrir.",
      text: "Coordenamos cada momento essencial para que a casa esteja pronta, o hóspede seja bem recebido e o proprietário saiba o que aconteceu.",
      imageAlt: "Anfitrião a receber hóspedes junto a uma casa rural portuguesa",
      steps: [
        { number: "01", title: "Antes da chegada", text: "Confirmamos a preparação, os consumíveis e as indicações essenciais para o acolhimento." },
        { number: "02", title: "Durante a estadia", text: "Mantemos uma presença discreta para questões práticas e necessidades combinadas." },
        { number: "03", title: "Depois da saída", text: "Verificamos a casa, articulamos a preparação seguinte e partilhamos informação relevante." },
      ],
    },
    preparation: {
      label: "Preparação entre estadias",
      title: "O cuidado vê-se nos detalhes.",
      text: "Uma casa limpa não chega: procuramos consistência, boa apresentação e a sensação de que tudo foi preparado para aquele hóspede.",
      imageAlt: "Preparação de cama e roupa num alojamento rural",
      points: ["Roupa de cama e banho", "Limpeza e controlo final", "Reposição de consumíveis", "Preparação visual", "Comunicação de ocorrências", "Coordenação de pequenas intervenções"],
    },
    value: {
      label: "Valorização",
      title: "Melhorar o espaço sem perder a sua identidade.",
      text: "Analisamos o alojamento com olhos de hóspede e de proprietário. Procuramos melhorias realistas na decoração, funcionalidade, apresentação, preços e experiência — sempre de acordo com o investimento disponível.",
      imageAlt: "Proprietário e consultor a estudar melhorias para um alojamento",
      points: ["Leitura visual do espaço", "Sugestões de decoração", "Preparação para fotografia", "Organização de preços", "Previsão de potencial", "Prioridades de investimento"],
    },
    plans: {
      label: "Formas de apoio",
      title: "Nem todas as casas precisam do mesmo.",
      intro: "A proposta é construída depois de conhecermos a propriedade, a localização, a frequência das estadias e o nível de acompanhamento desejado.",
      cards: [
        { type: "Quando precisa", title: "Apoio pontual", text: "Para proprietários que gerem diretamente, mas precisam de uma presença local em momentos específicos.", includes: ["Check-in ou check-out", "Reposição de consumíveis", "Verificação do espaço"], price: "Proposta à medida" },
        { type: "Entre estadias", title: "Operação cuidada", text: "Para assegurar que cada saída e chegada é preparada com consistência e atenção.", includes: ["Limpeza e lavandaria", "Preparação da casa", "Acolhimento do hóspede"], price: "Proposta à medida" },
        { type: "Acompanhamento", title: "Gestão & crescimento", text: "Para quem procura combinar operação, melhoria da experiência e decisões de valorização.", includes: ["Coordenação continuada", "Imagem e melhoria", "Preços e potencial"], price: "Proposta à medida" },
      ],
      noteTitle: "Primeiro conhecemos a casa.",
      noteText: "Não apresentamos uma fórmula genérica sem compreender o espaço. A distância, a dimensão, o número de estadias e os serviços escolhidos determinam uma proposta transparente.",
    },
    contact: {
      label: "Primeira conversa",
      title: "Conte-nos como funciona a sua casa.",
      text: "Partilhe a localização, dimensão, situação atual e aquilo que gostaria de delegar. Respondemos com uma primeira orientação e, quando fizer sentido, marcamos uma visita ao espaço.",
      whatsapp: "Falar por WhatsApp",
      email: "Enviar email",
      note: "Sem compromisso · proposta após conhecer o alojamento",
    },
    footer: { descriptor: "Gestão de Alojamentos", note: "Proximidade, cuidado e visão prática." },
  },
  en: {
    status: "Central Portugal · local support and tailored proposals",
    menu: "Open menu",
    close: "Close menu",
    nav: { services: "Services", area: "Service area", operation: "Operations", value: "Improvement", plans: "Support options", contact: "Contact" },
    links: { casa: "Casa do Lagar", transfers: "Transfers & Tours" },
    hero: {
      eyebrow: "Local accommodation management",
      title: "Your home,",
      italic: "cared for as if it were ours.",
      description: "From guest reception to preparation, cleaning and improvement: close, flexible support shaped around your property.",
      primary: "Explore our support",
      secondary: "Talk about your home",
      photoAlt: "Thoughtful preparation of a Portuguese rural guesthouse",
    },
    proof: [
      { value: "flexible", label: "one service or broader support" },
      { value: "local", label: "a nearby presence" },
      { value: "attentive", label: "before, during and after" },
      { value: "tailored", label: "no rigid packages" },
    ],
    intro: {
      label: "A trusted local presence",
      title: "Good management starts by knowing the home.",
      text: "Every accommodation has its own story, rhythm and needs. We begin by listening to the owner, visiting the space and understanding where our presence adds value — without turning personal service into an impersonal operation.",
      quote: "Giving the owner time back without taking personality away from the home.",
    },
    coverage: {
      label: "Service area",
      title: "Close to your property, where presence matters.",
      text: "Our work is focused on Portugal's Central Region, where we can provide genuine proximity, reliable response and practical knowledge of the territory.",
      region: "Central Portugal · local priority",
      places: ["Leiria and its beaches", "Figueira da Foz", "Mira de Aire", "Fátima", "Óbidos", "Caldas da Rainha"],
      exceptionTitle: "Other areas",
      exceptionText: "A wider coverage area or locations outside these places may be considered exceptionally, following an operational feasibility review, a specific quotation and prior acceptance.",
    },
    services: {
      label: "Our support",
      title: "From the key to the next step.",
      intro: "Choose only the task you need or combine several services into ongoing support.",
      items: [
        { title: "Guest reception", text: "In-person check-in and check-out, key handover, house introduction and an attentive first contact.", note: "Welcome · guidance" },
        { title: "Cleaning & laundry", text: "Turnover preparation, bed and bath linen, thoughtful cleaning and a final check of the space.", note: "Turnover · inspection" },
        { title: "Supplies & checks", text: "Restocking essentials, visual property checks and coordination of small on-site needs.", note: "Restocking · follow-up" },
        { title: "Guest support", text: "Answers to practical questions and help coordinating agreed needs during the stay.", note: "Presence · reassurance" },
        { title: "Space & identity", text: "Decor guidance, photographic preparation and practical improvements to welcome guests better.", note: "Image · function" },
        { title: "Potential & growth", text: "Positioning review, price organisation and support for decisions that strengthen the property.", note: "Strategy · progress" },
      ],
    },
    operation: {
      label: "On-site operation",
      title: "A calm arrival begins long before the door opens.",
      text: "We coordinate each essential moment so the home is ready, the guest feels welcomed and the owner knows what happened.",
      imageAlt: "Host welcoming guests at a Portuguese rural house",
      steps: [
        { number: "01", title: "Before arrival", text: "We confirm preparation, essentials and the information needed for a smooth welcome." },
        { number: "02", title: "During the stay", text: "We maintain a discreet presence for practical questions and agreed needs." },
        { number: "03", title: "After departure", text: "We check the home, coordinate the next preparation and share relevant information." },
      ],
    },
    preparation: {
      label: "Between stays",
      title: "Care is visible in the details.",
      text: "A clean home is only the beginning: we seek consistency, presentation and the feeling that everything was prepared for that guest.",
      imageAlt: "Preparing bedding and linen in a rural guesthouse",
      points: ["Bed and bath linen", "Cleaning and final checks", "Essential restocking", "Visual preparation", "Incident communication", "Small intervention coordination"],
    },
    value: {
      label: "Property improvement",
      title: "Improve the space without losing its identity.",
      text: "We look at the accommodation through both guest and owner eyes. We identify realistic improvements in decor, function, presentation, pricing and experience, always respecting the available investment.",
      imageAlt: "Owner and advisor reviewing improvements for a guesthouse",
      points: ["Visual space review", "Decor suggestions", "Photo preparation", "Price organisation", "Potential forecast", "Investment priorities"],
    },
    plans: {
      label: "Ways we can help",
      title: "Not every home needs the same thing.",
      intro: "We shape the proposal after understanding the property, location, booking frequency and desired level of support.",
      cards: [
        { type: "When needed", title: "Occasional support", text: "For owners who manage directly but need a reliable local presence at specific moments.", includes: ["Check-in or check-out", "Essential restocking", "Property check"], price: "Tailored proposal" },
        { type: "Between stays", title: "Thoughtful operations", text: "To ensure every departure and arrival is handled with consistency and care.", includes: ["Cleaning and laundry", "Home preparation", "Guest welcome"], price: "Tailored proposal" },
        { type: "Ongoing", title: "Management & growth", text: "For owners combining operations, guest experience improvements and value decisions.", includes: ["Ongoing coordination", "Image and improvement", "Pricing and potential"], price: "Tailored proposal" },
      ],
      noteTitle: "First, we get to know the home.",
      noteText: "We do not offer a generic formula without understanding the space. Distance, size, stay frequency and selected services shape a transparent proposal.",
    },
    contact: {
      label: "First conversation",
      title: "Tell us how your home works.",
      text: "Share the location, size, current situation and what you would like to delegate. We reply with initial guidance and, when appropriate, arrange a visit.",
      whatsapp: "Talk on WhatsApp",
      email: "Send an email",
      note: "No commitment · proposal after learning about the property",
    },
    footer: { descriptor: "Accommodation Management", note: "Proximity, care and practical vision." },
  },
  de: {
    status: "Zentralportugal · lokale Betreuung und individuelle Angebote",
    menu: "Menü öffnen",
    close: "Menü schließen",
    nav: { services: "Leistungen", area: "Einsatzgebiet", operation: "Betrieb", value: "Aufwertung", plans: "Betreuungsmodelle", contact: "Kontakt" },
    links: { casa: "Casa do Lagar", transfers: "Transfers & Tours" },
    hero: {
      eyebrow: "Betreuung von Ferienunterkünften",
      title: "Ihr Haus,",
      italic: "betreut wie unser eigenes.",
      description: "Vom Gästeempfang über Vorbereitung und Reinigung bis zur Aufwertung: persönliche, flexible Betreuung passend zu Ihrer Unterkunft.",
      primary: "Betreuung entdecken",
      secondary: "Über Ihr Haus sprechen",
      photoAlt: "Sorgfältige Vorbereitung einer portugiesischen Ferienunterkunft",
    },
    proof: [
      { value: "flexibel", label: "ein Dienst oder breite Betreuung" },
      { value: "lokal", label: "eine nahe Ansprechperson" },
      { value: "sorgfältig", label: "davor, währenddessen und danach" },
      { value: "passend", label: "keine starren Pakete" },
    ],
    intro: {
      label: "Eine vertraute Präsenz vor Ort",
      title: "Gute Betreuung beginnt damit, das Haus zu kennen.",
      text: "Jede Unterkunft hat ihre eigene Geschichte, ihren Rhythmus und ihre Bedürfnisse. Wir hören dem Eigentümer zu, besichtigen den Ort und verstehen, wo unsere Präsenz Mehrwert schafft — ohne persönlichen Service in einen unpersönlichen Betrieb zu verwandeln.",
      quote: "Dem Eigentümer Zeit zurückgeben, ohne dem Haus seine Persönlichkeit zu nehmen.",
    },
    coverage: {
      label: "Einsatzgebiet",
      title: "In der Nähe Ihrer Unterkunft, wo Präsenz zählt.",
      text: "Unser Schwerpunkt liegt in der Zentralregion Portugals. Dort können wir echte Nähe, verlässliche Reaktion und praktische Kenntnis der Region gewährleisten.",
      region: "Zentralportugal · lokale Priorität",
      places: ["Leiria und Strände", "Figueira da Foz", "Mira de Aire", "Fátima", "Óbidos", "Caldas da Rainha"],
      exceptionTitle: "Weitere Gebiete",
      exceptionText: "Ein größerer Aktionsradius oder Orte außerhalb dieser Gebiete können ausnahmsweise berücksichtigt werden — nach Prüfung der operativen Machbarkeit, individuellem Angebot und vorheriger Zustimmung.",
    },
    services: {
      label: "Unsere Unterstützung",
      title: "Vom Schlüssel bis zum nächsten Schritt.",
      intro: "Wählen Sie genau die Aufgabe, die Sie brauchen, oder verbinden Sie mehrere Leistungen zu einer laufenden Betreuung.",
      items: [
        { title: "Gästeempfang", text: "Persönlicher Check-in und Check-out, Schlüsselübergabe, Einführung in das Haus und ein aufmerksamer erster Kontakt.", note: "Empfang · Orientierung" },
        { title: "Reinigung & Wäsche", text: "Vorbereitung zwischen Aufenthalten, Bett- und Badwäsche, sorgfältige Reinigung und Endkontrolle.", note: "Wechsel · Kontrolle" },
        { title: "Ausstattung & Kontrolle", text: "Auffüllen des Wesentlichen, visuelle Hauskontrolle und Koordination kleiner Anliegen vor Ort.", note: "Nachfüllen · Betreuung" },
        { title: "Gästebetreuung", text: "Antworten auf praktische Fragen und Unterstützung bei vereinbarten Bedürfnissen während des Aufenthalts.", note: "Präsenz · Sicherheit" },
        { title: "Raum & Identität", text: "Einrichtungshinweise, Vorbereitung für Fotos und praktische Verbesserungen für einen besseren Empfang.", note: "Bild · Funktion" },
        { title: "Potenzial & Entwicklung", text: "Analyse der Positionierung, Preisorganisation und Unterstützung bei wertsteigernden Entscheidungen.", note: "Strategie · Entwicklung" },
      ],
    },
    operation: {
      label: "Betrieb vor Ort",
      title: "Eine ruhige Ankunft beginnt lange vor dem Öffnen der Tür.",
      text: "Wir koordinieren die wesentlichen Momente, damit das Haus bereit ist, der Gast sich willkommen fühlt und der Eigentümer informiert bleibt.",
      imageAlt: "Gastgeber empfängt Gäste an einem portugiesischen Landhaus",
      steps: [
        { number: "01", title: "Vor der Ankunft", text: "Wir prüfen Vorbereitung, Ausstattung und wichtige Hinweise für einen reibungslosen Empfang." },
        { number: "02", title: "Während des Aufenthalts", text: "Wir bleiben für praktische Fragen und vereinbarte Bedürfnisse diskret erreichbar." },
        { number: "03", title: "Nach der Abreise", text: "Wir prüfen das Haus, koordinieren die nächste Vorbereitung und teilen wichtige Informationen." },
      ],
    },
    preparation: {
      label: "Zwischen den Aufenthalten",
      title: "Sorgfalt zeigt sich im Detail.",
      text: "Ein sauberes Haus ist nur der Anfang: Wir achten auf Beständigkeit, Präsentation und das Gefühl, dass alles für diesen Gast vorbereitet wurde.",
      imageAlt: "Vorbereitung von Bett und Wäsche in einer Ferienunterkunft",
      points: ["Bett- und Badwäsche", "Reinigung und Endkontrolle", "Auffüllen des Wesentlichen", "Visuelle Vorbereitung", "Meldung von Vorkommnissen", "Koordination kleiner Arbeiten"],
    },
    value: {
      label: "Aufwertung",
      title: "Den Raum verbessern, ohne seine Identität zu verlieren.",
      text: "Wir betrachten die Unterkunft mit den Augen von Gästen und Eigentümern. Wir suchen realistische Verbesserungen bei Einrichtung, Funktion, Präsentation, Preisen und Erlebnis — passend zum verfügbaren Budget.",
      imageAlt: "Eigentümer und Berater planen Verbesserungen einer Ferienunterkunft",
      points: ["Visuelle Raumanalyse", "Einrichtungsvorschläge", "Vorbereitung für Fotos", "Preisorganisation", "Potenzialeinschätzung", "Investitionsprioritäten"],
    },
    plans: {
      label: "Betreuungsmodelle",
      title: "Nicht jedes Haus braucht dasselbe.",
      intro: "Das Angebot entsteht, nachdem wir Unterkunft, Lage, Buchungshäufigkeit und gewünschten Betreuungsumfang verstanden haben.",
      cards: [
        { type: "Bei Bedarf", title: "Punktuelle Hilfe", text: "Für Eigentümer, die selbst verwalten, aber in bestimmten Momenten eine verlässliche lokale Präsenz brauchen.", includes: ["Check-in oder Check-out", "Ausstattung auffüllen", "Hauskontrolle"], price: "Individuelles Angebot" },
        { type: "Zwischen Aufenthalten", title: "Sorgfältiger Betrieb", text: "Damit jede Abreise und Ankunft mit Beständigkeit und Aufmerksamkeit vorbereitet wird.", includes: ["Reinigung und Wäsche", "Hausvorbereitung", "Gästeempfang"], price: "Individuelles Angebot" },
        { type: "Fortlaufend", title: "Betreuung & Entwicklung", text: "Für Eigentümer, die Betrieb, Gästeerlebnis und wertsteigernde Entscheidungen verbinden möchten.", includes: ["Laufende Koordination", "Bild und Verbesserung", "Preise und Potenzial"], price: "Individuelles Angebot" },
      ],
      noteTitle: "Zuerst lernen wir das Haus kennen.",
      noteText: "Wir bieten keine allgemeine Formel an, ohne den Raum zu verstehen. Entfernung, Größe, Aufenthaltsfrequenz und gewählte Leistungen bestimmen ein transparentes Angebot.",
    },
    contact: {
      label: "Erstes Gespräch",
      title: "Erzählen Sie uns, wie Ihr Haus funktioniert.",
      text: "Teilen Sie Lage, Größe, aktuelle Situation und das, was Sie abgeben möchten. Wir antworten mit einer ersten Orientierung und vereinbaren bei Bedarf einen Besuch.",
      whatsapp: "Über WhatsApp sprechen",
      email: "E-Mail senden",
      note: "Unverbindlich · Angebot nach Kennenlernen der Unterkunft",
    },
    footer: { descriptor: "Unterkunftsbetreuung", note: "Nähe, Sorgfalt und praktischer Blick." },
  },
  nl: {
    status: "Centraal-Portugal · lokale ondersteuning en voorstellen op maat",
    menu: "Menu openen",
    close: "Menu sluiten",
    nav: { services: "Diensten", area: "Werkgebied", operation: "Werking", value: "Verbetering", plans: "Ondersteuningsvormen", contact: "Contact" },
    links: { casa: "Casa do Lagar", transfers: "Transfers & Tours" },
    hero: {
      eyebrow: "Beheer van vakantieverblijven",
      title: "Uw woning,",
      italic: "verzorgd alsof hij van ons was.",
      description: "Van gastenontvangst tot voorbereiding, schoonmaak en verbetering: nabije, flexibele ondersteuning op maat van uw woning.",
      primary: "Ontdek onze ondersteuning",
      secondary: "Praat over uw woning",
      photoAlt: "Zorgvuldige voorbereiding van een Portugees vakantieverblijf",
    },
    proof: [
      { value: "flexibel", label: "één dienst of brede ondersteuning" },
      { value: "lokaal", label: "een nabije aanwezigheid" },
      { value: "zorgzaam", label: "voor, tijdens en na" },
      { value: "op maat", label: "geen vaste pakketten" },
    ],
    intro: {
      label: "Een vertrouwde lokale aanwezigheid",
      title: "Goed beheer begint met de woning kennen.",
      text: "Elke accommodatie heeft een eigen verhaal, ritme en behoeften. We luisteren eerst naar de eigenaar, bezoeken de ruimte en bekijken waar onze aanwezigheid waarde toevoegt — zonder persoonlijke service in een onpersoonlijke operatie te veranderen.",
      quote: "De eigenaar tijd teruggeven zonder de woning haar persoonlijkheid te ontnemen.",
    },
    coverage: {
      label: "Werkgebied",
      title: "Dicht bij uw woning, waar aanwezigheid telt.",
      text: "Onze dienstverlening is vooral gericht op de Centrale Regio van Portugal, waar we nabijheid, een betrouwbare respons en praktische terreinkennis kunnen bieden.",
      region: "Centraal-Portugal · lokale prioriteit",
      places: ["Leiria en stranden", "Figueira da Foz", "Mira de Aire", "Fátima", "Óbidos", "Caldas da Rainha"],
      exceptionTitle: "Andere gebieden",
      exceptionText: "Een ruimer werkgebied of locaties buiten deze plaatsen kunnen uitzonderlijk worden overwogen, na beoordeling van de operationele haalbaarheid, een specifieke offerte en voorafgaande aanvaarding.",
    },
    services: {
      label: "Onze ondersteuning",
      title: "Van de sleutel tot de volgende stap.",
      intro: "Kies alleen de taak die u nodig hebt of combineer meerdere diensten tot doorlopende ondersteuning.",
      items: [
        { title: "Gastenontvangst", text: "Persoonlijke check-in en check-out, sleuteloverdracht, uitleg over de woning en een attent eerste contact.", note: "Onthaal · uitleg" },
        { title: "Schoonmaak & was", text: "Voorbereiding tussen verblijven, bed- en badlinnen, zorgvuldige schoonmaak en eindcontrole.", note: "Wissel · controle" },
        { title: "Benodigdheden & controle", text: "Aanvullen van het essentiële, visuele woningcontrole en coördinatie van kleine behoeften ter plaatse.", note: "Aanvullen · opvolging" },
        { title: "Gastenondersteuning", text: "Antwoorden op praktische vragen en hulp bij afgesproken behoeften tijdens het verblijf.", note: "Aanwezigheid · rust" },
        { title: "Ruimte & identiteit", text: "Inrichtingsadvies, voorbereiding voor fotografie en praktische verbeteringen voor een beter onthaal.", note: "Beeld · functie" },
        { title: "Potentieel & groei", text: "Analyse van positionering, prijsorganisatie en ondersteuning bij waardeverhogende beslissingen.", note: "Strategie · vooruitgang" },
      ],
    },
    operation: {
      label: "Werking ter plaatse",
      title: "Een rustige aankomst begint lang voordat de deur opengaat.",
      text: "We coördineren elk essentieel moment zodat de woning klaarstaat, de gast zich welkom voelt en de eigenaar weet wat er gebeurde.",
      imageAlt: "Gastheer verwelkomt gasten bij een Portugees landhuis",
      steps: [
        { number: "01", title: "Voor aankomst", text: "We controleren voorbereiding, benodigdheden en de informatie voor een vlot onthaal." },
        { number: "02", title: "Tijdens het verblijf", text: "We blijven discreet beschikbaar voor praktische vragen en afgesproken behoeften." },
        { number: "03", title: "Na vertrek", text: "We controleren de woning, coördineren de volgende voorbereiding en delen relevante informatie." },
      ],
    },
    preparation: {
      label: "Tussen verblijven",
      title: "Zorg is zichtbaar in de details.",
      text: "Een schone woning is slechts het begin: we streven naar consistentie, presentatie en het gevoel dat alles voor die gast werd voorbereid.",
      imageAlt: "Voorbereiding van bed en linnen in een vakantieverblijf",
      points: ["Bed- en badlinnen", "Schoonmaak en eindcontrole", "Essentiële benodigdheden", "Visuele voorbereiding", "Melding van bijzonderheden", "Coördinatie van kleine werken"],
    },
    value: {
      label: "Verbetering",
      title: "De ruimte verbeteren zonder haar identiteit te verliezen.",
      text: "We bekijken de accommodatie door de ogen van gast en eigenaar. We zoeken realistische verbeteringen in inrichting, functie, presentatie, prijzen en ervaring, passend bij de beschikbare investering.",
      imageAlt: "Eigenaar en adviseur bespreken verbeteringen voor een vakantieverblijf",
      points: ["Visuele analyse", "Inrichtingssuggesties", "Voorbereiding voor foto's", "Prijsorganisatie", "Potentieelinschatting", "Investeringsprioriteiten"],
    },
    plans: {
      label: "Ondersteuningsvormen",
      title: "Niet elke woning heeft hetzelfde nodig.",
      intro: "We maken het voorstel nadat we de woning, locatie, verblijfsfrequentie en gewenste ondersteuning begrijpen.",
      cards: [
        { type: "Wanneer nodig", title: "Incidentele hulp", text: "Voor eigenaren die zelf beheren maar op bepaalde momenten een betrouwbare lokale aanwezigheid nodig hebben.", includes: ["Check-in of check-out", "Benodigdheden aanvullen", "Woningcontrole"], price: "Voorstel op maat" },
        { type: "Tussen verblijven", title: "Zorgvuldige werking", text: "Om elk vertrek en elke aankomst consequent en met aandacht voor te bereiden.", includes: ["Schoonmaak en was", "Woningvoorbereiding", "Gastenontvangst"], price: "Voorstel op maat" },
        { type: "Doorlopend", title: "Beheer & groei", text: "Voor wie werking, verbetering van de gastervaring en waardebeslissingen wil combineren.", includes: ["Doorlopende coördinatie", "Beeld en verbetering", "Prijzen en potentieel"], price: "Voorstel op maat" },
      ],
      noteTitle: "Eerst leren we de woning kennen.",
      noteText: "We bieden geen algemene formule zonder de ruimte te begrijpen. Afstand, omvang, verblijfsfrequentie en gekozen diensten bepalen een transparant voorstel.",
    },
    contact: {
      label: "Eerste gesprek",
      title: "Vertel ons hoe uw woning werkt.",
      text: "Deel de locatie, omvang, huidige situatie en wat u wilt delegeren. We geven een eerste richting en plannen, waar passend, een bezoek.",
      whatsapp: "Praat via WhatsApp",
      email: "Stuur een e-mail",
      note: "Vrijblijvend · voorstel na kennismaking met de woning",
    },
    footer: { descriptor: "Beheer van Verblijven", note: "Nabijheid, zorg en praktische visie." },
  },
};
