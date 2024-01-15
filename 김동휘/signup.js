// 유효성 검사 여부를 기록할 객체 생성
const checkObj = {
    "userId"    : false,
    "userPwd1"  : false,
    "userPwd2"  : false,
    "userName"  : false,
    "year"      : false,
    "day"       : false,
    "email"     : false,
    "phone"     : false
};
// 아이디 유효성 검사
const userId = document.getElementById("userId");
const pId = document.getElementById("pId");

userId.addEventListener("input", function(){
    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        pId.innerHTML = "아이디를 입력해주세요.";
        pId.classList.add("error");
        checkObj.userId = false;

        return;
    }
    const RegExp = /^[a-zA-Z0-9]{6,15}$/;
    if(RegExp.test(this.value)){
        pId.innerText = "사용가능한 아이디입니다.";
        pId.classList.remove("error");
        pId.classList.add("confirm");
        this.style.border = "1px solid #dadada";
        checkObj.userId = true;
    }else{
        pId.innerText = "영어/숫자 6~15글자 사이로 작성해주세요.";
        pId.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.userId = false;
    }
})

// 비밀번호 유효성 검사
const pwd1 = document.getElementById("userPwd1");
const pwd2 = document.getElementById("userPwd2");
const pwText = document.getElementById("pwText");
const pPw = document.getElementById("pPw");

pwd1.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        pwText.innerHTML = "비밀번호를 입력해주세요.";
        pwText.classList.add("error");
        checkObj.userPwd1 = false;

        return;
    }
    const RegExp = /^[\w!@#_-]{10,15}$/;
    if(RegExp.test(this.value)){

        if(pwd2.value.trim().length ==0){
            pwText.innerText = "사용가능한 비밀번호입니다.";
            pwText.classList.remove("error");
            pwText.classList.add("confirm");
            this.style.border = "1px solid #dadada";
            checkObj.userPwd1 = true;
            
        }else{
            checkPw();
        }

    }else{
        pwText.innerText = "문자, 숫자, 기호(!,@,#,_,-)를 조합하여 10~15자로 입력해주세요.";
        pwText.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.userPwd1 = false;
    }

})

pwd2.addEventListener("input", checkPw);

function checkPw(){ 
    if(pwd2.value == pwd1.value){
        pPw.innerHTML = "비밀번호가 일치합니다.";
        pPw.classList.remove('error');
        pPw.classList.add("confirm");
        pwd2.style.border = "1px solid #dadada";
        checkObj.userPwd2 = true; 

    } else { 
        pPw.innerHTML = "비밀번호가 일치하지 않습니다.";
        pPw.classList.remove('confirm');
        pPw.classList.add("error");
        pwd2.style.border = "1px solid red";
        checkObj.userPwd2 = false;
    }
}

// 이름 유효성 검사
const userName = document.getElementById("userName");
const pName = document.getElementById("pName");

userName.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        pName.innerHTML = "이름을 입력해주세요.";
        pName.classList.add("error");
        checkObj.userName = false;

        return;
    }

    const RegExp = /^[a-zA-Z가-힣 ]{2,15}$/;
    if(RegExp.test(this.value)){
        pName.innerHTML = "사용가능한 이름입니다.";
        pName.classList.remove("error");
        pName.classList.add("confirm");
        this.style.border = "1px solid #dadada";
        checkObj.userName = true;
    }else{
        pName.innerHTML = "이름이 유효하지 않습니다.";
        pName.classList.remove('confirm');
        pName.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.userName = false;
    }
})

// 생년월일 유효성 검사
const yera = document.getElementById("year");
const months = document.getElementById("months");
const day = document.getElementById("day");
const birth = document.getElementById("birth");

yera.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        birth.innerHTML = "년도를 입력해주세요.";
        birth.classList.add("error");
        checkObj.year = false;
        return;
    }

    const regExp = /^(19\d\d|20[0-2]\d)$/;
    if(regExp.test(this.value)){
        birth.innerHTML = "올바른 형식의 년도입니다.";
        birth.classList.remove("error");
        birth.classList.add("confirm");
        this.style.border = "1px solid #dadada";
        checkObj.year = true;
    }else{
        birth.innerHTML = "올바르지않은 형식의 년도입니다.";
        birth.classList.remove('confirm');
        birth.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.year = false;
    }
})

day.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        birth.innerHTML = "날짜를 입력해주세요.";
        birth.classList.add("error");
        checkObj.day = false;

        return;
    }

    const regExp = /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
    if(regExp.test(this.value)){
        birth.innerHTML = "올바른 형식의 날짜입니다.";
        birth.classList.remove("error");
        birth.classList.add("confirm");
        this.style.border = "1px solid #dadada";
        checkObj.day = true;
    }else{
        birth.innerHTML = "올바르지않은 형식의 날짜입니다.";
        birth.classList.remove('confirm');
        birth.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.day = false;
    }
})

// 성별 체크 유무
const gender = document.getElementsByName("gender");
const pGender = document.getElementById("pGender");

gender[0].addEventListener("input", function(){
    pGender.innerText = "당신은 남자입니다."
    pGender.classList.remove("error");
    pGender.classList.add("confirm");
    this.style.border = "1px solid #dadada";
})
gender[1].addEventListener("input", function(){
    pGender.innerText = "당신은 여자입니다."
    pGender.classList.remove("error");
    pGender.classList.add("confirm");
    this.style.border = "1px solid #dadada";
})

// 이메일 유효성 검사
const email = document.getElementById("email");
const pEmail = document.getElementById("pEmail");

email.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        pEmail.innerHTML = "이메일을 입력해주세요.";
        pEmail.classList.add("error");
        checkObj.email = false;
        return;
    }
    const regExp = /^[\w_-]{4,}@[\w_-]+(\.\w+){1,3}$/;
    if(regExp.test(this.value)){
        pEmail.innerHTML = "올바른 형식의 이메일입니다.";
        pEmail.classList.remove("error");
        pEmail.classList.add("confirm");
        this.style.border = "1px solid #dadada";
        checkObj.email = true;
    }else{
        pEmail.innerHTML = "올바르지않은 형식의 이메일입니다.";
        pEmail.classList.remove('confirm');
        pEmail.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.email = false;
    }
    
})

// 휴대폰 유효성 검사
const phone = document.getElementById("phone");
const pPhone = document.getElementById("pPhone");

phone.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        this.style.border = "1px solid red";
        pPhone.innerHTML = "휴대폰 번호를 입력해주세요.";
        pPhone.classList.add("error");
        checkObj.phone = false;

        return;
    }
    const regExp = /^0(1[01679]|2|[3-6][1-5]|70)\d{3,4}\d{4}$/;
    if(regExp.test(this.value)){
        pPhone.innerHTML = "유효한 휴대폰 번호입니다.";
        pPhone.classList.remove("error");
        pPhone.classList.add("confirm");
        this.style.border = "1px solid #dadada";
        checkObj.phone = true;
    }else{
        pPhone.innerHTML = "유효하지않은 휴대폰 번호입니다.";
        pPhone.classList.remove('confirm');
        pPhone.classList.add("error");
        this.style.border = "1px solid red";
        checkObj.phone = false;
    }
    
})

function signUpValidate(){

    // checkObj에 있는 모든 속성을 반복 접근하여
    // false가 하나라도 있는 경우에는 form태그 기본 이벤트 제거
    let str;

    // 객체용 향상된 for문
    for (let key in checkObj) {

        // 현재 접근 중인 key의 value가 false인 경우
        if(!checkObj[key]){

            switch(key){
                case "userId"   : str="아이디가"; break;
                case "userPwd1" : str="비밀번호가"; break;
                case "userPwd2" : str="비밀번호 확인이"; break;
                case "userName" : str="이름이"; break;
                case "year"     : str="년도가"; break;
                case "day"      : str="날짜가"; break;
                case "email"    : str="이메일"; break;
                case "phone"    : str="전화번호가"; break;
            }

            str += " 유효하지 않습니다.";

            alert(str);

            document.getElementById(key).focus();

            return false; // form 태그 기본 이벤트 제거
        }
    }
    // 성별이 체크되어있지 않은 경우
    if(!gender[0].checked && !gender[1].checked){
        pGender.innerText = "성별을 골라주세요."
        pGender.classList.remove("confirm");
        pGender.classList.add("error");
        return false;
    }
    // 생년월일 중 월을 선택하지 않은경우
    if(months.value == "월"){
        birth.innerText = "월을 골라주세요."
        birth.classList.remove("confirm");
        birth.classList.add("error");
        return false;
    }

    return true; // form 태그 기본 이벤트 수행

}

