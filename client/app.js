console.log("test");
const form = document.querySelector("form");
const feedbackContainer = document.getElementById("feedback-container");

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  console.log(formData);
  //this should create an object whose properties will be the same as the named attributes in the inputs

  //here we are collecting our object template (formData) and parsing it into the syntax of a classic object
  const formValues = Object.fromEntries(formData);
  console.table(formValues);
try {
  const res = await fetch(
    "http://localhost:8080/reviews",
    //these are part of the object being sent to my endpoint
    {
      method: POST,
      //header = object -- property is content type: property is what the value is
      headers: { "Content-type": "application/json" },
      //what format is this in
      body: JSON.stringify(formValues),
    }
  );
  if (!res.ok){
    throw new Error("Network response failed!")
  }
}
catch (error) {
console.error("problem with fetch", error);
}
form.addEventListener("submit", handleSubmit);

renderReviews();
function renderReviews(){
//set my res to be a fetch 
//I want to fetch the data from my server endpoint (get data)
//set a variable for review data to be = the res (but make it json)
//call the function that makes it json
//select the container -- then create the feedbackContainer.forEach((review))
//review.guestName
//what am I going to call each thing 

}

// function createReviews() {
//   DataTransfer.forEach((item) => {});
// }
// INSERT INTO reviews(guest_name, check_in_date, check_out_date, travelled_from, message_to_host, favourite_moments, recommendations, rating)
//      VALUES ('${guestName}', '${checkInDate}', '${checkOutDate}', '${travlledFrom}', '${messageToHost}', '${favMoment}', '${recommendations}', '${rating}')

//event listener -- submit

//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data -- get foxes//get updates from cookies API
//fetch the URL
//parse the response into json
//wrangle data if necessary

//i need to create DOM elements to contain the data -- so you might have i need to display the data on the page--

//   //i need to create DOM element for each itm
//   //one DOM element (h1,h2,p,li...) per piece of data/line/user (e.g. one for the username, one for the comment...)
//   //example -- if I am getting username and a comment from the database, I need TWO DOM elements
//   //then I need to assign th values to the text content property
//   //e.g. the text content property for my h1 will have a value of the username from my database data
//   //i need to append those elements to the DOM - indivdually
