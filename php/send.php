<?php
error_reporting(0);
if(!$_POST) 
exit;
require_once('PHPMailer-master/class.phpmailer.php');
require_once('PHPMailer-master/class.smtp.php');

$mail = new PHPMailer(); 
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host = "mail.infotreesolutions.com";
$mail->Port = 587;
//$mail->Port = 26;
$mail->Username = "dev@infotreesolutions.com";
$mail->Password = "infotree";
$mail->SetFrom('contact@testpace.com', 'TestPace');    
if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['frmaction']=='contact'){
	$mail->Subject = 'TestPace Contact Us Page';
	$sendEmailAddress = 'contact@testpace.com';
	$sendEmailName = "TESTPACE";
	$messageBody = '<p><strong>Dear Admin</strong>,</p>';
	$messageBody .= '<p>You have received the following details from "TestPace" Contact Us Page.</p>';
	$messageBody .= '<p><strong>Name:</strong>'.$_POST['txtname'].'</p>';
	$messageBody .= '<p><strong>Phone:</strong>'.$_POST['txtphone'].'</p>';
	$messageBody .= '<p><strong>Email:</strong>'.$_POST['txtemail'].'</p>';
	$messageBody .= '<p><strong>Message:</strong>'.$_POST['txtmessage'].'</p><br/>';
	$messageBody .= '<p><strong>Regards:</strong><br/>TestPace</p>';
	$mail->MsgHTML($messageBody);
	$mail->AddAddress($sendEmailAddress, $sendEmailName);
	if($mail->Send()) 
      echo "<span class='success-msg'>Thank you for your interest in TestPace. We will get back to you within 24 hours.</span>";
	else 
	  echo "<span class='error-msg'>Sorry your message not sent, Try again Later.</span>";

}elseif($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['frmaction']=='singup'){
	$mail->Subject = 'TestPace Sign Up Page';
	$sendEmailAddress = 'contact@testpace.com';
	$sendEmailName = "TESTPACE";
	$messageBody = '<p><strong>Dear Admin</strong>,</p>';
	$messageBody .= '<p>You have received the following details from "TestPace" Sign Up Page.</p>';
	$messageBody .= '<p><strong>Full Name:</strong>'.$_POST['sname'].'</p>';
	$messageBody .= '<p><strong>Business Phone:</strong>'.$_POST['sphone'].'</p>';
	$messageBody .= '<p><strong>Business Email:</strong>'.$_POST['semail'].'</p>';
	$messageBody .= '<p><strong>Company Name:</strong>'.$_POST['scompanyname'].'</p><br/>';
	$messageBody .= '<p><strong>Regards:</strong><br/>TestPace</p>';
	$mail->MsgHTML($messageBody);
	$mail->AddAddress($sendEmailAddress, $sendEmailName);
	if($mail->Send()) 
      echo "<span class='success-msg'>Thank you for requesting a Free Trial. We will contact you shortly to help you get started!.</span>";
	else 
	  echo "<span class='error-msg'>Sorry your message not sent, Try again Later.</span>";

}

exit;
?>