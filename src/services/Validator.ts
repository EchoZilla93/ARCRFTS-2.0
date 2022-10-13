class Validator {
  static email(v: string) {
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = regExp.test(v);
    if (validEmail && v.length >= 3) {
      return {
        isValid: true,
        message: "",
      };
    } else if (!validEmail || v.length <= 2) {
      return {
        isValid: false,
        message: "Incorrect email format",
      };
    } else if (v.length <= 0) {
      return {
        isValid: false,
        message: `Email cant't be blank`,
      };
    }
  }

  static password(v: string) {
    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    const validPass = regExp.test(v);

    if (validPass) {
      return {
        isValid: true,
        message: "",
      };
    } else if (v.length < 8) {
      return {
        isValid: false,
        message: "Password must be at leat 8 characters",
      };
    } else {
      return {
        isValid: false,
        message:
          "Password should contain at least a capital letter, small letter, number and special character",
      };
    }
  }

  static confirmPass(pass: string, confPass: string) {
    if (pass === confPass) {
      return {
        isValid: true,
        message: "",
      };
    } else {
      return {
        isValid: false,
        message: "Passwords not match",
      };
    }
  }

  static userName(v: string) {
    if (v.length >= 3 && v.length <= 12) {
      return { isValid: true, message: "" };
    } else if(v.length < 3){
      return { isValid: false, message: "Name should be at least 3 characters long" };
    }else{
      return { isValid: false, message: "Name should be maximum 12 characters long" };
    }
  }
}

export default Validator;
