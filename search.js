const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const inputValue = this.value;
        window.location.href = findHTMLFile(inputValue);
    }
});

function findHTMLFile(query) {
    // Assuming all your HTML files are named in a consistent way
    var files = ['index.html', 'factions.html', 'file3.html']; // Add your file names here
    var matchedFile = files.find(function (file) {
        return file.toLowerCase().includes(query.toLowerCase());
    });

    if (matchedFile) {
        return matchedFile;
    } else {
        // If no matching file found, you can redirect to an error page or handle it as needed
    return window.location.pathname;
    }
}
