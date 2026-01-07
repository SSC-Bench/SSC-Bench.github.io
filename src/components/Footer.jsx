const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center space-y-4">
          <p className="text-sm leading-relaxed">
            This website is built with React, Tailwind CSS, and Framer Motion.
            <br />
            Template inspired by{' '}
            <a
              href="https://nerfies.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 underline"
            >
              Nerfies
            </a>{' '}
            and modern academic project pages.
          </p>
          <p className="text-xs text-gray-500">
            © 2026 SSC-Bench. Licensed under{' '}
            <a
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              CC BY-SA 4.0
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
