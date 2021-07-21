function subiendoArchivos(parametroa) {

  var folder = DriveApp.getFolderById("156dF2mplAUcigEOMLYf3HtNJtM6djV9s");
  
  /******************************  Crear Folders ***************************************** */

  
    var archivo1 = parametroa.bitacoraCentral;    
    var archivoCreado1 = folder.createFile(archivo1);
    archivoCreado1.setName(parametroa.territorio2 + "-" + parametroa.monederoN + "-Bitácora_Central");

    var archivo2 = parametroa.odometro;    
    var archivoCreado2 = folder.createFile(archivo2);
    archivoCreado2.setName(parametroa.territorio2 + "-" + parametroa.monederoN + "-Odómetro_Final");

    var archivo3 = parametroa.bitacoraQuincena1;    
    var archivoCreado3 = folder.createFile(archivo3);
    archivoCreado3.setName(parametroa.territorio2 + "-" + parametroa.monederoN + "-Bitácora_Quincena1");

    var archivo4 = parametroa.bitacoraQuincena2;    
    var archivoCreado4 = folder.createFile(archivo4);
    archivoCreado4.setName(parametroa.territorio2 + "-" + parametroa.monederoN + "-Bitácora_Quincena2");


};
