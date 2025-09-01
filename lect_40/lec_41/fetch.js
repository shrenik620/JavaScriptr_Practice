//    the fetch() function in JavaScript is your go-to tool for making HTTP requests—whether you're pulling data from an API, submitting a form, or syncing with a backend. It’s modern, promise-based, and much cleaner than the old XMLHttpRequest.


// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // or .text(), .blob(), etc.
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Fetch error:', error));



//    How It Works
// - fetch() returns a Promise that resolves to a Response object.
// - You then use .json(), .text(), or other methods to extract the actual data.
// - It doesn’t throw errors for HTTP status codes like 404—so you need to check response.ok manually.



// Using async/await
// async function getData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     if (!response.ok) throw new Error('HTTP error ' + response.status);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch failed:', error);
//   }
// }




