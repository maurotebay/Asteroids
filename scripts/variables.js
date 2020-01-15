'use strict';

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;        //KeyCodes
var KEY_DOWN = 40;
var KEY_SPACE = 32;
var KEY_ENTER = 13;

var canvas = null, ctx = null;  //Canvas and context

var lastPress = null;
var pressing = [];          //Keys pressed array

var player = null;
var asteroids = [];
var score = 0;
var showControls = false;

var radians = null;

var aTimer = 0;             //Animation timer
var shots = [];
var explosion = [];

var scenes = [];
var currentScene = 0;

var wave = 1;
var waveTimer = 40;

var pause = false;
var lives = 0;

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