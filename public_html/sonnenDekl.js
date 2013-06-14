var dat, myDay, myMonth, myYear, myHour, myMinute, JD, UT, offset, dIM, DEC;

 

function daysInMonth(m, y) {

var n=31;

m=m-1;

if ((m==0) || (m==2) || (m==4) || (m==6) || (m==7) || (m==9) || (m==11)) n=31;

if ((m==3) || (m==5) || (m==8) || (m==10)) n=30;

if (m==1) {

n=28;

if ((y % 4) == 0) n=29;

if ((y % 100) == 0) n=28;

if ((y % 400) == 0) n=29;

}

dIM=n;

}

 

function DateTime() {

var str = "On " +myYear+"/"+ myMonth+"/"+myDay+" at "+ myHour+":"+myMinute+" the declination of the Sun is "+ " " + Math.round(100*DEC)/100 + " deg";

document.myform.DateTime.value=str;

}

 

function thisHour() {

dat=new Date();

document.myform.Stunde.options[dat.getHours()].selected=true;

myHour=dat.getHours()

}

 

function thisMinute() {

dat=new Date();

document.myform.Minute.options[dat.getMinutes()].selected=true;

myMinute=dat.getMinutes()

}

 

function thisUT() {

dat=new Date()

offset=dat.getTimezoneOffset()

if (offset>=1380) offset=offset-1440

UT = myHour+(myMinute+offset)/60.0+dat.getSeconds()/3600.0

str=myHour+offset/60.0

if (myHour+offset/60.0<0) str= 24+myHour+offset/60.0

if (myHour+offset/60.0>24) str= -24+myHour+offset/60.0

str=" " + str + ":";

if (myMinute<10) str=str+"0"+myMinute

else str=str+myMinute

document.myform.UTime.value=str

}

 

function thisJulDay() {

yy = dat.getYear()

if (yy<1000) yy=yy+1900

JulianDay(dat.getDate(),dat.getMonth(),yy,UT)

document.myform.JulDay.value=JD

}

 

function thisDay() {

dat=new Date();

document.myform.Tag.options[dat.getDate()-1].selected=true;

myDay=dat.getDate()

}

 

function thisMonth() {

document.myform.Monat.options[dat.getMonth()].selected=true;

myMonth=dat.getMonth()+1

}

 

function thisYear() {

dat=new Date()

yy=dat.getYear()-1999

if (yy<0) {yy=yy+1900; myYear=dat.getYear()+1900} else myYear=dat.getYear()

document.myform.Jahr.options[yy].selected=true;

}

 

function theDay() {

daysInMonth(myMonth,myYear)

for (var i=0;i<document.myform.Tag.options.length;i++)

{if (document.myform.Tag.options[i].selected==true) myDay=i+1}

if (dIM<myDay) {myDay=dIM;document.myform.Tag.options[dIM-1].selected=true}

}

 

function theMonth() {

for (var i=0;i<document.myform.Monat.options.length;i++)

{if (document.myform.Monat.options[i].selected==true) myMonth=i+1}

}

 

function theYear() {

for (var i=0;i<document.myform.Jahr.options.length;i++)

{if (document.myform.Jahr.options[i].selected==true) myYear=i+1999}

daysInMonth(myMonth,myYear)

if (dIM<myDay) {myDay=dIM;document.myform.Tag.options[dIM-1].selected=true}

}

 

function theHour() {

for (var i=0;i<document.myform.Stunde.options.length;i++)

{if (document.myform.Stunde.options[i].selected==true) myHour=i}

}

 

function theUT() {

if (offset>=1380) offset=offset-1440

UT = myHour+(myMinute+offset)/60.0+dat.getSeconds()/3600.0

str=myHour+offset/60.0

if (myHour+offset/60.0<0) str= 24+myHour+offset/60.0

if (myHour+offset/60.0>=24) str= -24+myHour+offset/60.0

str=" " + str + ":";

if (myMinute<10) str=str+"0"+myMinute

else str=str+myMinute

document.myform.UTime.value=str

}

 

function theMinute() {

for (var i=0;i<document.myform.Minute.options.length;i++)

{if (document.myform.Minute.options[i].selected==true) myMinute=i}

}

 

function theJulDay() {

if (myYear<1900) myYear=myYear+1900

JulianDay(myDay,myMonth,myYear,UT)

document.myform.JulDay.value=JD

}

 

function JulianDay (date, month, year, UT){

if (year<1900) year=year+1900

if (month<=2) {month=month+12; year=year-1}

B = Math.floor(year/400.0) - Math.floor(year/100.0) + Math.floor(year/4.0)

A = 365.0*year - 679004.0

JD= A + B + Math.floor(30.6001*(month+1)) + date + UT/24.0

JD = JD + 2400000.5

}

 

function thisDateTime() {

thisDay()

thisMonth()

thisYear()

thisHour()

thisMinute()

thisUT()

theJulDay()

offset=dat.getTimezoneOffset()

sunDec(JD)

DateTime()

}

 

function theDateTime() {

theDay()

theMonth()

theYear()

theHour()

theMinute()

offset=dat.getTimezoneOffset()

theUT()

theJulDay()

sunDec(JD)

DateTime()

}

 

function frac(x) {

return x-Math.floor(x);

}

 

function sunDec(JD) {

PI2 = 2.0*Math.PI;

cos_eps = 0.917482;

sin_eps = 0.397778;

var M, DL, L, SL, X, Y, Z, R, T;

T = (JD - 2451545.0) / 36525.0;

M = PI2*frac(0.993133 + 99.997361*T);

DL = 6893.0*Math.sin(M) + 72.0*Math.sin(2.0*M);

L = PI2*frac(0.7859453 + M/PI2 + (6191.2*T+DL)/1296.0E3);

SL = Math.sin(L);

X = Math.cos(L);

Y = cos_eps*SL;

Z = sin_eps*SL;

R = Math.sqrt(1.0-Z*Z);

DEC = (360.0/PI2)*Math.atan(Z/R);

}
