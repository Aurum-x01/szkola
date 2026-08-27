<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        header {
            position: absolute;
            top: 0px;
            background-color: #131313;
            width: 100%;
            text-align: center;
            padding: 20px;
            color: white;
        }

        header a{
            text-decoration: none;
            background-color: #3a3a3aff;
            margin: 10px;
            padding: 10px;
            border-radius: 20px;
            color: white;
            display: inline-block;
            transition: transform 0.3s, background-color 0.3s;
        }
        header a:hover{
            transform: scale(0.9);
            background-color: #5a5959ff;
        }
    </style>
</head>
<header>
    <h2>Menu</h2>
    <a href="index.php">Strona główna</a>
    <a href="wyswietl_t.php">Dane w tablice</a>
    <a href="wyswietl_l.php">Dane w liście</a>
    <a href="wyswietl_d.php">Dane w divach</a>
</header>
<body>
    <?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "filmy";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn) {
    } else {
    }

    $sql = "Select * from filmy";

    $result = mysqli_query($conn, $sql);

    echo "<ul>";

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<li>" . "ID: " . $row["id"] . ", Tytul: " . $row["tytul"] . ", Gatunek: " . $row["gatunek"] . ", Rok: " . $row["rok"] . ", Ocena: " . $row["ocena"] . "</li>";
        }
    } else {
        echo "0 results";
    }

    echo "</ul>";


    mysqli_close($conn);
    ?>
</body>

</html>