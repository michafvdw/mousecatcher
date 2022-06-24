# mousecatcher
Deze readme file bevat uitleg over de eindgame die is gemaakt voor het vak programmeren 4, de game heet Mouse Catcher. De progressie die is gedaan is terug te zien in de commits in deze repository (voor dit vak heb ik met Github Desktop gewerkt om alles bij te houden). 

## Github pages
https://michafvdw.github.io/mousecatcher/

## Youtube video 
https://youtu.be/IffDWDXs2jM

## Beschrijving spel 
In het spel Mouse Catcher speel je als een tovenaarskat met als doel om in de dungeon waar je je bevindt alle muizen te vermoorden. Echter is er een obstakel, namelijk de ridder hond. Deze probeert je te pakken voordat je alle muizen kan vermoorden. 

## Spel uitleg
Met de pijl omhoog (↑) en de pijl omlaag (↓) kun je de kat besturen, het doel is dus om de hond niet aan te raken maar wel alle muizen. Voor elke muis die je aanraakt krijg je een punt bij je score. Als je het spel nog een keer wilt spelen moet je de pagina herladen. Als je 10 punten hebt gehaald heb je gewonnen (want er zijn 10 muizen in het spel). 

## Prototypes
Voor programmeren 4 heb ik ook 3 prototypes gemaakt die allemaal verschillende game mechanics gebruiken. Ik heb deze op aparte repositories gepost en ook online gezet met github pages. Ze zijn met de volgende links te bekijken met bijbehorende uitleg:

Prototype 1:  https://github.com/michafvdw/prototype1_keyboardcontrol 

Prototype 2: https://github.com/michafvdw/prototype2_collisions

Prototype 3: https://github.com/michafvdw/prototype3_scoreUI

## Klassendiagram 
<img src="src/images/UML-klasse.png" width="800"/>
Ik heb een klassendiagram gemaakt voor de game mousecatcher om inzichtelijker te maken hoe de game in elkaar zit. Ik heb deze gebaseerd op wat stond in de stappenplan-voorbeeld-breakout.pdf (te vinden op teams). Game heeft meerdere classes, dog, cat, mouse, ui en background en mouse en dog zijn allebei enemy (inheritence). Ook heb ik met de + en - aangegeven of de properties private of public zijn (encapsulation). Het diagram is gemaakt in Lucidchart. 

## Suggesties voor verdere uitwerking 
Mijn doel was om minstens een game werkend te hebben die de score ook kan bijhouden, dit is me gelukt. Voor een verdere uitbreiding zou ik ook levels willen toevoegen die steeds moeilijker worden voor de speler (bijvoorbeeld meer muizen of meer honden, of een hond met een hogere speed).
