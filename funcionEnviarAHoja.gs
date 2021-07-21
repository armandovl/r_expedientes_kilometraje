// funcion pegar en una hoja
function hacerClick(paramCom){
  
  //llamar la hoja
  var ss=SpreadsheetApp.openById("1oE8-g0y0JxW_5fQOczyDnaD6UBhVUhW59Av3b16ZR5E");  
  var ws= ss.getSheetByName('Sheet1');
  
  ws.appendRow([paramCom.nombreUno,paramCom.nombreDos,paramCom.nombreTres,new Date()]); //aniade una columna /*importante ver como se llaman
}





