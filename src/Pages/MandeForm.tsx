  import "../Styles/MandeForm.css";
  import logo from "/Img/logo etiqueta gracias por tu compra minimalista blanco negro y rojo.png";



    function MandeForm() {
      return (
        <div className="container-form-enviado container-fluid" >
          <div className="container-logo "
          style={{ backgroundImage: `url(${logo})` }} >
          </div>
          <div className="titulo-form">
            ¡GRACIAS!
          </div>
        </div>
      );
    
  }

  export default MandeForm;