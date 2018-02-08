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



// //metadata/type-extension[attribute::type-id="Product"]/custom-attribute-definitions/attribute-definition[attribute::attribute-id="Accessories"]/display-name[attribute::xml:lang="fr-FR"]

var fs = require('fs');
var file = 'source.xml'; // if no argv
var replacedFile = 'sortieXmlReplassor.xml'
if (process.argv[2] != undefined) { 
    file = process.argv[2];
    replacedFile = 'replaced_' + file;
}
var str = fs.readFileSync(`${__dirname}/${file}`, 'utf8');

var o = toReplaceObject = { //
    'xml:lang="fr-FR">Alias Name': 'xml:lang="de-DE">Alias Name',
    'xml:lang="fr-FR">Pas de zoom produit': 'xml:lang="de-DE">Zoom Produkt',
    'xml:lang="fr-FR">Article minimized bloc': 'xml:lang="de-DE">Block Artikel minimiert',
    'xml:lang="fr-FR">Article tags': 'xml:lang="de-DE">Artikeltags',
    'xml:lang="fr-FR">Coiffure': 'xml:lang="de-DE">Haarstyling',
    'xml:lang="fr-FR">Image bloc (page list)': 'xml:lang="de-DE">Block Bilder (Seitenverzeichnis)',
    'xml:lang="fr-FR">Image bloc tag': 'xml:lang="de-DE">Block Bilder Tag',
    'xml:lang="fr-FR">Image header': 'xml:lang="de-DE">Image Header',
    'xml:lang="fr-FR">Name plus court': 'xml:lang="de-DE">Name kurz',
    'xml:lang="fr-FR">Products linked': 'xml:lang="de-DE">Verlinkte Produkte',
    'xml:lang="fr-FR">Description de la category': 'xml:lang="de-DE">Kategoriebeschreibung',
    'xml:lang="fr-FR">Titre de la category': 'xml:lang="de-DE">Kategoriename',
    'xml:lang="fr-FR">Bannière': 'xml:lang="de-DE">Banner',
    'xml:lang="fr-FR">Accessoires': 'xml:lang="de-DE">Zubehör',
    'xml:lang="fr-FR">Accessoire diamètre': 'xml:lang="de-DE">Durchmesser Zubehör',
    'xml:lang="fr-FR">Nombre d\'accessoires': 'xml:lang="de-DE">Anzahl Zubehör',
    'xml:lang="fr-FR">Type de brosse soufflante': 'xml:lang="de-DE">Warmluftbürste Typ',
    'xml:lang="fr-FR">Type de sèche-cheveux': 'xml:lang="de-DE">Haartrockner Typ',
    'xml:lang="fr-FR">Flux d\'air': 'xml:lang="de-DE">Luftstrom',
    'xml:lang="fr-FR">Amazon Retailer': 'xml:lang="de-DE">Amazon Retailer',
    'xml:lang="fr-FR">Nombre de brosses': 'xml:lang="de-DE">Anzahl Borsten',
    'xml:lang="fr-FR">Couleur': 'xml:lang="de-DE">Farbe',
    'xml:lang="fr-FR">Confort ressenti lors de la séance (vs douleur)': 'xml:lang="de-DE">Komfort in der Anwendung (vs.Schmerz)',
    'xml:lang="fr-FR">Fonction boucleur': 'xml:lang="de-DE">Lockenstyler Funktion',
    'xml:lang="fr-FR">Type de boucleur': 'xml:lang="de-DE">Lockenstyler Typ',
    'xml:lang="fr-FR">Système de coupe': 'xml:lang="de-DE">Schnittsystem',
    'xml:lang="fr-FR">Description slot product': 'xml:lang="de-DE">Slot Produktbeschreibung',
    'xml:lang="fr-FR">Diametre': 'xml:lang="de-DE">Durchmesser',
    'xml:lang="fr-FR">Diamètre (hors poils)': 'xml:lang="de-DE">Durchmesser (ohne Borsten)',
    'xml:lang="fr-FR">Différentes fonctionnalités': 'xml:lang="de-DE">Verschiedene Funktionen',
    'xml:lang="fr-FR">Choix du sens de rotation': 'xml:lang="de-DE">Wechsel der Rotationsrichtung',
    'xml:lang="fr-FR">Technique d\'épilation': 'xml:lang="de-DE">Art der Haarentfernung',
    'xml:lang="fr-FR">Avis de l\'expert': 'xml:lang="de-DE">Tipps vom Experten',
    'xml:lang="fr-FR">Nombre de face': 'xml:lang="de-DE">Anzahl Seiten',
    'xml:lang="fr-FR">product FAQ & Advice': 'xml:lang="de-DE">FAQ & Hilfe zu Produkten',
    'xml:lang="fr-FR">Accessoires': 'xml:lang="de-DE">Zubehör',
    'xml:lang="fr-FR">Coffret de rangement': 'xml:lang="de-DE">Aufbewahrungskoffer',
    'xml:lang="fr-FR">Besoins': 'xml:lang="de-DE">Bedürfnisse',
    'xml:lang="fr-FR">Boucles': 'xml:lang="de-DE">Locken',
    'xml:lang="fr-FR">Brosses': 'xml:lang="de-DE">Bürsten',
    'xml:lang="fr-FR">Collections': 'xml:lang="de-DE">Kollektion',
    'xml:lang="fr-FR">Fonctions': 'xml:lang="de-DE">Funktion',
    'xml:lang="fr-FR">Format': 'xml:lang="de-DE">Format',
    'xml:lang="fr-FR">Hauteurs de Coupe': 'xml:lang="de-DE">Schnittlänge',
    'xml:lang="fr-FR">4-34 mm': 'xml:lang="de-DE">4-34mm',
    'xml:lang="fr-FR">Matières': 'xml:lang="de-DE">Material',
    'xml:lang="fr-FR">Moteurs': 'xml:lang="de-DE">Motor',
    'xml:lang="fr-FR">Nombre de Flashs': 'xml:lang="de-DE">Anzahl Lichtimpulse',
    'xml:lang="fr-FR">Options': 'xml:lang="de-DE">Optionen',
    'xml:lang="fr-FR">Picots/Poils': 'xml:lang="de-DE">Borsten',
    'xml:lang="fr-FR">Précision': 'xml:lang="de-DE">Präzision',
    'xml:lang="fr-FR">3 mm': 'xml:lang="de-DE">3mm',
    'xml:lang="fr-FR">Réglage Hauteur': 'xml:lang="de-DE">Einstellung Schnittlänge',
    'xml:lang="fr-FR">Sens de bouclage': 'xml:lang="de-DE">Lockendrehrichtung',
    'xml:lang="fr-FR">Styles': 'xml:lang="de-DE">Style',
    'xml:lang="fr-FR">Systèmes': 'xml:lang="de-DE">System',
    'xml:lang="fr-FR">Type de cheveux': 'xml:lang="de-DE">Haartyp',
    'xml:lang="fr-FR">Usages': 'xml:lang="de-DE">Verwendung',
    'xml:lang="fr-FR">Utilisations': 'xml:lang="de-DE">Nutzung',
    'xml:lang="fr-FR">Vitesse d\'air': 'xml:lang="de-DE">Luftgeschwindigkeit',
    'xml:lang="fr-FR">50 - 85 km/h': 'xml:lang="de-DE">50 - 85km/h',
    'xml:lang="fr-FR">Finition': 'xml:lang="de-DE">Finish',
    'xml:lang="fr-FR">Liberté de mouvement': 'xml:lang="de-DE">Bewegungsfreiheit',
    'xml:lang="fr-FR">Touche air frais': 'xml:lang="de-DE">Kühlluftstufe',
    'xml:lang="fr-FR">Position air frais': 'xml:lang="de-DE">Schalter Kühlluftstufe',
    'xml:lang="fr-FR">Type haardroger': 'xml:lang="de-DE">Haartrockner Typ',
    'xml:lang="fr-FR">Hauteur de coupe de cheveux': 'xml:lang="de-DE">Schnittlänge Haare',
    'xml:lang="fr-FR">Type de cheveux': 'xml:lang="de-DE">Haartyp',
    'xml:lang="fr-FR">Type de tête': 'xml:lang="de-DE">Scherkopf Typ',
    'xml:lang="fr-FR">Hauteur de coupe': 'xml:lang="de-DE">Schnittlänge',
    'xml:lang="fr-FR">Ionique': 'xml:lang="de-DE">Ionenfunktion',
    'xml:lang="fr-FR">Italian Retailer': 'xml:lang="de-DE">DO NOT TRANSLATE',
    'xml:lang="fr-FR">Choix du temps de pose': 'xml:lang="de-DE">Wahl der Stylingdauer',
    'xml:lang="fr-FR">Eclairage': 'xml:lang="de-DE">Beleuchtung',
    'xml:lang="fr-FR">Grossissement': 'xml:lang="de-DE">Vergrößerung',
    'xml:lang="fr-FR">Revêtement': 'xml:lang="de-DE">Beschichtung',
    'xml:lang="fr-FR">Modèle Lisseur': 'xml:lang="de-DE">Modell Glätteisen',
    'xml:lang="fr-FR">Sans mini-lisseur': 'xml:lang="de-DE">Ohne Mini-Glätteisen',
    'xml:lang="fr-FR">Modele Lisseur Variation': 'xml:lang="de-DE">Modell Glätteisen Variation',
    'xml:lang="fr-FR">Revêtement des plaques': 'xml:lang="de-DE">Platten Beschichtung',
    'xml:lang="fr-FR">Alimentation': 'xml:lang="de-DE">Stromversorgung',
    'xml:lang="fr-FR">Précision et réglage': 'xml:lang="de-DE">Präzision & Einstellung',
    'xml:lang="fr-FR">Fonction quick charge': 'xml:lang="de-DE">Schnellladefunktion',
    'xml:lang="fr-FR">Prix de vente conseillé*': 'xml:lang="de-DE">UVP*',
    'xml:lang="fr-FR">Taille': 'xml:lang="de-DE">Größe',
    'xml:lang="fr-FR">Rapidité d\'utilisation': 'xml:lang="de-DE">Dauer der Anwendung',
    'xml:lang="fr-FR">Pochette de rangement': 'xml:lang="de-DE">Aufbewahrungstasche',
    'xml:lang="fr-FR">Type de lisseur': 'xml:lang="de-DE">Glätteisen Typ',
    'xml:lang="fr-FR">Pérennité': 'xml:lang="de-DE">Nachhaltigkeit',
    'xml:lang="fr-FR">Températures': 'xml:lang="de-DE">Temperatur',
    'xml:lang="fr-FR">Températures / Vitesses': 'xml:lang="de-DE">Temperatur / Geschwindigkeit',
    'xml:lang="fr-FR">Type Ciseaux Variation': 'xml:lang="de-DE">Schere Typ Variation',
    'xml:lang="fr-FR">Fonction vapeur': 'xml:lang="de-DE">Dampffunktion',
    'xml:lang="fr-FR">Watts': 'xml:lang="de-DE">Watt',
    'xml:lang="fr-FR">Wet & Dry': 'xml:lang="de-DE">Wet & Dry',
    'xml:lang="fr-FR">Zone du Corps': 'xml:lang="de-DE">Körperbereich',
    'xml:lang="fr-FR">Cheveux': 'xml:lang="de-DE">Haare',
    'xml:lang="fr-FR">Hatch - Retaillers order': 'xml:lang="de-DE">Hatch - Händlerbestellung',
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