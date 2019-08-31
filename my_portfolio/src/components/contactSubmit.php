<?php
    $myemail = 'contact@nedim.info';
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $to = $mymail;
        $email_subject = "Nedim Portfolio Contact Form from $name";
        $email_body = "You have received a new message. \n\n".
        "Here are the details: \nName: $name\n".
        "Email: $mailFrom\n\nMessage:\n $message\n\n";
        $headers = "From: $mailFrom";
        mail($to,$email_subject,$email_body,$headers);
        header("Location: contact.php?mailsend");
        $message = 'Submitted Succesfully.'
    } else {
        echo 'Something Went wrong, try again!'
    }
?>