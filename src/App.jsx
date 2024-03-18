import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then(({ data }) => {
        setProducts(data.response.docs);
        setNext(data.response.nextPage);
        setPrev(data.response.prevPage);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/real">
                Real
              </a>
              <a className="nav-link" href="/products/form" id="formButton">
                Form
              </a>
              <a
                className="nav-link"
                href="/sessions/register"
                id="registerButton"
              >
                Register
              </a>
              <a className="nav-link" href="/sessions/login" id="loginButton">
                Login
              </a>
              <a className="nav-link" href="/orders" id="ordersButton">
                Orders
              </a>
              <span className="btn btn-danger fs-5 m-1" id="signout">
                Sign out
              </span>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <h1 className="text-center pt-5 pb-3">
          Tienda de productos informaticos
        </h1>
        <img
          width="100%"
          src="https://www.infinit.com.uy/imgs/presentaciones/presentaciones0_6982.jpg?1698897136"
        />

        <section className=" py-3 position-relative d-flex justify-content-center align-items-center">
          <input
            id="text"
            type="text"
            className="p-2 text-center"
            placeholder="search..."
          />
          <svg
            id="search"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </section>

        <section>
          <article
            className="d-flex flex-wrap justify-content-center"
            id="products"
          >
            {products.map((each) => (
              <div key={each._id} className="card m-2" style={{ width: 250 }}>
                <img
                  src={each.photo}
                  className="card-img-top object-fit-cover"
                  alt={each.title}
                />
                <h5 className="p-2 text-center card-title">{each.title}</h5>
              </div>
            ))}
          </article>
        </section>

       
  {/* <span className="w-100 d-flex justify-content-center">
    {prev &&
      <a
        className="btn btn-primary fs-5 m-4 mt-0"
        href="/?title={{filter}}&page={{prev}}"
      >PREV</a>
    }
    {next &&
      <a
        className="btn btn-primary fs-5 m-4 mt-0"
        href="/?title={{filter}}&page={{next}}"
      >NEXT</a>
     } 
  </span>  */}

      </main>
    </>
  );
}

export default App;
