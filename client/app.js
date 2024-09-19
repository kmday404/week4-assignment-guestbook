//DOM manipulation -- select the form and feedback conatiner (get elements by id / query selectors)

//FORM
//event to submit the form data

//event handler --
//prevent the default --
// a FormData object template --
//get the formValues to insert them into the formData object

//fetch the CREATE endpoint to send the formValues to the server
// fetch("localhost-url/endpoint"),
// {
//     method: ,
//     headers: ,
//     body:
// }

//event listener -- submit

//! when you sbmit /finish your assignemtn dont forget to update your local host url with the deployed url!

//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data -- get foxes//get updates from cookies API
//fetch the URL
//parse the response into json
//wrangle data if necessary

//i need to create DOM elements to contain the data -- so you might have i need to display the data on the page--
DataTransfer.forEach((item) => {
  //i need to create DOM element for each itm
  //one DOM element (h1,h2,p,li...) per piece of data/line/user (e.g. one for the username, one for the comment...)
  //example -- if I am getting username and a comment from the database, I need TWO DOM elements
  //then I need to assign th values to the text content property
  //e.g. the text content property for my h1 will have a value of the username from my database data
  //i need to append those elements to the DOM - indivdually
});
