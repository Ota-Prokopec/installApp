

window.addEventListener("load", () => {

  /*manifest
  {
      "background_color": "white",
      "color": "black",
      "description": "Geohry ŠkolaZdola",
      "display": "standalone",
      "icons": [{"src": "/css/foto-atd/logo.png", "sizes": "any", "type": "image/png"}],
      "name": "Quizi",
      "orientation": "any",
      "short_name": "Quizi",
      "start_url": "/",
      "theme_color": "#3367D6"
    }*/


  let deferredPrompt;

   //na začátek nastavíš tlačítko display:none



window.addEventListener('beforeinstallprompt', (e) => {
       getReadyForInstall(e)
});

function getReadyForInstall(e) {

  console.log("before install");
  console.log(e);
  /*semka dáš že button má být display:flex*/

  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

}


function installApp() {//samotné vyvolání instalace aplikace

  // hide our user interface that shows our A2HS button

  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');//buď přijmout stažení aplikace
      } else {
        console.log('User dismissed the A2HS prompt');//nebo nepřijmout
      }
      deferredPrompt = null;
    });

}
})
