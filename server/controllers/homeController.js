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
  res.render('index', viewModel);
};

export default {
  // Action Method
  index,
};
