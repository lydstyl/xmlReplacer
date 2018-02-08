/* 
This script is used to replace massively in an xml file things like 
    'xml:lang="x-default">Vitesse d\'air' to 'xml:lang="de-DE">Luftgeschwindigkeit'
Use xmlReplassor in Google Drive to generate the object toReplaceObject 
    https://docs.google.com/spreadsheets/d/1I221pkvAnUHALyYEqBmu4k8w8p9uW3v-JoYpCKjwuVY/edit#gid=0
Put your xml to be replaced in the GabXmlReplassor directory eg : 
    /home/lyd/Dropbox/Informatique/Node.js/xml/xmlReplacorGab
Copy past to replace the object toReplaceObject in this script
Use the command : node GabXmlReplassor.js 20180118Dev05SysObjTyp.xml
Check if everything is ok and improve this tool if something when wrong
*/

var fs = require('fs');
var file = 'source.xml'; // if no argv
var replacedFile = 'sortieXmlReplassor.xml'
if (process.argv[2] != undefined) { 
    file = process.argv[2];
    replacedFile = 'replaced_' + file;
}
var str = fs.readFileSync(`${__dirname}/${file}`, 'utf8');

var o = toReplaceObject = { //
    'xml:lang="x-default">Besoins': 'xml:lang="de-DE">Bedürfnis',
    'xml:lang="x-default">Vitesse d\'air': 'xml:lang="de-DE">Luftgeschwindigkeit',
    'xml:lang="x-default">Accessoires': 'xml:lang="de-DE">Zubehör',
    'xml:lang="x-default">Brosses': 'xml:lang="de-DE">Bürsten',
    'xml:lang="x-default">Collections': 'xml:lang="de-DE">Kollektionen',
    'xml:lang="x-default">Fonctions': 'xml:lang="de-DE">Funktionen',
    'xml:lang="x-default">Format': 'xml:lang="de-DE">Form',
    'xml:lang="x-default">Hauteurs de Coupe': 'xml:lang="de-DE">Schnittlängen',
    'xml:lang="x-default">Longueur de cheveux': 'xml:lang="de-DE">Haarlänge',
    'xml:lang="x-default">Matières': 'xml:lang="de-DE">Material',
    'xml:lang="x-default">Moteurs': 'xml:lang="de-DE">Motor',
    'xml:lang="x-default">Options': 'xml:lang="de-DE">Optionen',
    'xml:lang="x-default">Picots/Poils': 'xml:lang="de-DE">Borsten',
    'xml:lang="x-default">Précisions': 'xml:lang="de-DE">Präzision',
    'xml:lang="x-default">Réglage Hauteur': 'xml:lang="de-DE">Einstellung',
    'xml:lang="x-default">Sens de bouclage': 'xml:lang="de-DE">Lockenrichtung',
    'xml:lang="x-default">Styles': 'xml:lang="de-DE">Styles',
    'xml:lang="x-default">Type de cheveux': 'xml:lang="de-DE">Haartyp',
    'xml:lang="x-default">Systèmes': 'xml:lang="de-DE">System',
    'xml:lang="x-default">Usages': 'xml:lang="de-DE">Anwendung',
    'xml:lang="x-default">Utilisations': 'xml:lang="de-DE">Anwendung',
    'xml:lang="x-default">Boucles': 'xml:lang="de-DE">Locken',
    'xml:lang="x-default">Nombre de Flashs': 'xml:lang="de-DE">Anzahl der Lichtimpulse',
}
var replacement;
var notReplacedNb = 0;
var oKeys = Object.keys(o);
var oKeysL = oKeys.length;
var o2 = toReplaceObject2 = {};
var log = '';
oKeys.forEach(toBeReplace => {
    replacement = o[toBeReplace];
    str = str.replace(toBeReplace, replacement);
    log += toBeReplace + '\n';
    log += replacement + '\n\n';
});
fs.writeFileSync('log.txt', log, 'utf8');
fs.writeFileSync(replacedFile, str, 'utf8');