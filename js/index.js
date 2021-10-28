
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
          <label for="inputEmail3" class="col-sm-2 offset-sm-2 col-form-label">MSSV</label>
          <div class="col-sm-4 mssv">
            <input type="text" onChange="handleMssvChange()" name="mssv" class="form-control" id="mssv2" placeholder="123123">
          </div>
        </div>
      </div>
    </div>
    <div class="row ">
      <label for="inputEmail3" class="col-sm-3 col-form-label"></label>
      <div class="col-xl-9">
        <div class="form-group row">
          <label for="inputEmail3" onChange="handleNameMemberChange()" name="hvt" class="col-sm-2 offset-sm-2 col-form-label">Họ và tên</label>
          <div class="col-sm-4 mssv">
            <input type="text" class="form-control" id="hovaten2" placeholder="Nguyễn Văn A">
          </div>
        </div>
      </div>
    </div>
`;
  infor_list_add_mem.insertAdjacentHTML('beforeend', element_add);
}
btn_add_mem.addEventListener("click", handleClickAddMem);


// List Project
// let list_prj = document.querySelector('.list_project');
// let first_e_prj = document.querySelector('.first_e');
// if (first_e_prj === null) {
//   list_prj.innerHTML = '';
// }

// let page_1 = document.querySelector('.page_1')

// let page_2 = document.querySelector('.page_2')
// let act_nav_1 = document.querySelectorAll('.nav-link')[0];
// let act_nav_2 = document.querySelectorAll('.nav-link')[1];

// console.log(act_nav.ariaSelected);
// if (act_nav_1.ariaSelected) {
//   act_nav_2.ariaSelected = false
//   page_2.innerHTML = '';
// }
// else {
//   act_nav_2.ariaSelected = true;
//   act_nav_1.ariaSelected = false
//   page_1.innerHTML = '';
// }


// Get value form 



function handleNameChange() {
  let name_prj = document.querySelector('.prj-name').value;


}

function handleTypeChange() {
  var type_prj = document.querySelector('input[name="gridRadios"]:checked').value;
  console.log(type_prj);
}

function handleDescripChange() {
  var descrip_prj = document.querySelector('.value-descrip').value;
  console.log(descrip_prj);
}


function handleMssvChange() {
  var array_MSSV = document.querySelectorAll('input[name="mssv"]');
  console.log(array_MSSV[0].value);
}

function handleNameMemberChange() {
  var array_Name_Member = document.querySelectorAll('input[name="hvt"]');
  // console.log(array_Name_Member[0].value);
}

var i = 0;

function AddProject() {
  let name_prj = document.querySelector('.prj-name').value;
  let type_prj = document.querySelector('input[name="gridRadios"]:checked').value;
  var descrip_prj = document.querySelector('.value-descrip').value;
  var objarray_MSSV = document.querySelectorAll('input[name="mssv"]');
  var array_Name_Member = document.querySelectorAll('input[name="hvt"]');
  let array_MSSV = [...objarray_MSSV];
  let dssv = array_MSSV.map((e) => e.value)
  console.log(dssv.join(' '));
  let new_prj =
    `<tr>
    <th scope="row"></th>
    <td>${name_prj}</td>
    <td>${type_prj}</td>
    <td>
    ${dssv.join(`<br>`)}
    </td>
    <td>${descrip_prj}</td>
  </tr>`;

  let list_prj = document.querySelector('.list_project');
  list_prj.insertAdjacentHTML('beforeend', new_prj);


}