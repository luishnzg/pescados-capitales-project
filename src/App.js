
import './App.css';
import FixedButton from './components/fixedButton';
import HoverBoxes from './components/hoverBoxes';
import Sections from './components/sections';
import SideMenu from './components/sideMenu';
import Ubicacion from './components/ubicacion';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <FixedButton/>
      <HoverBoxes />
      <Sections
        img="https://pescadoscapitales.cl/wp-content/uploads/2020/02/Soberbia_nos.png"
        styleBoxOrder={2}
        styleBoxGrandient="boxGradientGray-toLeft"
        title="Nosotros"
        styleTextAlign="justify"
        text1="Somos un restaurante peruano con más de 21 años de experiencia en la cocina peruana inspirada 
      en el mar y los pecados capitales."
        text2="Nos enorgullece ofrecer a nuestros clientes una experiencia culinaria única y auténtica que 
       combina los sabores y la riqueza de la costa peruana con la tentación de los pecados capitales. 
       Cada plato es cuidadosamente preparado con ingredientes frescos y auténticos para crear una fusión
        única de sabores que deleitan los sentidos. Ven y descubre por qué hemos sido reconocidos como uno 
        de los mejores restaurantes peruanos de la ciudad durante más de 21 años."

      />
      <Sections img="https://pescadoscapitales.cl/wp-content/uploads/2020/02/Gula_cart.png"
        styleBoxOrder={1}
        title="Carta"
        text1="Ofrecemos una amplia variedad de platos frescos y auténticos, desde ceviches y tiraditos hasta 
      arroces marinos y guisos. Además, nuestro menú incluye opciones de postres peruanos clásicos y tentadores para satisfacer su deseo de un dulce final a su comida. ¡Ven y déjate seducir por la riqueza de sabores y la calidad de nuestra comida peruana!"
        textButton="Carta Salon"
        styleBoxGrandient="boxGradientBlue-toRight"
        styleTextAlign="right"
      />
<Sections 
img="https://pescadoscapitales.cl/wp-content/uploads/2020/02/lujuria_plat.png"
title="Platos"
text1="18 años pecando sin culpa con lo mejor de pescados y mariscos."
styleTextAlign="right"
styleBoxOrder={1}
styleBoxGrandient="boxGradientLightBlue-toRight"

/>
      {/* <Sections img="https://pescadoscapitales.cl/wp-content/uploads/2020/02/Gula_cart.png" 
      titulo="Carta"
      texto="Ofrecemos una amplia variedad de platos frescos y auténticos, desde ceviches y tiraditos
      hasta arroces marinos y guisos. Además, nuestro menú incluye opciones de postres peruanos
      clásicos y tentadores para satisfacer su deseo de un dulce final a su comida. ¡Ven y déjate
      seducir por la riqueza de sabores y la calidad de nuestra comida peruana!"/>
      <Sections 
      img="https://pescadoscapitales.cl/wp-content/uploads/2020/02/lujuria_plat.png"
      titulo="Platos"
      texto="18 años pecando sin culpa con lo mejor de pescados y mariscos."
      divGrid="https://pescadoscapitales.cl/wp-content/uploads/2020/02/Pescados-Capitales-chile-1-400x284.jpg"
      /> */}
      <Ubicacion />
    </div>
  );
}

export default App;
