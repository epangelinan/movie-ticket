//creates ticket object to produce final price
function Ticket(price){
  this.price = price;
  this.discounts = false;

  //this.quantity = quantity;
}
//method to calculate final ticket price
Ticket.prototype.finalTicketPrice = function(age){
  var taxes = this.price * .09;

  if (age === 1 ){
    this.price = 0;
  } else if (age === 2){
    this.price -= 2;
    taxes = this.price * .09;
    this.price += taxes;
  } else if (age === 5){
    this.price -= 3;
    taxes = this.price * .09;
    this.price += taxes;
  } else {
    this.price += taxes;
  }
  console.log(this.price);
}

//creates human object whose age determines discounts applied to ticket price
function Human(age){
  this.age = age;
  this.student = false;
  this.military = false;
}
//creates movie object that holds details of movie as well as flat fee
function Movie(rating, title, director, star, time, price){
  this.rating = rating;
  this.title = title;
  this.director = director;
  this.star = star;
  this.time = time;
  this.price = price;
}

//begin jQuery
$(document).ready(function() {
  //gathers needed data to variables for processing specific to movie type
  $("#alien").submit(function() {
    event.preventDefault();
    var selectedMovie = new Movie(
      "R",
      "Alien",
      "Ridley Scott",
      "Sigourney Weaver",
      $("#alien .movie-time").val(),
      8
    );
    console.log(selectedMovie);
    var human = new Human(parseInt($("#alien .form-age").val()));
    //console.log(human.age);
    var ticket = new Ticket(selectedMovie.price);
    ticket.finalTicketPrice(human.age);
    //console.log(ticket);
  });

  $("#wonder-woman").submit(function() {
    event.preventDefault();
    var selectedMovie = new Movie(
      "PG-13",
      "Wonder Woman",
      "Patty Jenkins",
      "Gal Gadot",
      $("#wonder-woman .form-time").val(),
      12);
    console.log(selectedMovie);
    var human = new Human(parseInt($("#wonder-woman .form-age").val()));
    //console.log(human.age);
    var ticket = new Ticket(selectedMovie.price);
    ticket.finalTicketPrice(human.age);
    //console.log(ticket);
  });



});
