selectedRow = null;

function onFormSubmit()
{
	var formData = readFormData();
	if(selectedRow == null)
	{
		insertNewRecord(formData);
	}
	else
	{
		updateRecord(formData);		
	}
	resetForm();
	document.getElementById("fullname").focus();
}

function readFormData()
{
	var formData = {};
	formData["fullName"] = document.getElementById("fullname").value;
	formData["empCode"] = document.getElementById("empcode").value;
	formData["city"] = document.getElementById("city").value;
	return formData;
}
function insertNewRecord(data)
{
	var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fullName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.empCode;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.city;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = `<center><input type="button" value="Edit" onClick="onEdit(this)">|| \
	<input type="button" value="Delete" onClick="onDelete()"></center>`;
}

function resetForm()
{
		 document.getElementById("fullname").value="";
		 document.getElementById("empcode").value="";
		 document.getElementById("city").value="";
         selectedRow=null;
}
function onEdit(td){
	selectedRow=td.parentElement.parentElement;
	document.getElementById("fullname").value=selectedRow.cells[0].innerHTML;
	document.getElementById("empcode").value=selectedRow.cells[1].innerHTML;
	document.getElementById("city").value=selectedRow.cells[2].innerHTML;

}
function updateRecord(formData){
	selectedRow.cells[0].innerHTML=formData.fullname;
	selectedRow.cells[1].innerHTML=formData.empCode;
	selectedRow.cells[2].innerHTML=formData.city;

}

function searchName(){
	var filter=document.getElementById("myInput").value.toUpperCase();
	var searchtr=document.getElementById("employeeList").getElementsByTagName('tr');
	for(i=0;i<searchtr.length;i++){
		searchtd=searchtr[i].getElementsByTagName('td')[0];
		if(searchtd){
			var textValue= searchtd.textcontent || searchtd.innerHTML;
			if(textValue.toUpperCase().indexOf(filter)>-1)
			{
				searchtr[1].style.display="";
			}else
			{
				searchtr[1].style.display="none";
			}
		}
	}
}
