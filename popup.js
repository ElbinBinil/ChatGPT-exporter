document
  .getElementById("topicsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const topics = Array.from(
      document.querySelectorAll('input[name="topics"]:checked')
    ).map((el) => el.value);
    chrome.storage.sync.set({ topics }, function () {
      alert("Topics saved!");
    });
  });
