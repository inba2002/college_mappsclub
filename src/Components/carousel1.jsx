import React from "react";
import Sdata2 from "./Sdata2";
import { Carousel } from "bootstrap";
import s1 from "../../src/assests/s1.jpg";
import s2 from "../../src/assests/s2.jpg";
import s3 from "../../src/assests/s3.jpg";
const Carousel1 = (props) =>{
    return (
        <>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner align-center"style={{width:"90%",margin:"auto"}}>
    <div class="carousel-item active" data-bs-interval="4000">
      <a href="https://sairamit.edu.in/"><img src={s1} class="d-block w-100 h-100" alt={s1}></img></a>
      <div class="carousel-caption d-none d-md-block">
        <h5>Event 1</h5>
        <p>describe the event</p>
        <a href="https://sairamit.edu.in/">Annexure</a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <a href="https://sairamit.edu.in/"><img src={s2} class="d-block w-100 h-100" alt="..."></img></a>
      <div class="carousel-caption d-none d-md-block">
      <h5>Event 2</h5>
        <p>describe the event</p>
        <a href="https://sairamit.edu.in/">Annexure</a>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <a href="https://sairamit.edu.in/"><img src={s3} class="d-block w-100 h-100" alt="..."></img></a>
      <div class="carousel-caption d-none d-md-block">
      <h5>Event 3</h5>
        <p>describe the event</p>
        <a href="https://sairamit.edu.in/">Annexure</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Carousel1;