<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // If not, redirect to the login page
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Protected Page</title>
</head>
<body>
    <h1>Welcome to the Protected Page</h1>
    <p>This is some protected content that only logged-in users should see.</p>
    <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "permissions";

$conn = mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
    echo "Connection Failed<br>";
}
else{
    echo "Connection established<br>";
}

$sql = "SELECT * FROM `medical_leave`";
$result = mysqli_query($conn,$sql);
echo '
<table border = "">
<tr>
<th>Name</th>
<th>PRN</th>
<th>MOBILE</th>
<th>EMAIL</th>
<th>DEPARTMENT</th>
<th>CLASS</th>
<th>REASON</th>
<th>START DATE</th>
<th>END DATE</th>
<th>DESCRIPTION</th>
</tr>
 <br>';
if(mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)){
        echo '<tr><td>'.$row["name"].'</td><td>'.$row["prn"].'</td><td>'.$row["mobile"].'</td><td>'.$row["email"].'</td><td>'.$row["department"].'</td><td>'.$row["class"].'</td><td>'.$row["reason"].'</td><td>'.$row["startdate"].'</td><td>'.$row["enddate"].'</td><td>'.$row["description"].'</td></tr><br>';
    }
}
else {
    echo "0 rows";
}
echo '</table>';
//selection

?>
</body>
</html>
