<?php 

 define('DB_HOST', 'testingdb.clictest.com'); 
 define('DB_NAME', 'clictest');
 define('DB_USER','appsadmin'); 
 define('DB_PASSWORD','inf0tree#99');
 
 $con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error());
 $db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error()); 
 
 function registerUser() 
 { 
 
 
 
 $userName = $_POST['username'];
 $email = $_POST['email']; 
 $password = md5($_POST['password']); 
 $mobile = $_POST['phone']; 
 $companyname = $_POST['companyname']; 
 
 /* $userName = 'test';
 $email = 'test@gmail.com'; 
 $password = md5('12345');
 $mobile = '123456789'; */
 
 $creadteddate  = date('Y-m-d H:i:s');
 
 //users user_project,user_role,
 
 $query = "INSERT INTO user (USER_NAME,FIRST_NAME,SUR_NAME,EMAIL_ADDRESS,LANDLINE,MOBILE,PASSWORD,CREATED_BY,CREATED_DATE,MODIFIED_BY,MODIFIED_DATE,IS_PASSWORD_CHANGE_REQUIRED,password_change_date,IMPORTED_FROM_LDAP,is_disabled,attempts,nda,DOMAIN,EXPERIENCE,NO_OF_PROJECTS_WORKED) VALUES 
  ('$userName','$userName','$userName','$email','$mobile','$mobile','$password','1',
  '$creadteddate','1','$creadteddate','0',
  '$creadteddate','0','0','0','0','$companyname','0','0')"; 
 
	$data = mysql_query ($query)or die(mysql_error()); 
 
 $data1 = mysql_query( "SELECT LAST_INSERT_ID() as id" ); 
 $details1 = mysql_fetch_array($data1); 
 $userId = $details1['id']; 
 
 /* addd tenant for a user */
 
 $query = "INSERT INTO user_tenant (USER_ID,TENANT_ID,CREATED_BY,CREATED_DATE,MODIFIED_BY,MODIFIED_DATE) VALUES 
  ('$userId ','1','1','$creadteddate','1','$creadteddate')"; 
 $data = mysql_query ($query)or die(mysql_error()); 

 /* addd role to a user */

 $query = "INSERT INTO user_role(USER_ID,ROLE_ID,CREATED_BY,CREATED_DATE,MODIFIED_BY,MODIFIED_DATE) VALUES 
  ('$userId ','3','29','$creadteddate','1','$creadteddate')"; 
 $data = mysql_query ($query)or die(mysql_error());  

 if($data) { 
	 
	  header("Location:thankyou.html"); 
	 
	 } 
 
 } 
 
 
 function SignUp()
 { 
	if(!empty($_POST['user'])) 
	 //checking the 'user' name which is from Sign-Up.html, is it empty or have some text 
	 { 
	 
	 $query = mysql_query("SELECT * FROM websiteusers WHERE userName = '$_POST[user]' AND pass = '$_POST[pass]'") or die(mysql_error()); 
	 
	 if(!$row = mysql_fetch_array($query) or die(mysql_error())) { 
	 
		resgisterUser(); 
	 }
	 else {
		 echo "SORRY...YOU ARE ALREADY REGISTERED USER..."; 
		 } 
		 } 
}

 if(isset($_POST['submit'])) 
		 { 
	 registerUser(); 
		 } 
		 
		 
 ?>

