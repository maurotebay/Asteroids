'use strict';

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;        //KeyCodes
var KEY_DOWN = 40;
var KEY_SPACE = 32;
var KEY_ENTER = 13;

var canvas = null, ctx = null;  //Canvas and context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var linea = 20;


var lastPress = null;
var pressing = [];          //Keys pressed array

var player = null;
var asteroids = [];
var score = 0;
var showControls = false;
var maxDistance = 0;
var maxSpeed = 10;

var radians = null;

var aTimer = 0;             //Animation timer
var shots = [];
var explosion = [];

var scenes = [];
var currentScene = 0;

var wave = 1;
var waveTimer = 40;
var basicAsteroidsNum = 2;

var highScores = [];
var newScore = null;
var name;
var posHighScore = 10;


var touches = [];
var isTouching = false;
var x = 0;
var y = 0;
var btnShoot = null;
var btnPause = null;

var pause = false;
var pauseTimer = 0;
var lives = 0;
var isCrashed = false;

var spritesheet = new Image();
var background = new Image();           //Spriteshits and their respective sources
spritesheet.src = 'assets/asteroids.png';
background.src = 'assets/background.jpg';

var arrowKeys = new Image();
var spacebar = new Image();
var enter = new Image();
arrowKeys.src = 'assets/arrowKeys.png';
spacebar.src = 'assets/spacebar.png';
enter.src = 'assets/enter.png';