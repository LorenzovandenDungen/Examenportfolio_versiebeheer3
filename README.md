# Examenportfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Examenportfolio

K1 W1 Planning

Beschrijving van het Project:
Het project omvat de ontwikkeling van een website gericht
op startende ondernemers. Deze website biedt een betaalbare oplossing voor het bouwen van een
professionele online aanwezigheid voor startende ondernemers. 


Doel van het Project: Het doel van dit project is om een gebruiksvriendelijke website te ontwikkelen die startende ondernemers in staat stelt om eenvoudig en betaalbaar een professionele online aanwezigheid op te bouwen.



Eisen en Specificaties:
Functionele vereisten:
Keuze uit webpakketten
•	Ik bouw een overzichtelijke catalogus waarin gebruikers door verschillende websitepakketten kunnen bladeren. Elk pakket wordt gedetailleerd beschreven met info over wat het inhoudt, wat het kost, en wat je ermee kunt.
•	Ik wil dat gebruikers pakketten naast elkaar kunnen leggen om ze gemakkelijk te vergelijken op basis van hun behoeften.
Betalingen Veilig Online Verwerken
•	Ik zorg voor een veilig en betrouwbaar systeem voor het afhandelen van online betalingen. Dit systeem moet verschillende betaalopties ondersteunen zoals creditcards, PayPal, en iDEAL, met een directe bevestiging van de transactie.
Voortgang volgen
•	Gebruikers krijgen toegang tot een persoonlijk dashboard waar ze in real-time de ontwikkeling van hun site kunnen volgen. Dit omvat updates over voltooide taken en wat de volgende stappen zijn, plus de mogelijkheid om direct feedback te geven.




Niet-functionele vereisten:
Toegankelijk en Up-to-date
•	Mijn doel is om de site volledig toegankelijk te maken volgens de laatste richtlijnen van WCAG 2.1, met een design dat mooi werkt op alle apparaten en schermformaten.
Veiligheid 
•	Alle dataoverdracht gebeurt via SSL-encryptie, en ik houd mij strikt aan de AVG voor het beschermen van persoonlijke informatie.

Snel en compatible
•	Ik streef ernaar dat pagina’s binnen 2 seconden laden en dat de site vlekkeloos draait op de nieuwste versies van populaire browsers zoals Chrome, Firefox, Safari, en Edge.


Technologiekeuze
Voor het ontwikkelen van mijn website heb ik gekozen voor de combinatie van Vue 3 en Vite, omdat deze technologieën mij in staat stellen om een snelle, interactieve en gebruikersvriendelijke omgeving te creëren. Vue 3 helpt mij bij het ontwerpen van een intuïtieve gebruikersinterface, terwijl Vite zorgt voor een soepele ontwikkelervaring met zijn snelle herlaadtijden. Deze keuze weerspiegelt mijn toewijding aan het leveren van een naadloze en toegankelijke online ervaring voor mijn gebruikers.
User Stories: 
1. Als startende ondernemer wil ik de beschikbare websitepakketten kunnen bekijken, zodat ik het pakket kan kiezen dat het beste bij mijn behoeften past.

2. Als startende ondernemer wil ik mijn gekozen websitepakket kunnen betalen via een veilige betalingsgateway, zodat ik mijn websiteontwikkeling kan starten.

3. Als startende ondernemer wil ik de voortgang van mijn websiteontwikkeling kunnen volgen, zodat ik op de hoogte blijf van de status van mijn project.


Takenlijst:
1. Ontwerpen van de gebruikersinterface: 5 dagen
2. Systeem voor pakketkeuze opzetten voor het bekijken en selecteren van websitepakketten: 6 dagen
3. Integreren van betalingsgateway voor veilige transacties: 4 dagen
4. Implementeren van functionaliteit voor het volgen van de voortgang van websiteontwikkeling: 5 dagen


Prioriteiten:
1. Ontwerpen van de gebruikersinterface
2. Implementeren van de functionaliteit voor het bekijken en selecteren van websitepakketten
3. Integreren van betalingsgateway voor veilige transacties
4. Implementeren van functionaliteit voor het volgen van de voortgang van websiteontwikkeling




Voortgangbewaking:
- Wekelijkse voortgangsvergaderingen
- Evaluatie na voltooiing van elke grote taak of mijlpaal in het project
- Reguliere communicatie over de voortgang met belanghebbenden





K1 W2 Ontwerp
 
    







K1 W3 Realisatie

Bevat jouw project code waarin je gebruik maakt van datastructuren (variabelen, arrays....), flow control (loops), functies/methods en dergelijke?
Tot nu toe maakt mijn project gebruik van basale datastructuren zoals variabelen en arrays. Er zijn eenvoudige functies geïmplementeerd voor basisfunctionaliteiten. Flow control in de vorm van conditionele statements en loops wordt toegepast voor het verwerken van gebruikersacties en data.

Heb je minimaal drie user story's opgeleverd?
Op dit moment zijn er basisversies van twee user stories geïmplementeerd. De derde user story is in ontwikkeling. Mijn focus ligt op het versterken van deze verhalen met meer functionaliteit en een betere gebruikerservaring.

Heeft de realisatie (dus dit onderdeel), ongeveer 40 uur per persoon gekost?
Tot nu toe heb ik ongeveer 20 uur besteed aan het project. Dit omvat zowel planning, ontwerp als initiële ontwikkeling. Ik verwacht dat de totale tijd dichter bij de 40 uur zal liggen tegen de tijd dat alle geplande functionaliteiten zijn geïmplementeerd.

Voldoet het resultaat aan het ontwerp?
Het huidige resultaat is een werk in uitvoering en komt gedeeltelijk overeen met het ontwerp. Verdere aanpassingen en verbeteringen zijn nodig om volledig aan het ontwerp te voldoen.

Worden fouten in de code goed afgehandeld?
Foutafhandeling is momenteel beperkt. Mijn volgende stappen omvatten het verbeteren van de foutafhandeling en het robuuster maken van de applicatie door uitgebreidere controles en validaties.

Heb je rekening gehouden met security?
Basisbeveiligingsmaatregelen zijn geïmplementeerd, en ik plan om verdere beveiliging toe te voegen, met name rondom dataopslag en -overdracht, om de applicatie veiliger te maken.

Is er volgens een standaard geprogrammeerd (inspringen, variabele naamgeving en dergelijke)?
Er wordt een poging gedaan om te programmeren volgens standaardconventies. Er is echter ruimte voor verbetering in consistentie in naamgeving en code-organisatie.

Is de code goed leesbaar en begrijpelijk. Is er zinvol commentaar toegevoegd?
De code is over het algemeen leesbaar, met enig commentaar om de functionaliteit uit te leggen. Meer gedetailleerd commentaar is gepland voor complexere delen van de code.

Heb je op een juiste manier versie beheer toegepast?
Versiebeheer wordt toegepast via Git, met basiscommitberichten die de uitgevoerde werkzaamheden beschrijven. De toepassing van branching en merge-strategieën moet nog worden verfijnd.
