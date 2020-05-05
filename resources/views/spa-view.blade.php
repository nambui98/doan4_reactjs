<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Naturix</title>
    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
    <link href="{{ asset('css/plugin/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugin/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugin/bootstrap-select.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugin/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugin/subscribe-better.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugin/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/plugin/jquery.mCustomScrollbar.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/theme.css') }}" rel="stylesheet">
</head>

<body>
    <div id="root"></div>
    <script src="{{ asset('js/plugin/jquery-2.2.4.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>

    <script src="{{ asset('js/plugin/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/plugin/bootstrap-select.min.js') }}"></script>
    <!-- <script src="{{ asset('js/plugin/owl.carousel.min.js') }}"></script> -->
    <script src="{{ asset('js/plugin/jquery.plugin.min.js') }}"></script>
    <script src="{{ asset('js/plugin/jquery.countdown.js') }}"></script>
    <script src="{{ asset('js/plugin/jquery.subscribe-better.min.js') }}"></script>
    <script src="{{ asset('js/plugin/jquery.mCustomScrollbar.concat.min.js') }}"></script>
    <script src="{{ asset('js/theme.js') }}"></script>
</body>

</html>
