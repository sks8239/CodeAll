  'use client'
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import SignUpWrapper from "../SignUp/SignUpStyledComponent";
  import { RootState } from "../../redux/store";
  import axios from "axios";
  import UniversityModal from "./UniversityModal";
  import Link from "next/link";
  import {useRouter} from "next/navigation";


  const CodeAllSignUp = () => {
    const [formValues, setFormValues] = useState({
      email: "",
      email2: "",
      password: "",
      confirmPassword: "",
      name: "",
      nickname: "",
      phone: "",
    });
    const [formErrors, setFormErrors] = useState({
      password: "",
      nickname: "",
      phone: "",
    });
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.signUp.isLoading);
    const error = useSelector((state: RootState) => state.signUp.error);
    const router =    useRouter();
    const selectUniv = useSelector((state:RootState)=> state.signUp.selectedUniversity)
    const handleInputChange = (e:any) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    };

    const isPasswordValid = (password:string) => {
      const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*\d).{8,16}$/;
      return passwordRegex.test(password);
    };

    const isNicknameValid = (nickname:string) => {
      const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/;
      return nicknameRegex.test(nickname);
    };

    const isPhoneValid = (phone:string) => {
      const phoneRegex = /^[0-9]{11}$/;
      return phoneRegex.test(phone);
    };

    const validateForm = () => {
      const errors = {
        password: "",
        nickname: "",
        phone: "",
      };

      if (!isPasswordValid(formValues.password)) {
        errors.password = "비밀번호는 특수문자 1개 이상, 소문자와 숫자를 포함하고 8자리~16자리여야 합니다.";
      }

      if (!isNicknameValid(formValues.nickname)) {
        errors.nickname = "닉네임은 특수문자가 포함되지 않으며 2자리~8자리여야 합니다.";
      }

      if (!isPhoneValid(formValues.phone)) {
        errors.phone = "전화번호는 숫자만 입력 가능하며 11자리여야 합니다.";
      }

      setFormErrors(errors);

      return Object.values(errors).every((error) => error === "");
    };

    const handleSignUp = async () => {
      if (!validateForm()) {
        return;
      }

      const userData = {
        email: formValues.email + "@" + formValues.email2,
        pwd: formValues.password,
        realName: formValues.name,
        nickName: formValues.nickname,
        phone: formValues.phone,
        univName: selectUniv,
      };

      try {
        dispatch({ type: "SIGNUP_USER" });
        console.log(userData);
        const response = await axios.post("auth/signup", userData);
        console.log(response.data);
        dispatch({ type: "SIGNUP_USER_SUCCESS" });
        await router.push("/Login");
        alert("가입완료");
      } catch (error:any) {
        console.log(error)
        if (error.response && error.response.status === 409) {
          if(error.response.data.message=="중복된 아이디 입니다."){
            setEmailError("중복된 아이디입니다.")
          }
          if(error.response.data.message=="중복된 닉네임 입니다.")
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            nickname: "중복된 닉네임입니다.",
          }));
        }
      }
    };
    const handleUnivClick = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);

    };


    return (
        <SignUpWrapper>
          <div className="container">
            <div className="sign">
              <span>Sign Up</span>
            </div>
            <div className="hint">이메일</div>
            <div className="item2">
              <input
                  className="input"
                  placeholder="이메일"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
              />
              <span>@</span>
              <input
                  className="input"
                  placeholder="도메인"
                  name="email2"
                  value={formValues.email2}
                  onChange={handleInputChange}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            <div className="hint">비밀번호</div>
            <div className="item2">
              <input
                  className={`input ${formErrors.password ? "error" : ""}`}
                  type="password"
                  placeholder="특수문자 1개 이상, 소문자와 숫자를 포함한 8자리~16자리"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
              />
              {formErrors.password && <div className="error-message">{formErrors.password}</div>}
            </div>

            <div className="hint">비밀번호 확인</div>
            <div className="item2">
              <input
                  className="input"
                  type="password"
                  placeholder="패스워드 확인"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleInputChange}
              />
              {formValues.password !== formValues.confirmPassword ? (
                  <div className="error-message">비밀번호 불일치</div>
              ) : (
                  <div className="correct-message">비밀번호 일치</div>
              )}
            </div>

            <div className="hint">이름</div>
            <div className="item2">
              <input
                  className="input"
                  placeholder="이름"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
              />
            </div>

            <div className="hint">닉네임</div>
            <div className="item2">
              <input
                  className={`input ${formErrors.nickname ? "error" : ""}`}
                  placeholder="특수문자가 포함되지 않으며 2자리~8자리"
                  name="nickname"
                  value={formValues.nickname}
                  onChange={handleInputChange}
              />
              {formErrors.nickname && <div className="error-message">{formErrors.nickname}</div>}
            </div>

            <div className="hint">전화번호</div>
            <div className="item2">
              <input
                  className={`input ${formErrors.phone ? "error" : ""}`}
                  placeholder="-를 빼고 입력해주세요"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
              />
              {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
            </div>

            <div className="hint">대학교</div>
            <div className="item2" onClick={handleUnivClick}>
              <input
                  className="input"
                  placeholder="대학"
                  name="univ"
                  value={selectUniv||""}
                  readOnly
              />
            </div>
            <div className="item2">
              {isLoading ? (
                  <button className="disable_button" disabled>
                    회원가입 중...
                  </button>
              ) : (
                  <button className="enable_button" onClick={handleSignUp}>
                    회원가입
                  </button>
              )}
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
          <UniversityModal isVisible={isModalVisible} onClose={closeModal} />
        </SignUpWrapper>
    );
  };

  export default CodeAllSignUp;
