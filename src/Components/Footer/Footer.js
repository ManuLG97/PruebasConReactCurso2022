function formataboutus(text) {
    return text.presentacion + ' ' + text.lastName;
  }

  
  
  function Footer() {
    const text = {
      presentacion: 'Somos un grupo de programadores llamados ',
      lastName: 'Manuel López, Andy y Rodolfo'
    };

    const element = (
      <div>
    Llama al 666 para cualquier duda
      </div>
    );
    
    return (
      <div className="Footer">       
        <h1>Hola, {formataboutus(text)}</h1>
        <div>{element}</div>
      </div>
    );
  }
  
  
  
  
  export default Footer;