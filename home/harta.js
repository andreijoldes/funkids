 // Coordonatele pentru Turda, Cluj
 var turdaLatLng = [46.5833, 23.7833];

 // Inițializează harta
 var map = L.map('map').setView(turdaLatLng, 15);

 // Adaugă stratul de hartă OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // Adaugă un marker pentru locația din Turda
 L.marker(turdaLatLng).addTo(map)
   .bindPopup('Turda, Cluj, România')
   .openPopup();