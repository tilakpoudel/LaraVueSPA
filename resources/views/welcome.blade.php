<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lara Vue FullStack</title>
    <link rel="stylesheet" href="{{asset('css/all.css')}}">

</head>

<body>
    <div id="app">
        <main-app></main-app>
    </div>
</body>

<script src="{{mix('/js/app.js')}}"></script>

</html>