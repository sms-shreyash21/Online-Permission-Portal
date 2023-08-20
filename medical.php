<?php
// Database connection details
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'permissions';

// Connect to the database
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process the form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    
    

    
        $name = $_POST['name'];
        $prn = $_POST['prn'];
        $mob = $_POST['mob'];
        $email = $_POST['email'];
        $dept = $_POST['dept'];
        $class = $_POST['class'];
        
        $reason = $_POST['reason'];
        $startdate = $_POST['start-date'];
        $enddate = $_POST['end-date'];
        $description = $_POST['description'];

        
        

        $sql = "INSERT INTO medical_leave (name, prn, mobile, email, department, class, reason, startdate, enddate, description) VALUES ('$name', '$prn','$mob', '$email','$dept','$class','$reason', '$startdate', '$enddate', '$description')";
    }
   
    
    if (mysqli_query($conn, $sql)) {
        echo 'Form submitted successfully';
    } else {
        echo 'Error: ' . $sql . '<br>' . mysqli_error($conn);
    }


// Close the database connection
mysqli_close($conn);
?>
