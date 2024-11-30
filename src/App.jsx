import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import Footer from "./components/Footer";

const App = () => {
  const links = [
    { href: "https://example.com", label: "Visit My Website" },
    { href: "https://github.com", label: "GitHub Profile" },
    { href: "https://linkedin.com", label: "LinkedIn Profile" },
    { href: "https://twitter.com", label: "Twitter" },
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
