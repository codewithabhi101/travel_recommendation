function searchPlaces() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");

  if (input.includes("beach")) {
    results.innerHTML = `
      <h2>Beach Recommendations</h2>
      <img src="images/beach1.jpg" width="250">
      <img src="images/beach2.jpg" width="250">
    `;
  }
  else if (input.includes("temple")) {
    results.innerHTML = `
      <h2>Temple Recommendations</h2>
      <img src="images/temple1.jpg" width="250">
      <img src="images/temple2.jpg" width="250">
    `;
  }
  else if (input.includes("india")) {
    results.innerHTML = `
      <h2>India Recommendations</h2>
      <img src="images/india1.jpg" width="250">
      <img src="images/india2.jpg" width="250">
    `;
  }
  else {
    results.innerHTML = "<p>No results found</p>";
  }
}

function clearResults() {
  document.getElementById("results").innerHTML = "";
}