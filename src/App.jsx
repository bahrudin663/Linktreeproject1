import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import Footer from "./components/Footer";

const App = () => {
  const links = [
    { href: "https://sites.google.com/view/centrumetaversity/beranda?authuser=0", label: "Visit My Website" },
    { href: "https://github.com/bahrudin663", label: "GitHub Profile" },
    { href: "https://www.linkedin.com/in/bahrudin-pakuwinata-61a51a59/?originalSubdomain=id", label: "LinkedIn Profile" },
    { href: "https://x.com/pakuwina", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen min-w-screen w-screen bg-gray-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <div className="mt-6">
          {links.map((link, index) => (
            <LinkButton key={index} href={link.href} label={link.label} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
