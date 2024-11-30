const LinkButton = ({ href, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-md mx-auto my-3 bg-blue-500 hover:bg-blue-600 text-white text-center font-medium py-3 rounded-lg transition"
    >
      {label}
    </a>
  );
  
  export default LinkButton;
  