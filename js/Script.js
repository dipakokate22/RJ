
// (function() {
//     emailjs.init("voBGRHanqiAfTjj-w"); // Replace with your Public Key
//   })();

//   function sendMail() {
//     let params = {
//         first_name: document.getElementsByName("first_name")[0].value,
//         last_name: document.getElementsByName("last_name")[0].value,
//         email: document.getElementsByName("email")[0].value,
//         subject: document.getElementsByName("subject")[0].value,
//         message: document.getElementsByName("message")[0].value
//     };

//     emailjs.send("service_bpfmzvc", "template_tq7p8u8", params)
//     .then(function(response) {
//         alert("Email sent successfully!");
//         document.getElementById("contactForm").reset(); // Reset form
//     }, function(error) {
//         alert("Failed to send email. Please try again.");
//     });
//   }

//   // Attach sendMail function to the form submit event
//   document.getElementById("contactForm").addEventListener("submit", function(event) {
//       event.preventDefault();
//       sendMail();
//   });



//   <script type="text/javascript">
        (function() {
            emailjs.init({
                publicKey: "pmWgCaUOAdrTKgrLs",
            });
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Disable the submit button and hide any previous messages
            submitButton.disabled = true;
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Prepare the email parameters
            const templateParams = {
                // from_name: document.getElementById('name').value,
                from_first_name: document.getElementsByName("first_name").value,
                fron_last_name: document.getElementsByName("last_name").value,
                from_email: document.getElementById('email').value,
                from_subject: document.getElementsByName("subject").value,
                message: document.getElementById('message').value
            };

            // Send the email using EmailJS
            emailjs.send('service_bpfmzvc', 'template_tq7p8u8', templateParams)
                .then(function() {
                    successMessage.style.display = 'block';
                    document.getElementById('contact-form').reset();
                })
                .catch(function(error) {
                    console.error('Error:', error);
                    errorMessage.style.display = 'block';
                })
                .finally(function() {
                    submitButton.disabled = false;
                });
        });
    {/* </script> */}