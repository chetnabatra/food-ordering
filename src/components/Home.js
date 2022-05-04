
import React from "react";
import "./Home.css";


const Home = () => {
    return (
      <>
<div class="card bg-dark text-white border-0">
  <img class="card-img cropped" src="https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_BxTb159oIu." alt="Card image" />
  <div class="card-img-overlay d-flex flex-coloumn  align-items-center h-100">
      <div className="container ">

      
    <h5 class="card-title display-3 fw-bolder  justify-content-center mb-0">DRIVEAWAY YOUR HUNGER PANGS</h5>
    <p class=" line card-text  justify-content-center lead fs-2 ">
    TASTE THE BEST OF TOWN
    </p>
    <a href="/cart" className="btn btn-outline-light content-center" aria-current="page" ><i class="fa-solid fa-cart-shopping text-light"></i> ORDER ONLINE</a>
  </div>
</div>
</div>

</>
);


}
export default Home;