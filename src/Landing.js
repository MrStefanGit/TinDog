import React from 'react'
import "./Landing.css"
import { Helmet } from "react-helmet";

import bizinsider from "./images/bizinsider.png";
import dog_img from "./images/dog-img.jpg";
import iphone6 from "./images/iphone6.png";
import lady_img from "./images/lady-img.jpg";
import mashable from "./images/mashable.png";
import tech_crunch from "./images/TechCrunch.png";
import tnw from "./images/tnw.png";
import img from "./images/img.jpeg";





function Landing() {
        return (
            <div>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>TinDog</title>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,400,700,900|Ubuntu&display=swap" rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/fab086404b.js" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="css/styles.css" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossorigin="anonymous"
                    />
                </Helmet>
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
                    <a class="nav-link" href="/login">Log In</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/register">Sign Up</a>
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
                <img class="title-img" src={img} alt="iphone-mockup"></img>
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
                <img class="test1" src={dog_img} alt="dog-profile"></img>
                <em>Pebbles, New York</em>
            </div>
            <div class="carousel-item">
                <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                <img class="test2" src={lady_img} alt="lady-profile"></img>
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
    <img class="press-img" src={tech_crunch} alt="tc-logo"></img>
    <img class="press-img" src={tnw} alt="tnw-logo"></img>
    <img class="press-img" src={bizinsider} alt="biz-insider-logo"></img>
    <img class="press-img" src={mashable} alt="mashable-logo"></img>
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

<footer id="footer">
    <div class="container-fluid">
        <i class="footer-fa fab fa-twitter"></i>
        <i class="footer-fa fab fa-facebook-f"></i>
        <i class="footer-fa fab fa-instagram"></i>
        <i class="footer-fa fas fa-envelope"></i>
        <p>© Copyright 2018 TinDog</p>
    </div>
</footer>
            </div>
        );
}

export default Landing
