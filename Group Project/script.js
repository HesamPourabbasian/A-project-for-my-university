document.getElementById('fileInput').addEventListener('change', function() {
    const selectedFile = document.getElementById('fileInput').files[0];
    console.log('Selected file:', selectedFile);
});
