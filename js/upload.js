function encodeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const arrayBuffer = event.target.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        const base64Data = btoa(String.fromCharCode.apply(null, uint8Array));
        const encodedFile = `data:${file.type};base64,${base64Data}`;
        resolve(encodedFile);
      };
      reader.onerror = (event) => {
        reject(event.target.error);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  document.getElementById('UploadFile').addEventListener('click', handleUpload);

  document.getElementById('UploadFile').addEventListener('click', handleUpload);

function handleUpload() {
  const requirementType = document.getElementById('requirement-type').value;
  const fileInput = document.getElementById('uploadRequirement');
  
  if (fileInput.files.length === 0) {
    alert('Please select a file to upload.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const fileContent = event.target.result;
    const fileName = file.name;

    const formData = {
      file: fileContent,
      requirementType: requirementType,
      fileName: fileName,
      UserID: 8
    };

    console.log(formData);

    // Make a POST request to the backend
    fetch('http://192.168.254.170:8082/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log(data);
        // Optionally, close the modal
        $('#uploadRequirements').modal('hide');
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  reader.readAsArrayBuffer(file);
}