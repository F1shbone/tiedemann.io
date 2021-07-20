- .htaccess needs to be disabled (temporarily emptied)
- copy files from the Docker Image: docker cp Certbot:/etc/letsencrypt/archive/tiedemann.io .
- https://certbot.eff.org/docs/using.html#manual
- in Docker Image:

  ```sh
  cd /opt/certbot/src
  certbot certonly --manual

  domains: *.tiedemann.io, www.tiedemann.io
  ```

- Correct files:
  - `fullchain1.pem`: Zertifikat
  - `privkey1.pem`: Key
  - no password
