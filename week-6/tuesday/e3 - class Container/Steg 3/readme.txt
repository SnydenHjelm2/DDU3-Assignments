Vi byyger nu på classen E.
En instans av E ska "exponera" (expose) metoden append, som tar emot:
  - name: en sträng.
  - element: en annan instans av E

När metoden append appliceras på instansen e1:
1) lägger till (appendar) html-egenskapen av element (argumentet) som barn av html-egenskapen av e1
2) gör det (element) tillgängligt som en egenskap av e1 av med namnet "name"

Jag ska kunna skriva:
const e1 = new E();
e1.append("wdu", new E());
e1.wdu.html.textContent = "hej!";


**EXTRA Steg 3:**
Bygg till klassen E så att man inte behöver skriva:
  e1.html.textContent
  e1.html.innerHTML
Utan istället kan bara skriva:
  e1.textContent
  e1.innerHTML

Så:
const e1 = new E();
e1.append("wdu", new E());
e1.wdu.textContent = "hej!";


