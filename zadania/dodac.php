<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $tytul = $_POST["tytul"];
    $gatunek = $_POST["gatunek"];
    $rok = $_POST["rok"];
    $ocena = $_POST["ocena"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "filmy";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn) {
    } else {
    }

    $sql = "INSERT INTO filmy (tytul, gatunek, rok, ocena) VALUES ('$tytul', '$gatunek', '$rok', '$ocena')";

    if (mysqli_query($conn, $sql)) {
        echo "Dane o filmie zostały zapisane <br> Za 5 sekund będziesz przekierowany na stronę główną";
    } else {
        echo "Nie udało się zapisać film";
    }

    mysqli_close($conn);
    ?>

    <script>
        setTimeout(function() {
            window.location.href = "index.php";
        }, 5000);
    </script>
</body>

</html>