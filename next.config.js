module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/html/index.html',
          permanent: true, // Set to false if this redirect is temporary
        },
      ];
    },
  };