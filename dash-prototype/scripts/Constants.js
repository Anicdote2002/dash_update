// Get JS objects of the HTML elements
let rpm = document.getElementById("rpm");
let mph = document.getElementById("mph");//added by Ani
let MCTemp = document.getElementById("MCTemp");
let motorTemp = document.getElementById("motorTemp");
let maxMotorTemp = document.getElementById("maxMotorTemp");
let maxCellTemp = document.getElementById("maxCellTemp");
let minCellTemp = document.getElementById("minCellTemp");
let soc = document.getElementById("soc");
let temps = document.getElementById('temps');
let tempTable = document.getElementById("tempTable");
let showTemps = document.getElementById("showTemps");
let rpmPath = document.getElementById("rpmPath");
let rpmScale = document.getElementById('rpmScale');
let showSOC = document.getElementById("showSOC");
let socBG = document.getElementById("socBG");
let modal = document.getElementById('myModal');
let rpmGauge = document.getElementById('rpmGauge');
let debugMenu = document.getElementById('debugMenu');
let debugToggle = document.getElementById('debugToggle');
let gaugesMenu = document.getElementById('gaugesMenu');
let rpmToggle = document.getElementById('rpmToggle');
let socToggle = document.getElementById('socToggle');
let tempsToggle = document.getElementById('tempsToggle');


// Get JS objects of debug screen elements
let debugrpm = document.getElementById("debugrpm");
let debugsoc = document.getElementById("debugsoc");
let debugmctemp = document.getElementById("debugmctemp");
let debugmotortemp = document.getElementById("debugmotortemp");
let debughcelltemp = document.getElementById("debughcelltemp");
let debuglcelltemp = document.getElementById("debuglcelltemp");
let debughmtrtemp = document.getElementById("debughmtrtemp");
let debugdcl = document.getElementById("debugdcl");
let debugmph = document.getElementById("debugmph");
let debugdcbus = document.getElementById("debugdcbus");
let debugdcbusa = document.getElementById("debugdcbusa");
let debugError = document.getElementById("debugError");
let debug3qtemp =document.getElementById("debug3qtemp");//new line added by Aniruddh

// Set initial values for data
let curr_soc = 92.0;
let curr_rpm = 1000;
let curr_mctemp = 98.0;
let curr_motortemp = 30.0;
let curr_maxmotortemp = 30.0;
let curr_maxcelltemp = 120.0
let curr_mincelltemp = 102.0
let curr_dcbusv = 0;
let curr_dcbusa = 0;
let counter = 51; // analagous to "temp" on BOLT_3_Dash

let MAX_RPM = 8000.0;
let RPM_PACE = 2500.0;
let INCH_TO_MILE = 60.0 / 63360.0;
let PI = 3.14159265358979;
let GEAR_RATIO = 17.0 / 55.0 ;//49 orginial
let WHEEL_DIAMETER = 25.66;
