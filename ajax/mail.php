<?php
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$inversion = $_POST['inversion'];
$message = $_POST['message'];

$to = 'aminwejebes@hotmail.com';
$subject = 'Nuevo envio de formulario LP Goes';

$message = '<strong>Name : </strong>'.$f_name.' '. $l_name .'<br/><br/>';
if($phone != ''):
    $message = '<strong>Phone : </strong>'.$phone.'<br/><br/>';
endif;

$message .= $message.'<br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;
exit();