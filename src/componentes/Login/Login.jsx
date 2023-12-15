import "./Login.css";

const Login = () => {
  return (
    <main className="contenedorLogin d-flex">
      <div className="contenedorFormulario">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Usuario
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su usuario"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Contraseña
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su Contraseña"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button type="button" className="btnL btn-primary">
          Acceder
        </button>
      </div>
    </main>
  );
};

export default Login;
