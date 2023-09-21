document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  let currentPage = 1;

  // Function to add more list items
  function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `List Item ${currentPage * 10 + i}`;
      list.appendChild(listItem);
    }
    currentPage++;
  }

  // Initial load with 10 items
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `List Item ${i}`;
    list.appendChild(listItem);
  }

  // Detect when the user reaches the end of the list
  list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addMoreItems();
    }
  });
});
