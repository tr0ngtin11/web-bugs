
// Add Group
let btn_add_mem = document.querySelector('.add-member');

function handleClickAddMem() {
  let infor_add = document.querySelector('.infor_add_mem');
  let infor_list_add_mem = document.querySelector('.list_add_member');
  let element_add = `
    <div class="row ">
      <label for="inputEmail3" class="col-sm-3 col-form-label"></label>
      <div class="col-xl-9">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 offset-sm-2 col-form-label border-top pt-3">MSSV</label>
          <div class="col-sm-4 mssv border-top">
            <input type="text" onChange="handleMssvChange()" name="mssv" class="form-control mt" id="mssv2" placeholder="123123">
          </div>
        </div>
      </div>
    </div>
    <div class="row ">
      <label for="inputEmail3" class="col-sm-3 col-form-label"></label>
      <div class="col-xl-9">
        <div class="form-group row">
          <label for="inputEmail3" onChange="handleNameMemberChange()" name="hvt" class="col-sm-2 offset-sm-2 col-form-label border-top pt-3">Họ và tên</label>
          <div class="col-sm-4 mssv border-top">
            <input type="text" class="form-control mt" id="hovaten2" placeholder="Nguyễn Văn A">
          </div>
        </div>
      </div>
    </div>
`;
  infor_list_add_mem.insertAdjacentHTML('beforeend', element_add);
}
btn_add_mem.addEventListener("click", handleClickAddMem);


var i = 1;

function AddProject() {
  let name_prj = document.querySelector('.prj-name').value;
  let type_prj = document.querySelector('input[name="gridRadios"]:checked').value;
  var descrip_prj = document.querySelector('.value-descrip').value;
  var objarray_MSSV = document.querySelectorAll('input[name="mssv"]');
  var array_Name_Member = document.querySelectorAll('input[name="hvt"]');
  let prj_exist = document.querySelector('.unshow');
  let array_MSSV = [...objarray_MSSV];
  let name_lead = [...array_Name_Member];
  let dssv = array_MSSV.map((e) => e.value);
  let minimize_des = minimizeString(descrip_prj);
  let stt = i.toString();
  let new_prj =
    `<tr>
    <th scope="row ">${stt}</th>
    <td>${name_prj}</td>
    <td>${type_prj}</td>
    <td>${array_MSSV[0].value} - ${name_lead[0].value}</td>
    <td>
    ${dssv.join(`<br>`)}
    </td>
    <td>${minimize_des}</td>
  </tr>`;
  i++;
  let list_prj = document.querySelector('.list_project');
  list_prj.insertAdjacentHTML('beforeend', new_prj);
  prj_exist.className = "nav-link";

}


function minimizeString(string) {
  console.log(string.length)
  let count = 0;
  let flag = false;
  let pos = -1;
  for (let j = 0; ; j++) {
    if (string[j] == ' ') {
      count++;
    }
    if (count == 9) {
      pos = j;
      flag = true;
    }
    if (string[j] == undefined) {
      break;
    }

  }



  if (flag == true) {
    string = string.substring(0, pos + 1) + '...';
  }
  return string;
}








