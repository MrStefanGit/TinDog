import React from 'react'

function Home(){
    return <div>
<section id="title">
    <div class="container-fluid">

      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">tindog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#footer">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#cta"></a>
            </li>
          </ul>
        </div>
      </nav>

        <div class="row">
          <div class="col-lg-6">
            <h1 class="big-heading">Meet new and interesting dogs nearby.</h1>
            <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i> Download</button>
            <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i> Download</button>
          </div>

          <div class="col-lg-6 ">
            <img class="title-img" src="images/iphone6.png " alt="iphone-mockup"></img>
          </div>
         </div>
    </div>
  </section>



  <section id="features">
    <div class="container-fluid">
      <div class="row">
        <div class="f-box col-lg-4">
          <i class="icon fas fa-check-circle "></i>
          <h3 class="feature-title">Easy to use.</h3>  
          <p>So easy to use, even your dog could do it.</p>
        </div>
        
        <div class="f-box col-lg-4">
          <i class="icon fas fa-bullseye"></i>
          <h3 class="feature-title">Elite Clientele</h3>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>
        
        <div class="f-box col-lg-4">
          <i class="icon fas fa-heart"></i>
          <h3 class="feature-title">Guaranteed to work.</h3>
          <p>Find the love of your dog's life or your money back.</p>  
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials">
    <div id="testim-carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active container-fluid">
          <h2 class="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
          <img class="test1" src="images/dog-img.jpg" alt="dog-profile"></img>
          <em>Pebbles, New York</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img class="test2" src="images/lady-img.jpg" alt="lady-profile"></img>
          <em>Beverly, Illinois</em>
        </div>
      </div>
      <a class="carousel-control-prev" href="#testim-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#testim-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>


  <section id="press">
    <img class="press-img" src="images/TechCrunch.png" alt="tc-logo"></img>
    <img class="press-img" src="images/tnw.png" alt="tnw-logo"></img>
    <img class="press-img" src="images/bizinsider.png" alt="biz-insider-logo"></img>
    <img class="press-img" src="images/mashable.png" alt="mashable-logo"></img>

  </section>

  <section id="pricing">

    <h2 class="section-heading">A Plan for Every Dog's Needs</h2>
    <p>Simple and affordable price plans for your and your dog.</p>

    <div class="row">
      <div class="pr-col col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Chihuahua</h3>
          </div>
          <div class="card-body">
            <h2 class="price-text">Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <p class="invisible">ma enerveaza</p>
            <button type="button" class="btn btn-outline-dark btn-lg btn-block">Sign Up</button>
          </div>
        </div>
      </div>


      <div class="pr-col col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Labrador</h3>
          </div>
          <div class="card-body">
            <h2 class="price-text">$49/mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <p class="invisible">ma enerveaza</p>
            <button type="button" class="btn btn-dark btn-lg btn-block">Sign Up</button>
          </div>
        </div>
      </div>


      <div class="pr-col col-lg-4 ">
        <div class="card">
          <div class="card-header">
            <h3>Mastiff</h3>
          </div>
          <div class="card-body">
            <h2 class="price-text">$99/mo</h2>
            <p>Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button type="button" class="btn btn-dark btn-lg btn-block">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="cta">
    <div class="container-fluid">
      <h3 class="big-heading">Find the True Love of Your Dog's Life Today.</h3>
      <button type="button" class="download-button btn-lg btn btn-dark "><i class="fab fa-apple"></i> Download</button>
      <button type="button" class="download-button  btn-lg btn btn-light"><i class="fab fa-google-play"></i> Download</button>
    </div>
  </section>


    </div>
}

export default Home;