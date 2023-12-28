function signUp(){

    const inputId = document.querySelector("#userId");
    const inputPw = document.querySelector("#userPwd1");
    const inputPw2 = document.querySelector("#userPwd2");
    const inputName = document.querySelector("#userName");
    const inputYear = document.querySelector("#year");
    const inputDay = document.querySelector("#day");
    const inputGender = document.getElementsByName("gender");
    const inputEmail = document.getElementById("email");
    const inputPhone = document.getElementById("phone");

    const pId = document.getElementById("pId");
    const pPw1 = document.getElementById("pwText");
    const pPw2 = document.getElementById("pPw");
    const pName = document.getElementById("pName");
    const pBirth = document.getElementById("birth");
    const pGender = document.getElementById("pGender");
    const pEmail = document.getElementById("pEmail");
    const pPhone = document.getElementById("pPhone");

    if(inputId.value == ""){
        inputId.style.border = "1px solid red";
        pId.innerHTML = "아이디를 입력해주세요.";
    }
    if(inputPw.value == ""){
        inputPw.style.border = "1px solid red";
        pPw1.innerHTML = "<p>비밀번호를 입력해주세요.</p>";
        
    }
    if(inputPw2.value == ""){
        inputPw2.style.border = "1px solid red";
        pPw2.innerHTML = "비밀번호를 입력해주세요.";
    }
    if(inputName.value == ""){
        inputName.style.border = "1px solid red";
        pName.innerHTML = "이름을 입력해주세요.";
    }
    if(inputYear.value == "" || inputDay.value == ""){
        pBirth.innerHTML = "생년월일을 입력해주세요.";
    }
    if (!inputGender[0].checked && !inputGender[1].checked) {
        pGender.innerHTML = "성별을 선택해주세요.";
    }
    if(inputEmail.value == ""){
        inputEmail.style.border = "1px solid red";
        pEmail.innerHTML = "이메일을 입력해주세요.";
    }
    if(inputPhone.value == ""){
        inputPhone.style.border = "1px solid red";
        pPhone.innerHTML = "휴대폰 번호를 입력해주세요.";
    }
    
}