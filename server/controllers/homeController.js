// URL: Get /
const index = (req, res) => {
  // Calculando emojie
  const emojieDataset = [
    '😎',
    '🗼',
    '😏',
    '☕',
    '🙋‍♂️',
    '👏',
    '🤓',
    '🖤',
    '🎶',
    '🎂',
    '🐱‍👤',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View Models
  const viewModel = {
    title: 'Registro de proyectos de residencias',
    author: 'Zuriel Román Hernández',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Zuriel Román Hernández',
    email: 'romanzuriel@gmail.com',
    url: 'https://github.com/RomanZurielH/sistema_registro/tree/dev',
    description:
      'Sistema que permite registrar ideas para proyectos de residencias',
    version: '0.0.alpha',
  });
};

export default {
  // Action Methods
  index,
  about,
};
