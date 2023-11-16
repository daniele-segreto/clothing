function filterList() {
  var searchText = document.getElementById('searchInput').value.toLowerCase(); // Recupera il testo di ricerca
  var itemList = document.getElementById('itemList'); // Recupera la lista degli elementi
  var items = itemList.getElementsByTagName('li'); // Recupera tutti gli elementi della lista
  if (searchText === '') { // Se il campo di ricerca è vuoto, nascondi la lista
    itemList.style.display = 'none';
    return;
  }
  for (var i = 0; i < items.length; i++) { // Itera attraverso gli elementi della lista
    var item = items[i];
    if (item.innerText.toLowerCase().includes(searchText)) { // Verifica se il testo di ricerca è presente nell'elemento
      item.style.display = 'list-item'; // Mostra l'elemento
    } else {
      item.style.display = 'none'; // Nascondi l'elemento se non corrisponde alla ricerca
    }
  }
  // Mostra la lista solo se ci sono elementi visibili
  itemList.style.display = Array.from(items).some(item => item.style.display !== 'none') ? 'block' : 'none';
}

function search(event) {
  event.preventDefault(); // Impedisci il comportamento predefinito del modulo di ricerca
  document.getElementById('searchInput').value = ''; // Svuota la barra di ricerca
  document.getElementById('itemList').style.display = 'none'; // Nascondi la lista
  console.log('Esegui la ricerca...'); // Puoi aggiungere ulteriori azioni di ricerca qui se necessario
}



// Funzione per aprire una scheda specifica
function openTab(event, tabId) {
  // Nascondi tutti i contenuti delle schede
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Rimuovi la classe "active" da tutti i pulsanti delle schede
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostra il contenuto della scheda corrente
  document.getElementById(tabId).style.display = "block";

  // Aggiungi la classe "active" al pulsante della scheda corrente
  event.currentTarget.className += " active";
}

// Apri la prima scheda per impostazione predefinita
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
