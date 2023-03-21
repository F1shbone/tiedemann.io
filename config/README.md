- .htaccess needs to be disabled (temporarily emptied)
- start Certbot Container

  ```sh
  docker start Chertbot
  ```

- copy files from the Container:

  ```sh
  docker cp Certbot:/etc/letsencrypt/archive/tiedemann.io .
  ```

- https://certbot.eff.org/docs/using.html#manual
- in Docker Image:

  ```sh
  cd /opt/certbot/src
  certbot certonly --manual

  domains: *.tiedemann.io
  ```

- In HostEurope replace DNS Challenge

  - Produktverwaltung
  - Domainservices
  - Domain-Administration -> Namensserver- / DNS-Einträge bearbeiten
  - `tiedemann.io` -> Editieren
  - edit ACME challenge

- Copy files to directory

  ```sh
  # replace * with iteration
  docker cp Certbot:/etc/letsencrypt/archive/tiedemann.io/fullchain*.pem ./newSSH/
  docker cp Certbot:/etc/letsencrypt/archive/tiedemann.io/privkey*.pem ./newSSH/
  ```

- In HostEurope update certs

  - Produktverwaltung
  - Webhosting -> Aktionen -> Konfigurieren
  - Sicherheit & SSL -> SSL Administrieren
  - Replace for all listed domains with
    - `fullchain1.pem`: Zertifikat
    - `privkey1.pem`: Key
    - no password required
