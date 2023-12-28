# On CAD Kernels

Last year I took a survey of the [Free software](https://en.wikipedia.org/wiki/Free_software) [CAD](https://en.wikipedia.org/wiki/Computer-aided_design) packages, and compared them to OnShape and Solidworks, which I learned during my mechanical engineering degree.

TO summarise:
- FreeCAD is worse that its commerical competition by almost every metric, but is still very capable and it has a lot of features.
- Solvespace is very pleasant to use at with its stripped down UI, but ultimately lacks the features necessary for most projects, i.e. fillets.
- OpenSCAD isn't really a CAD program, it can't represent curves, or do any of the normal solid modelling operations like fillets, extrude to face. However the UX is great.
- CADQuery was sort of broken when I tried it, but I thought the idea 

Since then I have been using Build123d, which is an offshoot of CADQuery, with a more ergonomic Python API and a much easier setup with the ocp-vscode extension.

## 



What would it take to build a CAD Kernel?

Here are the contenders:



## OCCT
Open-sourced as Open CASCADE in 1999, it's a sprawling C++ codebase, and becase it predates STL and modern C++ it uses its own types and collections, down to the integers and floats. Some of these are just typedefs over standard types, `Standard_Integer` is `int`, and some are not, `Handle(x)` returns a reference counted pointer, and is used extensively. It looks like there is some effort to make the codebase less NIH, but much work needs to be done.

If you want to feel real dread, have a look at the files in ChFi3d.


## Solvespace
Solvespace is the polar opposite of OCCT. Where OCCT is wraps classes with classes and has a headerfile for every single one of them, Solvespace is small and focused. 

## Fornjot
This got some attention last year on HN. I do wonder if 

## BRL-CAD
This is an odd one. It is a US military project, borne out of the development of the M1 Abrams (BRL stands for Balistic Research Laboratory). Its lead developer, Mike Muss, also responsible for ping, died in a car accident in 2000. In 2004 it was open sourced.

Install a copy of BRL-CAD and you will be using a commandline to generate geometry, not a bad interface, but not terribly differnt to what was probabaly used in 1983.

If you look at the github contibutir statistics, you will see a one person, starseeker, presumably a US Military employee, has committed over 45 Million lines of code.

## Fillets
Why are fillets so hard to model? In many cases they aren't, fillets created as part of a profile that is to be revolved ot extruded are easy and well defined.

Filleting as an operation is much harder to define. How would you apply a fillet to a sphere? Obvioulsy n
The issue is fillets are often better though of as a feature, something to add on to the final model when you want to knock off some sharp corners or make it easier to cut on a CNC. It is pretty easy to come up with a situation that requreis filet