// components/EventCard.js
export class EventCard {
  constructor(event) {
    this.event = event;
  }

  render() {
    return `
      <div class="event-card">
        <h3>${this.event.name}</h3>
        <p>📅 ${this.event.date}</p>
        <p>⏰ ${this.event.time}</p>
        <p>💰 ${this.event.price}</p>
        <p>💰 ${this.event.descripcion}</p>
        <button class="cta-button" data-id="${this.event.id}">Más info</button>
      </div>
    `;
  }
}
