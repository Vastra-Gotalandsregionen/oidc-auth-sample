# oidc-auth-sample
Ett exempel på en applikation som använder OpenID Connect via ADFS som autentisering.

## Komma igång

### Installera Node.js
https://nodejs.org/en/download/
Använd npm för att installera paket för frontend.

### Installera Angular CLI (valfritt)
https://cli.angular.io/
För att underlätta utveckling kan Angular CLI installeras globalt. Angular CLI finns även med som paket i frontend, så att installera det globalt är valfritt.

### Installera .NET Core 2.1 SDK
https://www.microsoft.com/net/download

### Registrera i ADFS
Frontend-applikationen behöver registreras som en public client i VGR:s test-ADFS. Vid registrering måste ett redirect URI samt en resource (URI för backend) anges. Redirect URI är den adress dit tokens skickas efter att en användare autentiserat sig i ADFS. För användning i produktion beh;ver samma sak göras i VGR:s produktions-ADFS.

### Konfigurera miljöer
Frontend-applikationen stöder två olika miljöer - development och production. Dessa är konfigurerade i environment.ts respektive environment.prod.ts (se dokumentation för Angular för mer information). Dessa filer måste uppdateras med information från registreringen i ADFS. Efter att frontend-applikationen registrerats fås ett unikt applikations-ID. Detta ersätter CLIENT_ID_TEST i environment.ts. I samma fil ersätts RESOURCE_TEST med URI för backend, efter att den registrerats i ADFS. För produktion är det CLIENT_ID_PRODUCTION och RESOURCE_PRODUCTION i environment.prod.ts som ska bytas ut. I produktion behöver även RESOURCE_URL_PRODUCTION bytas ut mot URL till produktions-backend, samt APP_URL till URL för produktions-frontend.

Backend-applikationen stöder också två olika miljöer - development och production. Dessa är konfigurerade i appsettings.Development.json respektive appsettings.Production.json. Ersätt RESOURCE_URI_DEVELOPMENT med URI för test-backend i appsettings.Development.json, samt RESOURCE_URI_PRODUCTION med URI för produktions-backend i appsettings.Production.json.

### Installera npm-paket
Kör följande kommando i katalogen oidc-auth-sample/angular-frontend/auth-sample:
```
npm i
```

### Starta frontend (med Angular CLI installerat globalt)
Kör följande kommando i katalogen oidc-auth-sample/angular-frontend/auth-sample:
```
ng s -o
```

### Starta frontend (utan Angular CLI installerat globalt)
Kör följande kommando i katalogen oidc-auth-sample/angular-frontend/auth-sample:
```
./node_modules/.bin/ng s -o
```

### Starta backend
Kör följande kommando i katalogen oidc-auth-sample/dotnet-backend/AuthSample/AuthSample:
```
dotnet run
```

### Starta backend (med Visual Studio)
Det är också möjligt att köra backend via Visual Studio. I Visual Studio hostas applikationen via reverse proxy i IIS Express, vilket medför att portarna inte är de samma som ovan. För att frontend ska hitta backend behöver därför apiUrl i environment.ts ändras från port 5000 till port 52905. Efter det kan backend startas med F5, på vanligt sätt.