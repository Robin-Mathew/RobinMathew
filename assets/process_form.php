<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $to = "robin.mathew1908@gmail.com"; 
    $headers = "From: $email";
    
    $mailSent = mail($to, $subject, $message, $headers);
    
    if ($mailSent) {
        echo "Thank you for your message! We'll get back to you soon.";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>





