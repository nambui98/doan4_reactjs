<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin</title>
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" async>
    <link href="{{ asset('css/ionicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/baseStyle.css') }}" rel="stylesheet">
</head>

<body>
    <div id="rootAdmin"></div>
    <script src="{{ asset('js/plugin/jquery-2.2.4.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>
