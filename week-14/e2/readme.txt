Se till att du förstår och gärna memorerar hur man skapar en förfrågan med hjälp av Request-klassen.

Sök information på nätet för att ta reda på vilka options som finns när man skapar en instans av Request. Kolla gärna på vilka headers som är de mest använda när man skapar förfrågningar och vad dessa headers är till för.

Slutligen: Jämför request-objektet som skapas på klienten (som en instans av Request) och request-objektet som serven (Deno) skapar när den får en förfrågan, och som är argumentet som tas emot av handle-funktionen på servern.

// På klienten:

  const request = new Request(url, options);



// På serven kommer den som argument till handle-funktionen:

                      ▼
  function handler(request) {
     ... return new Response(...);
  }
  Deno.serve(handler);



  - De kallas samma sak (request) men är de samma typ av objekt?
  //Liknande, men inte exakt samma
  - vilka nycklar har de gemensamt?
  //bodyUsed
  //headers
  //method
  //url
  //referer
  //redirect


