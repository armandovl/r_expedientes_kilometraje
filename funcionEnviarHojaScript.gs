
function hacerClick(paramCom){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1THdicKrQSRFf1KafHAkJL-6KhNRTDnnYzyvVa5mSQMg");  
  var ws= ss.getSheetByName('Sheet1');

    
  ws.appendRow([new Date(),paramCom.nombre1,paramCom.nombre2,paramCom.nombre3,
  paramCom.nombre4,paramCom.nombre5,paramCom.nombre6,
  paramCom.nombre7,paramCom.nombre8,paramCom.nombre9,paramCom.nombre10]); //aniade una columna /*importante ver como se llaman
}









