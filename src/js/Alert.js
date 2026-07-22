export default class Alert {
  constructor() {
    this.path = "/json/alerts.json";
  }

  async init() {
    const response = await fetch(this.path);
    const alerts = await response.json();

    if (alerts.length > 0) {
      this.renderAlerts(alerts);
    }
  }

  renderAlerts(alerts) {
    const section = document.createElement("section");
    section.classList.add("alert-list");

    alerts.forEach((alert) => {
      const p = document.createElement("p");

      p.textContent = alert.message;

      p.style.backgroundColor = alert.background;
      p.style.color = alert.color;

      section.appendChild(p);
    });

    const main = document.querySelector("main");

    main.prepend(section);
  }
}
