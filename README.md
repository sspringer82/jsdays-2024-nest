# Hallo Nest.js

## Links
- https://docs.nestjs.com/first-steps
- https://nodejs.org/en/about/previous-releases
- https://github.com/nvm-sh/nvm
- https://choosealicense.com/
- https://github.com/sindresorhus/eslint-plugin-unicorn
- https://github.com/sspringer82/calendar

# Auth
1. Installation: `npm install @nestjs/jwt @nestjs/passport @types/passport-jwt @types/passport-local passport passport-jwt passport-local`
2. Auth Module: `nest g mo auth`
3. Auth Controller: `nest g co auth`
4. Auth Service: `nest g s auth`
5. AuthController => Login Endpunkt (POST mit username + passwort als Body) + Inject von AuthService
6. AuthService => login Methode erhält Username + Passwort - überprüft und nutzt jwtService zum signieren
7. AuthModule imports von PassportModule und JwtModule (secret + signOptions)
8. jwt strategy => Passport JWT Konfiguration
9. jwt-auth guard => Absicherung für Endpunkte
10. @UseGuards(JWTAuthGuard) zum Absichern von Controllern
