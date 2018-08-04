<?php
if(isset($_POST['reservation_email'])){
		$mailTo = "elixir@jellythemes.com";
		$subject = "mail from web";
		$body = "New message from web
<br><br>
FROM: ".$_POST['reservation_email']."<br>
NAME: ".$_POST['reservation_name']."<br>
PHONE: ".$_POST['reservation_phone']."<br>
DATE: ".$_POST['date']."<br>
TIME: ".$_POST['time']."<br>
PARTY: ".$_POST['party']."<br>
COMMENTS: ".$_POST['reservation_message']."<br>";	
		$headers = "To: Elixir <".$mailTo.">\r\n";
		$headers .= "From: ".$_POST['author']." <".$_POST['reservation_email'].">\r\n";
		$headers .= "Content-Type: text/html";
		//envio destinatario
		$mail_success =  mail($mailTo, utf8_decode($subject), utf8_decode($body), $headers);		
}
?>  