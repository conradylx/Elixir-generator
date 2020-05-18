$(document).ready(function () {
   let id = 1;
   let sum = 1;
    $("#addrow").on("click", function () {
        id+=1;
        sum+=1;
        var newRow = $('<tr id="' + id + '" class="tr">');
        var cols = "";

        cols += '<td type="col"><button type="button" id="record" data-toggle="modal" data-target="#modalCart">'+id+'</button></td>'
        cols += '<td type="col"><select type="text" class="export Message custom-select" name="Message" style="width:110"><option value=11>Przelew przychodzący</option>'+
                    '<option value=11>Uznanie czekiem rozliczeniowym</option><option value=11>Wpłata gotówkowa zwykła</option><option value=11>Wpłata gotówkowa US</option>'+
                    '<option value=11>Przelew przychodzący SORBNET</option>'+
                    '<option value=19>Zwrot przelewu</option><option value=19>Zwrot uznania czekiem rozliczeniowym</option><option value=19>Zwrot wpłaty gotówkowej zwykłej</option>'+
                    '<option value=19>Zwrot wpłaty gotówkowej US</option>'+
                    '<option value=21>Polecenie zapłaty</option><option value=22>Obciążenie czekiem gotówkowym</option><option value=22>Obciążenie czekiem rozliczeniowym</option>'+
                    '</select><div class="MessageDiv"></div></td>';
        cols += '<td type="col"><input type="text" class="export Date" name="Date" style="width:90"/><div class="DateDiv"></div></td>';
        cols += '<td type="col"><input type="text" class="export Amount" name="Amount" style="width:100"/><div class="AmountDiv"></div></td>';
	     cols += '<td type="col"><input type="text" class="export Branch" name="Branch" style="width:110"/><div class="BranchDiv"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Branch2" name="Branch2" style="width:110"/><div class="Branch2Div"></div></td>';
		  cols += '<td type="col"><input type="text" class="export SNDNRB" name="SNDNRB" style="width:240"/><div class="SNDNRBDiv"></div></td>';
	 	  cols += '<td type="col"><input type="text" class="export BNFNRB" name="BNFNRB" style="width:240"/><div class="BNFNRBDiv"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Sender_name" name="Sender_name" style="width:110"/><div class="Sender_nameDiv"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Benef_name" name="Benef_name" style="width:110"/><div class="Benef_nameDiv"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Sender_no_2" name="Sender_no_2" style="width:110"/><div class="Sender_no_2Div"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Benef_no_2" name="Benef_no_2" style="width:110"/><div class="Benef_no_2Div"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Add_info" name="Add_info" style="width:210"/><div class="Add_infoDiv"></div></td>';
        cols += '<td type="col"><input type="text" class="export Add_Id" name="Add_Id" style="width:210"/><div class="Add_IdDiv"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Cheque" name="Cheque" style="width:150"/><div class="ChequeDiv"></div></td>';
		  cols += '<td type="col"><input type="text" class="export Claim" name="Claim" style="width:150"/><div class="ClaimDiv"></div></td>';
        cols += '<td type="col"><input type="text" name="import Inter_bank_info" class="import Inter_bank_info" style="width:90" /><div class="Inter_bank_infoDiv"></div></td>';
        cols += '<td type="col"><input type="text" name="export inputVal" class="export inputVal" /></td>';
        cols += '<td type="col"><input type="text" name="export outputVal" class="export outputVal" /></td>';

        cols += '<td type="col"><input type="button" class="ibtnDel btn btn-md btn-danger" value="Delete"></td>';

        document.getElementById("sum").innerHTML = sum;
        newRow.append(cols);
        $("table.order-list").append(newRow);
        console.log();
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        var counter = 0;
        $(this).closest("tr").remove();       
        counter -= 1;
        sum-=1;
        //document.getElementById("record").innerHTML = id;
        document.getElementById("sum").innerHTML = sum;
    });
});
