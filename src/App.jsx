import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function App() {
  const cards = [
    {
      title: 'Free',
      price: "0$/Month",
      user: "✔Single User",
      storage: "✔5GB Storage",
      project: "✔Limited projects",
      access: "✔Community access",
      privateProjects: "✘Limited private projects",
      support: "✘No phone support",
      domain: "✘No subdomain",
      status: "✘No status reports"
    },
    {
      title: 'PLUS',
      price: "9$/Month",
      user: "✔5 Users",
      storage: "✔50GB Storage",
      project: "✔Free Limited projects",
      access: "✔Free community access",
      privateProjects: "✔Unlimited private projects",
      support: "✔Dedicated phone support",
      domain: "✔Free subdomain",
      status: "✘Monthly status reports"
    },
    {
      title: 'PRO',
      price: "49$/Month",
      user: "✔Single User",
      storage: "✔150GB Storage",
      project: "✔Unlimited projects",
      access: "✔Unlimited access",
      privateProjects: "✔Free private projects",
      support: "✔Free phone support",
      domain: "✔Free subdomain Unlimited",
      status: "✔Daily status reports"
    }
  ];

  return (
    <div className="container">
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" id="bg">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;