<?php
session_start();

if (isset($_POST['submit'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];

	// Here you would typically check the username and password against a database or other storage method
	// For this example, we'll just use a hardcoded username and password

	if ($username == 'example' && $password == 'password') {
		// The username and password are correct, so set the session variable and redirect to a protected page
		$_SESSION['loggedin'] = true;
		header("Location: protected_page.php");
		exit;
	} else {
		// The username and password are incorrect, so show an error message
		$error_message = "Incorrect username or password";
	}
	if ($username == 'example1' && $password == 'password1') {
		// The username and password are correct, so set the session variable and redirect to a protected page
		$_SESSION['loggedin'] = true;
		header("Location: protected_page1.php");
		exit;
	} else {
		// The username and password are incorrect, so show an error message
		$error_message = "Incorrect username or password";
	}
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Login Form</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Online Permission Portal</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/HeHe/form.html">Student Home</a></li>
            
          </ul>
        </nav>
      </header>
    
	<div class="login-form">
		<h2>Admin Login</h2>
		<form method="post" action="login.php">
			<label for="username">Email/Username:</label>
			<input type="text" id="username" name="username" required>
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required>
			<button type="submit" name="submit">Login</button>
            <?php
			if (isset($error_message)) {
				echo "<div class='error-message'>$error_message</div>";
			}
			?>
		</form>
	</div>
</body>
</html>
