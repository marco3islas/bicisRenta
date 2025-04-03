class MyHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BICISENRENTA</title>


    <link rel="stylesheet" href="css/styles.css">


    <link rel="stylesheet" href="css/animate.css">
    <script src="https://kit.fontawesome.com/03231c08d1.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Cherry+Cream+Soda|Nunito:400,600,700|Ubuntu:400,400i,500,700,700i&display=swap" rel="stylesheet">



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>


</head>


`
  }
}
customElements.define('my-head', MyHead);
