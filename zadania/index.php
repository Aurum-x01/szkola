<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            width: 100%;
            height: 100vh;
            margin: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(135deg, #00ffddff, blue);
        }

        form {
            display: flex;
            flex-direction: column;
            background-color: #131313;
            color: white;
            padding: 20px;
            border-radius: 20px;
            gap: 2px;
        }

        form input[type="text"],
        input[type="number"] {
            padding: 5px;
            border-radius: 10px;
        }

        form input[type="sumbit"] {
            background-color: black;
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

<body>

    <header>
        <h2>Menu</h2>
        <a href="wyswietl_t.php">Dane w tablice</a>
        <a href="wyswietl_l.php">Dane w liście</a>
        <a href="wyswietl_d.php">Dane w divach</a>
    </header>

    <form action="dodac.php" method="post">
        <label for="tytul">Tytul: </label> <input type="text" name="tytul" id="tytul" placeholder="Wpisz tytul" minlength="1" maxlength="50" required>
        <label for="gatunek">Gatunek: </label> <input type="text" name="gatunek" id="gatunek" placeholder="Wpisz gatunek" minlength="1" maxlength="50" required>
        <label for="rok">Rok: </label> <input type="number" name="rok" id="rok" placeholder="Wpisz rok" minlength="4" maxlength="4" required>
        <label for="ocena">Ocena: </label> <input type="number" name="ocena" id="ocena" min="1" max="10" value="10" placeholder="Wpisz ocenę" required>
        <input type="submit">
    </form>
</body>

</html>