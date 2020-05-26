

## HY / Fullstack MOOC / Anecdote 2 - routed

### Toiminnallisuus  

Anekdoottit React Router harjoitus  

Front - react, Router  
Backend - ei  
 

### Luonti  

Luotu kloonaamalla  
git clone https://github.com/fullstack-hy2020/routed-anecdotes

Poistettu kloonin repo, asennettu sovelluksen riippuvuudet  
ja luotu oma repo  
rm -rf .git  
npm install  
git init   

### GIT

Tehtävät tallennettu omiin git -haaroihin  
paikallisen haaran push remote haaraan esim  
git push -u origin part7-01  

### Käynnistys  
Frontendin käynnistys  
npm start  

### Testaus  
Toistaiseksi ei testaus toiminnallisuutta   

### Edistyminen

7.1: routed anecdotes, step1 - git branch part7-01  
Asennettu React router  
npm install --save react-router-dom  

Siivottu app.js jakamalla komponentteihin  

Menu-komponentissa olevia linkkejä klikkailemalla saadaan  
säädeltyä näytettävää näkymää  

7.2: routed anecdotes, step2  
Yksittäisen anekdotin näyttö url /anecdote/<id>  

7.3: routed anecdotes, step3  - git branch part7-03  
Uuden anekdotin luonnin jälkeen reroute '/'-sivulle  

7.4: anekdoottisovellus ja hookit step1 - git branch part7-04  
Custom hook useField lomakkeen käsittelyyn  

7.5: anekdoottisovellus ja hookit step2  
Lisätty lomakkeeseen nappi, joka mahdollistaa syötekenttien tyhjentämisen.  
Lisätty reset() useField hookiin  

7.6: anekdoottisovellus ja hookit step3 - git branch part7-06  
Korjattu tehtävässä 7.5 syntynyt vika  
input kentän reset='reset' atribuutilla    




