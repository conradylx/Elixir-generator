function validate(){
   CheckDate();
   CheckAmount();
   CheckBranch();
   CheckBranch2();
   CheckSNDNRB();
   CheckBNFNRB();
   CheckSenderName();
   CheckBenefName();
   CheckSenderNo2();
   CheckBenefNo2();
   CheckAddInfo();
   CheckCheque();   
   CheckClaim();
   CheckAddId();
   inputParameters();
   outputParameters();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckDate(){
    let data = text2.field[3];
    var DateLen = document.getElementsByClassName("export Date");
    
    var n  =  new Date();
    var y  = n.getFullYear();
    var m = n.getMonth() + 1;
    var d  = n.getDate();
 
    for(var i = 0, l = DateLen.length; i < l; i++) {
         var x = DateLen[i].value;
                          
            document.getElementsByClassName("Date")[i].innerHTML = y+ "" + m + "" + d; 

            if(x.length != data.length || isNaN(x)){
               document.getElementsByClassName("DateDiv")[i].innerHTML = "Pole data musi byc liczba i zawierac format DDMMRRRR.";
            }
            else{
               document.getElementsByClassName("DateDiv")[i].innerHTML = "";
            }
   }
}

function CheckAmount(){
   let data = text2.field[4];
   var amount = document.getElementsByClassName("export Amount");
     
   for(var i = 0, l = amount.length; i < l; i++) {
         var x = amount[i].value;
            if(x<data.min_value || x== "" || x>data.max_value || isNaN(x)){
               if(x<data.min_value){
                  document.getElementsByClassName("AmountDiv")[i].innerHTML = "Kwota mniejsza od 1PLN";
               }
               if(x>data.max_value){
                  document.getElementsByClassName("AmountDiv")[i].innerHTML = "Kwota wieksza od 5000000PLN";
               }
               if(x==""){
                  document.getElementsByClassName("AmountDiv")[i].innerHTML = "Kwota nie zostala podana";
               }
               if(isNaN(x)){
                  document.getElementsByClassName("AmountDiv")[i].innerHTML = "Pole zawiera spacje";
               }
            }     
            else
               document.getElementsByClassName("AmountDiv")[i].innerHTML = "";
   }
}

function CheckBranch(){
   let data = text2.field[5];
   var BRNCH = document.getElementsByClassName('export Branch');
   var NRB = document.getElementsByClassName('export SNDNRB');
   var SNDBRNCH;

   for(var i = 0; i < BRNCH.length; i++) {
         var x = BRNCH[i].value;
         var y = NRB[i].value;
               SNDBRNCH = y.toString().substr(2,8);

               if(x != SNDBRNCH || x.length != data.length || x.length == 0){
                   if(x != SNDBRNCH){
                     document.getElementsByClassName("BranchDiv")[i].innerHTML = "Branch niezgodny";
                   }
                   if(x.length != SNDBRNCH.length){
                     document.getElementsByClassName("BranchDiv")[i].innerHTML = "Bledna dlugosc pola";
                   }
                   if(x.length == 0){
                      document.getElementsByClassName("BranchDiv")[i].innerHTML = "Pole niewypelnione";
                   }
               }
               else
                  document.getElementsByClassName("BranchDiv")[i].innerHTML = "";
   }
}

function CheckBranch2(){
   let data = text2.field[6];
   var BRNCH = document.getElementsByClassName('export Branch2');
   var NRB = document.getElementsByClassName('export BNFNRB');
   var BNFBRNCH;

   for(var i = 0; i < BRNCH.length; i++) {
         var x = BRNCH[i].value;
         var y = NRB[i].value;
               BNFBRNCH = y.toString().substr(2,8);

               if(x != BNFBRNCH || x.length != data.length || x.length == 0){
                   if(x != BNFBRNCH){
                     document.getElementsByClassName("Branch2Div")[i].innerHTML = "Branch niezgodny";
                   }
                   if(x.length != BNFBRNCH.length){
                     document.getElementsByClassName("Branch2Div")[i].innerHTML = "Bledna dlugosc pola";
                   }
                   if(x.length == 0){
                      document.getElementsByClassName("Branch2Div")[i].innerHTML = "Pole niewypelnione";
                   }
               }
               else
                  document.getElementsByClassName("Branch2Div")[i].innerHTML = "";
   }
}

function CheckSNDNRB(){
    let data = text2.field[7];
    var NRB = document.getElementsByClassName("export SNDNRB");

    for(var i = 0, l = NRB.length; i < l; i++) {
         var x = NRB[i].value;
                          
            if(x.length != data.length || isNaN(x)){
               if(isNaN(x)){
                  document.getElementsByClassName("SNDNRBDiv")[i].innerHTML = "Pole musi byc liczba";
               }
               if(x.length != data.length){
                  document.getElementsByClassName("SNDNRBDiv")[i].innerHTML = "Bledna dlugosc pola";
               }
            }
            if(x.length == data.length || isNaN(x)){
               document.getElementsByClassName("SNDNRBDiv")[i].innerHTML = "";
            }
                           
            document.getElementsByClassName("export SNDNRB")[i].value = '"'+x.substr(0,26)+'"';

   }
}

function CheckBNFNRB(){
    let data = text2.field[8];
    var NRB = document.getElementsByClassName("export BNFNRB");

    for(var i = 0, l = NRB.length; i < l; i++) {
         var x = NRB[i].value;
                          
            if(x.length != data.length || isNaN(x)){
               if(isNaN(x)){
                  document.getElementsByClassName("BNFNRBDiv")[i].innerHTML = "Pole musi byc liczba";
               }
               if(x.length != data.length){
                  document.getElementsByClassName("BNFNRBDiv")[i].innerHTML = "Bledna dlugosc pola";
               }
            }
            if(x.length == data.length || isNaN(x)){
               document.getElementsByClassName("BNFNRBDiv")[i].innerHTML = "";
            }
            
            document.getElementsByClassName("export BNFNRB")[i].value = '"'+x.substr(0,26)+'"';
   }
}

function CheckSenderName(){
   let data = text2.field[9];
   let Name = document.getElementsByClassName("export Sender_name");
   for(let i = 0; i<Name.length; i++){
      let x = Name[i].value;
         for(let j = 0; j<data.length; j++){
   //         console.log(x.length);
            if(x.length == 0){
               document.getElementsByClassName("Sender_nameDiv")[i].innerHTML = "Pole nie zostalo wypelnione";
            }
            if(x.length > 100){
                document.getElementsByClassName("export Sender_name")[i].value = '"'+x.substr(0,34)+"|" + x.substr(34,34)+"|" + x.substr(68,34)+"|"+
                                                                                                                          x.substr(102,34)+'"';
            }
            if(x.length > 0 && x.length <= 34)
            {
               document.getElementsByClassName("export Sender_name")[i].value = '"'+x.substr(0,34)+'|||"';
            }
            if(x.length > 34 && x.length <= 68)
            {
               document.getElementsByClassName("export Sender_name")[i].value = '"'+x.substr(0,34)+"|" + x.substr(34,34)+'||"';
            }
            if(x.length > 68 && x.length <= 100)
            {
               document.getElementsByClassName("export Sender_name")[i].value = '"'+x.substr(0,34)+"|" + x.substr(34,34)+"|" + x.substr(68,34)+'"';
            }
         }
   }
}

function CheckBenefName(){
   let data = text2.field[10];
   let Name = document.getElementsByClassName("export Benef_name");
   for(let i = 0; i<Name.length; i++){
      let x = Name[i].value;
         for(let j = 0; j<data.length; j++){
   //         console.log(x.length);
            if(x.length == 0){
               document.getElementsByClassName("Benef_nameDiv")[i].innerHTML = "Pole nie zostalo wypelnione";
            }
            if(x.length > 100){
                document.getElementsByClassName("export Benef_name")[i].value = '"'+x.substr(0,34)+"|" + x.substr(34,34)+"|" + x.substr(68,34)+"|"+
                                                                                                                          x.substr(102,34)+'"';
            }
            if(x.length > 0 && x.length <= 34)
            {
               document.getElementsByClassName("export Benef_name")[i].value = '"'+x.substr(0,34)+'|||"';
            }
            if(x.length > 34 && x.length <= 68)
            {
               document.getElementsByClassName("export Benef_name")[i].value = '"'+x.substr(0,34)+"|" + x.substr(34,34)+'||"';
            }
            if(x.length > 68 && x.length <= 100)
            {
               document.getElementsByClassName("export Benef_name")[i].value = '"'+x.substr(0,34)+"|" + x.substr(34,34)+"|" + x.substr(68,34)+'"';
            }
         }
   }
}
   
function CheckSenderNo2(){
   let data = text2.field[11];
   var BRNCH = document.getElementsByClassName('export Sender_no_2');
   var NRB = document.getElementsByClassName('export SNDNRB');
   var SNDBRNCH;

   for(var i = 0; i < BRNCH.length; i++) {
         var x = BRNCH[i].value;
         var y = NRB[i].value;
               SNDBRNCH = y.toString().substr(2,8);

               if(x != SNDBRNCH || x.length != data.length){
                   if(x != SNDBRNCH){
                     document.getElementsByClassName("Sender_no_2Div")[i].innerHTML = "Branch niezgodny";
                   }
                   if(x.length != SNDBRNCH.length){
                     document.getElementsByClassName("Sender_no_2Div")[i].innerHTML = "Bledna dlugosc pola";
                   }
               }
               else
                  document.getElementsByClassName("Sender_no_2Div")[i].innerHTML = "";
   }
}

function CheckBenefNo2(){
   let data = text2.field[12];
   var BRNCH = document.getElementsByClassName('export Benef_no_2');
   var NRB = document.getElementsByClassName('export BNFNRB');
   var BNFBRNCH;

   for(var i = 0; i < BRNCH.length; i++) {
         var x = BRNCH[i].value;
         var y = NRB[i].value;
               BNFBRNCH = y.toString().substr(2,8);

               if(x != BNFBRNCH || x.length != data.length){
                   if(x != BNFBRNCH){
                     document.getElementsByClassName("Benef_no_2Div")[i].innerHTML = "Branch niezgodny";
                   }
                   if(x.length != BNFBRNCH.length){
                     document.getElementsByClassName("Benef_no_2Div")[i].innerHTML = "Bledna dlugosc pola";
                   }
               }
               else
                  document.getElementsByClassName("Benef_no_2Div")[i].innerHTML = "";
   }
}

function CheckAddInfo(){
   let data = text2.field[13];
   let text = document.getElementsByClassName('export Add_info');
   
   for(var i=0; i<text.length; i++){
      var x = text[i].value;
      
      if(x.length != data.length){
         if(x.length != data.length){
            document.getElementsByClassName("Add_infoDiv")[i].innerHTML = "Dlugosc pola ponad 140 znakow";
         }
         if(x.length == 0){
            document.getElementsByClassName("Add_infoDiv")[i].innerHTML = "Pole nie zostalo wypelnione";
         }
      }
      if(x.length != data.length){
         document.getElementsByClassName("Add_infoDiv")[i].innerHTML = "";
      }
      
      document.getElementsByClassName("export Add_info")[i].value = '"'+x.substr(0,data.length)+'"';

   }
   
   for(let i = 0; i<text.length; i++){
      let x = text[i].value;
         for(let j = 0; j<data.length; j++){
            if(x.length > 0){
            document.getElementsByClassName("export Add_info")[i].value = '"' + x.substr(0,34)+"|" + x.substr(34,34)+"|" + x.substr(68,34)+"|"+
                                                                                                                          x.substr(102,34)+'|"';
            }
            if(x.length == 0){
               document.getElementsByClassName("Add_infoDiv")[i].innerHTML = "Pole nie zostalo wypelnione";
            }
        }
   } 
}

function CheckCheque(){
   let data = text2.field[14];
   let field = document.getElementsByClassName("export Cheque");
   
   for(let i=0; i<field.length;i++){
        let x = field[i].value
        if(x.length < 34)
            document.getElementsByClassName("export Cheque")[i].value = '"'+x.substr(0,data.length)+'|||"';
        if(x.length > 34)
            document.getElementsByClassName("export Cheque")[i].value = '"'+x.substr(0,34)+'|' + x.substr(35,24) + '|"';
   }
}

function CheckClaim(){
   //n/a
}

function CheckAddId(){
   let data = text2.field[16];
   let text = document.getElementsByClassName('export Add_Id');
   
   for(var i=0; i<text.length; i++){
      var x = text[i].value;
      
      if(x.length != data.length){
         console.log(x.length);
         console.log(data.length);
            
         if(x.length == 0 || x.length == null){
            document.getElementsByClassName("export Add_Id")[i].value = '51';
            //document.getElementsByClassName("Add_idDiv")[i].innerHTML = "Pole nie zostalo wypelnione";
         }
         if(x.length > data.length){
            document.getElementsByClassName("Add_IdDiv")[i].innerHTML = "Dlugosc pola jest bledna";
         }
         if(x.length == 2){
            document.getElementsByClassName("Add_IdDiv")[i].innerHTML = "";
         }
      }
            document.getElementsByClassName("export Add_Id")[i].value = '"'+x.substr(0,data.length)+'|||"';
   }
}

//hidden field
function inputParameters(){  
   const inputValues = [2200001,0000001];
   
   let additionalID = document.getElementsByClassName("export Add_Id");
   let input = document.getElementsByClassName("export Message");
   let date = document.getElementsByClassName("export Date");
   
   for(let i=0;i<input.length;i++){
      let t = additionalID[i].value;
      let x = input[i].value;
      let d = date[i].value;
      
         if(((x == "11" || x =="19") && t == "51")||((x == "11" || x == "19") && t == "03")){
            document.getElementsByClassName("export inputVal")[i].value = '"' + d + inputValues[0] + '"';
         }
         
         if((x == "21" && t == "01")||(x == "22" && t == "02")||(x == "22" && t == "03")||((x == "11" || x =="19") && t == "54")||((x == "11" || x == "19") && t == "74")){
            document.getElementsByClassName("export inputVal")[i].value = '"' + d + inputValues[1] + '"';
         }
   }
}

//hidden field
function outputParameters(){
   const outputValues = [000,0010010000001];
   
   let date = document.getElementsByClassName("export Date");
   
   for(let i=0; i<date.length; i++){
      let d = date[i].value;
        document.getElementsByClassName("export outputVal")[i].value = '"' + outputValues[0] + d + outputValues[1] + '"';      
   }
}

function validateRequired(){
   let totalLength = document.getElementsByClassName("export Date");
   let messageDigits2 = $(".Message  option:selected");

   for(let i = 0; i<totalLength.length;i++){

   console.log(totalLength.length);
      if(messageDigits2[1].text == 'Przelew przychodz±cy'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }

      if(messageDigits2[1].text == 'Uznanie czekiem rozliczeniowym'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
      
      if(messageDigits2[1].text == 'Wp³ata gotówkowa zwyk³a'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
      
      if(messageDigits2[1].text == 'Wp³ata gotówkowa US'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
      if(messageDigits2[1].text == 'Zwrot przelewu'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
      if(messageDigits2[1].text == 'Zwrot uznania czekiem rozliczeniowym'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
      if(messageDigits2[1].text == 'Zwrot wp³aty gotówkowej zwyk³ej'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
       if(messageDigits2[1].text == 'Zwrot wp³aty gotówkowej US'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
       if(messageDigits2[1].text == 'Polecenie zap³aty'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
       if(messageDigits2[1].text == 'Obci±¿enie czekiem gotówkowym'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
       if(messageDigits2[1].text == 'Obci±¿enie czekiem rozliczeniowym'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#FFFF00';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#009218';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
      if(messageDigits2[1].text == 'Przelew przychodz±cy SORBNET'){
         document.getElementsByClassName("export Date")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Amount")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Branch2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export SNDNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export BNFNRB")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_name")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Sender_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Benef_no_2")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export Add_info")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Add_Id")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Cheque")[i].style.borderColor='#000000';
         document.getElementsByClassName("export Claim")[i].style.borderColor='#009218';
         document.getElementsByClassName("export Inter_bank_info")[i].style.borderColor='#FF0000';
         document.getElementsByClassName("export inputVal")[i].style.backgroundColor='#000000';
         document.getElementsByClassName("export outputVal")[i].style.backgroundColor='#000000';
      }
   }
}