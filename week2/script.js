let info = document.querySelector('.info-i');
let validname = document.getElementById('validname');

let nickname = document.querySelector('.nickname-i');
let validnickname = document.getElementById('validnickname');

let email = document.querySelector('.email-i');
let validemail = document.getElementById('validemail');
function email_check(e) {
  const regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return e != '' && e != 'undefined' && regex.test(e);
}

let pw = document.querySelector('.pw-i');
let validpw = document.getElementById('validpw');
function pw_check(e) {
  const regex =
    /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{5,20}$/;
  return e != '' && e != 'undefined' && regex.test(e);
}

let pwConfirm = document.querySelector('.pw-confirm-i');
let validpwConfirm = document.getElementById('validpwConfirm');

let open = document.getElementById('register-btn');
let close = document.getElementById('closebtn');
const wrapper = document.querySelector('.modal-wrapper');

open.addEventListener('click', () => {
  wrapper.style.display = 'flex';
});
close.addEventListener('click', () => {
  wrapper.style.display = 'none';
});

function checkAll(check) {
  if (!check.includes(false)) {
    open.disabled = false;
  }
}

let check = [false, false, false, false, false];

info.addEventListener('input', () => {
  if (info.value == '' || info.value.trim() == '') {
    validname.innerText = '필수 입력 항목입니다!';
    validname.style.color = 'red';
    validname.style.visibility = 'visible';
    check[0] = false;
    open.disabled = true;
  } else {
    validname.innerText = '멋진 이름이네요!';
    validname.style.color = 'greenyellow';
    validname.style.visibility = 'visible';
    check[0] = true;
    checkAll(check);
  }
});

nickname.addEventListener('input', () => {
  if (nickname.value.length < 2 || nickname.value.length > 5) {
    validnickname.innerText = '닉네임은 2~5글자로 구성해주세요!';
    validnickname.style.color = 'red';
    validnickname.style.visibility = 'visible';
    check[1] = false;
    open.disabled = true;
  } else {
    validnickname.innerText = '멋진 닉네임이군요!';
    validnickname.style.color = 'greenyellow';
    validnickname.style.visibility = 'visible';
    check[1] = true;
    checkAll(check);
  }
});

email.addEventListener('input', () => {
  if (!email_check(email.value)) {
    validemail.innerText = '올바른 메일 형식이 아닙니다!';
    validemail.style.color = 'red';
    validemail.style.visibility = 'visible';
    check[2] = false;
    open.disabled = true;
  } else {
    validemail.innerText = '올바른 메일 형식입니다!';
    validemail.style.color = 'greenyellow';
    validemail.style.visibility = 'visible';
    check[2] = true;
    checkAll(check);
  }
});

pw.addEventListener('input', () => {
  if (!pw_check(pw.value)) {
    validpw.innerText = '영어+숫자+특수문자를 조합하여 작성해주세요.';
    validpw.style.color = 'red';
    validpw.style.visibility = 'visible';
    check[3] = false;
    open.disabled = true;
  } else {
    validpw.innerText = '안전한 비밀번호입니다!';
    validpw.style.color = 'greenyellow';
    validpw.style.visibility = 'visible';
    check[3] = true;
    if (pw.value != pwConfirm.value) {
      validpwConfirm.innerText = '비밀번호가 일치하지 않습니다.';
      validpwConfirm.style.color = 'red';
      validpwConfirm.style.visibility = 'visible';
      check[4] = false;
      open.disabled = true;
    } else {
      if (pw.value.trim() == '') validpwConfirm.style.visibility = 'hidden';
      else validpwConfirm.style.visibility = 'visible';
      validpwConfirm.innerText = '비밀번호가 일치합니다.';
      validpwConfirm.style.color = 'greenyellow';
      check[4] = true;
      checkAll(check);
    }
    checkAll(check);
  }
});

pwConfirm.addEventListener('input', () => {
  if (pw.value != pwConfirm.value) {
    validpwConfirm.innerText = '비밀번호가 일치하지 않습니다.';
    validpwConfirm.style.color = 'red';
    validpwConfirm.style.visibility = 'visible';
    check[4] = false;
    open.disabled = true;
  } else {
    if (pw.value.trim() == '') validpwConfirm.style.visibility = 'hidden';
    else validpwConfirm.style.visibility = 'visible';
    validpwConfirm.innerText = '비밀번호가 일치합니다.';
    validpwConfirm.style.color = 'greenyellow';
    check[4] = true;
    checkAll(check);
  }
});
