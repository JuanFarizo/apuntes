--------DEBUGGIN-----------------
Con NDB
sudo npm i ndb --global // Se hace con sudo ya que es una dependencia global. Si no funciona correr este comando

PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 sudo npm install -g ndb --unsafe-perm=true --allow-root ftw 

sudo npm i ndb --save-dev 


Luego agrego al package.json el script:
	"debug": "ndb server.js"

y para correr el dubugger en la consola ejecuto:

	npm run debug