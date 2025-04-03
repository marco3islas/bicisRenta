import { events } from './data/events.js';
import { EventCard } from './eventCard.js';

document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.getElementById('events-container');

  events.forEach(event => {
    const card = new EventCard(event);
    eventsContainer.innerHTML += card.render();
  });

  // Eventos para los botones (ej: abrir modal)
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const eventId = e.target.dataset.eventId;
      console.log(`Evento seleccionado: ${eventId}`);
    });
  });
});
