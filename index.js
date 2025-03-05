document.getElementById('scanButton').addEventListener('click', function() {
    const fileInput = document.getElementById('exeFileInput');
    const output = document.getElementById('output');

    if (fileInput.files.length === 0) {
        output.textContent = 'Please select an EXE file.';
        return;
    }

    const file = fileInput.files[0];
    if (file.type !== 'application/x-msdownload') {
        output.textContent = 'Please select a valid EXE file.';
        return;
    }

    // Simulate scanning and displaying code (not actual code extraction)
    output.textContent = 'Scanning...\n';
    setTimeout(() => {
        output.textContent += 'This is a placeholder for the code extracted from the EXE file.\n';
        output.textContent += 'Actual code extraction is not possible in the browser due to security restrictions.';
    }, 2000);
});
