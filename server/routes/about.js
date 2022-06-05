// Importamos Express
const express = require("express");
// Importamos el enrutador de express
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  // render manda a renderizar (generar y entregar)

  res.render(
    "about",
    // Este el el View_Model
    {
      name: "Zuriel Román",
      email: "betterthanyou24awesome@outlook.com",
      url: "www.itgam.com/zrh",
    }
  );
});

module.exports = router;
