<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <title>Wild Rydes</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Serverless web application example">
    <meta name="author" content="">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://js.arcgis.com/4.6/esri/css/main.css">
    <link rel="stylesheet" href="/css/ride.css">
    <link rel="stylesheet" href="/css/message.css">

    <style>
        .map-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            margin-top: 30px;
        }

        .map-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    </style>
</head>

<body>

    <div class="info panel panel-default">
        <div class="panel-heading">
            <button id="request" class="btn btn-primary" disabled="disabled">Set pickup</button>
            <div class="dropdown pull-right">
                <button id="accountLink" class="btn" type="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Account <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="accountLink">
                    <li><a id="signOut" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
        <div class="panel-body">
            <ol id="updates">
                <li>Welcome! Click the map to set your pickup location.</li>
            </ol>
        </div>
    </div>

    <div id="noApiMessage" class="configMessage" style="display: none;">
        <div class="backdrop"></div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Successfully Authenticated!</h3>
            </div>
            <div class="panel-body">
                <p>This page is not functional yet because there is no API invoke URL configured in <a
                        href="/js/config.js">/js/config.js</a>. You'll configure this in Module 3.</p>
                <p>In the meantime, if you'd like to test the Amazon Cognito user pool authorizer for your API, use the
                    auth token below:</p>
                <textarea class="authToken"></textarea>
            </div>
        </div>
    </div>

    <div id="noCognitoMessage" class="configMessage" style="display: none;">
        <div class="backdrop"></div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">No Cognito User Pool Configured</h3>
            </div>
            <div class="panel-body">
                <p>There is no user pool configured in <a href="/js/config.js">/js/config.js</a>. You'll configure this
                    in Module 2 of the workshop.</p>
            </div>
        </div>
    </div>

    <div id="main">
        <div id="map"></div>
    </div>

    <!-- 🌍 Google Map Section -->
    <div class="container">
        <h3>Our Exact Location (Google Map)</h3>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14030.943325469247!2d77.52754575!3d28.457378699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745647783165!5m2!1sen!2sin"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div id="authTokenModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="authToken">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Your Auth Token</h4>
                </div>
                <div class="modal-body">
                    <textarea class="authToken"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="js/vendor/jquery-3.1.0.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/vendor/aws-cognito-sdk.min.js"></script>
    <script src="js/vendor/amazon-cognito-identity.min.js"></script>
    <script src="https://js.arcgis.com/4.6/"></script>
    <script src="js/config.js"></script>
    <script src="js/cognito-auth.js"></script>
    <script src="js/esri-map.js"></script>
    <script src="js/ride.js"></script>
</body>

</html>
