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
    title: 'Registro de proyectos de residencias profesionales',
    author: 'Zuriel Román Hernández',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Zuriel Román Hernández',
    email: 'ci_gamadero.tecnm.mx',
    url: 'https://gamadero.tecnm.mx',
    description:
      'Sistema que permite registrar proyectos de residencias profesionales',
    version: '0.0.1',
  });
};

export default {
  // Action Methods
  index,
  about,
};
