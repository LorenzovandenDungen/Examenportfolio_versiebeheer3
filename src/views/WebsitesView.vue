<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Hoofdcontainer met een achtergrondverloop van blauw naar paars, vult minimaal het volledige scherm, met witte tekst -->
    <header class="flex flex-col md:flex-row justify-between items-center p-6">
      <!-- Header met flexbox layout; op mobiele apparaten stapelt het zich verticaal, op middelgrote schermen horizontaal -->
      <div class="logo text-2xl font-bold mb-4 md:mb-0">Lorenzo</div>
      <!-- Logo of merknaam, met grotere en vetgedrukte tekst, marge onder op mobiel, geen marge op middelgrote schermen -->
      <nav>
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <!-- Navigatielijst; verticaal gestapeld op mobiel, horizontaal op middelgrote schermen -->
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <!-- Navigatielink naar de homepagina -->
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <!-- Navigatielink naar de websites pagina -->
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <!-- Navigatielink naar de tarieven pagina -->
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <!-- Navigatielink naar de contactpagina -->
          <li>
            <router-link
              to="/offerte"
              class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
            >
              Offerte
            </router-link>
          </li>
          <!-- Navigatielink naar de offertepagina met een kleurrijke achtergrond en afgeronde hoeken -->
        </ul>
      </nav>
    </header>
    <main class="py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hoofdinhoud van de pagina met verticale en horizontale padding die varieert per schermgrootte -->
      <section class="text-center mb-12">
        <!-- Sectie met gecentreerde tekst en marge onderaan -->
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Website laten maken</h1>
        <!-- Hoofdtitel met grote, vetgedrukte tekst die groter wordt op kleine schermen -->
        <p class="text-lg sm:text-xl">Nu voor maar eenmalig €649,-!</p>
        <!-- Ondertitel met iets grotere tekst op kleine schermen -->
      </section>
      <section class="flex flex-col md:flex-row items-center mb-12">
        <!-- Sectie met flexbox layout; op mobiel verticaal gestapeld, op middelgrote schermen horizontaal -->
        <div class="md:w-1/2 p-4">
          <!-- Container voor de afbeelding, neemt de helft van de breedte in op middelgrote schermen -->
          <img
            src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1380&t=st=1716226552~exp=1716227152~hmac=c6d74d9fe03430911f331a0177179a1ef5efdd617036b9290672557d309f6f59"
            alt="Website design"
            class="rounded-lg shadow-lg w-full"
          />
          <!-- Afbeelding met afgeronde hoeken en schaduw, vult de volledige breedte van de container -->
        </div>
        <div class="md:w-1/2 p-4 text-left">
          <!-- Container voor de tekst, neemt de andere helft van de breedte in op middelgrote schermen -->
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">
            Ontvang binnen 2 werkdagen al een eerste ontwerp!
          </h2>
          <!-- Subtitel met grotere, vetgedrukte tekst die groter wordt op kleine schermen -->
          <p class="mb-4">
            Wilt u een website laten maken? Lorenzo helpt u graag bij het maken van een nieuwe
            website. Alle websites die wij maken zijn gebruiksvriendelijk, mobiel vriendelijk en
            zoekmachine vriendelijk. Uw website is hét uithangbord van uw bedrijf en daarom moet de
            ontwikkeling hiervan goed en professioneel worden gedaan.
          </p>
          <!-- Eerste paragraaf met informatie over het maken van websites -->
          <p class="mb-4">
            Alle websites die wij maken worden gemaakt met het CMS Wordpress. Wordpress is een
            relatief eenvoudig programma (CMS) waarmee websites kunnen worden gemaakt. Het is erg
            visueel ingericht en onderscheidt zich op gebruiksgemak. Wordpress is het meest
            gebruikte CMS ter wereld.
          </p>
          <!-- Tweede paragraaf over het gebruik van Wordpress -->
          <p class="mb-4">
            Na oplevering van de website kunt dan ook zelf heel eenvoudig teksten en/of foto's
            wijzigen zonder technische kennis. Mocht u er zelf niet uit kunnen komen of er geen tijd
            voor hebben dan wijzigt Lorenzo GRATIS teksten en/of foto's voor u na oplevering van de
            website.
          </p>
          <!-- Derde paragraaf over ondersteuning na oplevering -->
          <router-link to="/" class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >Over Lorenzo</router-link
          >
          <!-- Knop met link naar de 'Over Lorenzo' pagina -->
        </div>
      </section>
      <section class="text-center mb-12">
        <!-- Sectie met gecentreerde tekst en marge onderaan -->
        <h2 class="text-3xl sm:text-4xl font-bold mb-8">
          Website laten maken in 4 simpele stappen
        </h2>
        <!-- Titel voor de stappen sectie -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Grid layout voor de vier stappen; aantal kolommen verandert met de schermgrootte -->
          <div class="bg-white text-black p-6 rounded-lg shadow-lg">
            <!-- Container voor stap 1 met witte achtergrond en schaduw -->
            <div class="mb-4 flex justify-center">
              <!-- Afbeelding container, gecentreerd -->
              <img
                src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1716226651~exp=1716227251~hmac=4aec62d45d0d117906ea0a125c45584a67533d3ac1f31d0e2e15d53776a44370"
                alt="Stap 1"
                class="w-48 h-48 object-cover"
              />
              <!-- Afbeelding voor stap 1, met vaste afmetingen en behoud van verhoudingen -->
            </div>
            <h3 class="text-xl font-bold mb-4">Website aanvragen €649,-</h3>
            <!-- Titel van stap 1 -->
            <p>
              Vul online ons aanvraag formulier in. Op werkdagen binnen 1 uur ontvangt u al een
              antwoord.
            </p>
            <!-- Beschrijving van stap 1 -->
            <router-link
              to="/offerte"
              class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4 inline-block"
              >Website aanvragen</router-link
            >
            <!-- Knop om een website aan te vragen -->
          </div>
          <div class="bg-white text-black p-6 rounded-lg shadow-lg">
            <!-- Container voor stap 2 -->
            <div class="mb-4 flex justify-center">
              <img
                src="https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?w=1380&t=st=1716226619~exp=1716227219~hmac=6fcd866ef5648028cf8008055ccc302473fe5bbaa0c9edd5472b409d7dc1d723"
                alt="Stap 2"
                class="w-48 h-48 object-cover"
              />
              <!-- Afbeelding voor stap 2 -->
            </div>
            <h3 class="text-xl font-bold mb-4">Contact over uw wensen en eisen</h3>
            <!-- Titel van stap 2 -->
            <p>
              Tijdens kort (telefonisch, WhatsApp of per mail) contact kunt u al uw wensen en eisen
              kenbaar maken.
            </p>
            <!-- Beschrijving van stap 2 -->
          </div>
          <div class="bg-white text-black p-6 rounded-lg shadow-lg">
            <!-- Container voor stap 3 -->
            <div class="mb-4 flex justify-center">
              <img
                src="https://img.freepik.com/free-photo/glowing-filament-ignites-ideas-innovative-solutions-generated-by-ai_188544-9614.jpg?w=1380&t=st=1716226589~exp=1716227189~hmac=2dcec61cdc3bff70157fb8587ce8a9f5b26f6c6fd499a529fc309ab83a5091ba"
                alt="Stap 3"
                class="w-48 h-48 object-cover"
              />
              <!-- Afbeelding voor stap 3 -->
            </div>
            <h3 class="text-xl font-bold mb-4">Eerste ontwerp</h3>
            <!-- Titel van stap 3 -->
            <p>
              Nadat u uw wensen en eisen kenbaar heeft gemaakt wordt er gestart met het maken van
              een eerste ontwerp. Dit duurt 2 werkdagen en nadat deze klaar is kunt u via een
              speciale link deze bekijken en helemaal testen.
            </p>
            <!-- Beschrijving van stap 3 -->
          </div>
          <div class="bg-white text-black p-6 rounded-lg shadow-lg">
            <!-- Container voor stap 4 -->
            <div class="mb-4 flex justify-center">
              <img
                src="https://img.freepik.com/free-photo/happy-woman-glasses-makes-winning-gesture-sincerely-rejoices-lady-with-red-lipstick-dressed-gray-sweater-looking-laptop_197531-13467.jpg?t=st=1716226704~exp=1716230304~hmac=a8ca1bd59ba580fc3abb22875fbafe3fb5d23f97f9d1fb067a046234e5591ada&w=1380"
                alt="Stap 4"
                class="w-48 h-48 object-cover"
              />
              <!-- Afbeelding voor stap 4 -->
            </div>
            <h3 class="text-xl font-bold mb-4">100% tevredenheidsgarantie</h3>
            <!-- Titel van stap 4 -->
            <p>
              Na het eerste ontwerp kunt u aangeven wat u ervan vindt en wordt de website net zo
              lang aangepast totdat u er helemaal 100% tevreden mee bent. Wanneer de website dan
              helemaal klaar is en u bent er helemaal tevreden mee zorgen wij ervoor dat deze online
              wordt gezet.
            </p>
            <!-- Beschrijving van stap 4 -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WebsitesView'
  // Naam van de Vue-component
}
</script>

<style>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
</style>
