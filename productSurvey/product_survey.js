function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const Experince = document.getElementById('ExperinceText').value;
    
    setTimeout(()=> alert('Thank you for your valuable feedback'),0);
    
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice1').innerHTML = productType;
    document.getElementById('userProductChoice2').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperince').innerHTML = Experince;
    
    document.getElementById('userInfo').style.display = 'block';
  }

  document.getElementById('submitBtn').addEventListener('click', submitFeedback);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior if needed
      submitFeedback();
    }
  });