import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope, FaPhoneAlt, FaTrademark } from "react-icons/fa"
import { GrOrganization, GrDocumentPerformance } from "react-icons/gr"
import { connect } from "react-redux";
import { clearRegisterUser, registerUser } from "../../store/actions/user";
import HelmetTitle from "../../UI/Helmet/MetaDecorator";

class Register extends Component {

   state = {
      formData: {
         email: "",
         trade_mark: "",
         password: "",
         phone: "",
         first_name: "",
         last_name: "",
         organization: "",
         itn: ""
      },
      checkRules: false,
      message: "",
      passwordRepeat: ""
   };

   componentDidMount() {
      if (this.props.user
         && this.props.user.userRegister
         && this.props.user.userRegister.email) {
         this.props.history.push('/login')
      }
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.user && nextProps.user.userRegister && nextProps.user.userRegister.email) {
         nextProps.history.push('/login');
      }
   }

   componentWillUnmount() {
      this.props.dispatch(clearRegisterUser())
   }

   handleInput = (event, name) => {
      const newFormData = this.state.formData;

      if (name === 'passwordRepeat') {
         this.setState({
            passwordRepeat: event.target.value
         })
      } else {
         if (name === 'organization' || "trade_mark") {
            newFormData[name] = event.target.value;
         } else {
            newFormData[name] = event.target.value.trim();
         }
         this.setState({
            formData: newFormData
         })
      }
   };

   renderMessage = () => (
      <div className="message alert alert-danger">
         <p>{this.state.message}</p>
      </div>
   );

   handleChecked = (checked) => {
      this.setState({
         checkRules: checked
      });
   };

   submitForm = async (e) => {
      e.preventDefault();

      let reg = new RegExp('^[0-9]{9}$');

      if (this.state.checkRules) {
         this.setState({ message: "" });

         if (this.state.formData.password === this.state.passwordRepeat) {
            if (reg.test(this.state.formData.itn)) {
               await this.props.dispatch(registerUser(this.state.formData))

            } else {
               this.setState({ message: "ИНН должно содержать 9 цифр" })
            }
         } else {
            this.setState({ message: "Пароли не совпадают" })
         }

      } else {
         this.setState({ message: "Ознакомьтесь с офертой" });
      }
   };

   render() {

      return (
         <section className="register-user">

            <HelmetTitle title="Регистрация в Smart Deals" content="Регистрация в Smart Deals" />

            <div className="container">
               <div className="row">
                  <div className="col-md-12">

                     <form onSubmit={(e) => this.submitForm(e)} className="register-box" autoComplete="on">

                        <h2>Зарегистрироваться</h2>

                        <div className="container">
                           <div className="row">

                              <div className="col-lg-6">

                                 <div className="form-group">
                                    <GrOrganization />
                                    <input
                                       type="text"
                                       placeholder="Название организации"
                                       className="form-control box-input"
                                       minLength={3}
                                       name="organization"
                                       required={true}
                                       value={this.state.formData.organization}
                                       onChange={(event) => this.handleInput(event, "organization")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <GrDocumentPerformance />
                                    <input
                                       type="text"
                                       placeholder="ИНН"
                                       className="form-control box-input"
                                       minLength={9}
                                       maxLength={9}
                                       name="itn"
                                       required={true}
                                       value={this.state.formData.itn}
                                       onChange={(event) => this.handleInput(event, "itn")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <FaTrademark />
                                    <input
                                       type="text"
                                       placeholder="Торговая марка"
                                       className="form-control box-input"
                                       minLength={3}
                                       name="trade_mark"
                                       required={true}
                                       value={this.state.formData.trade_mark}
                                       onChange={(event) => this.handleInput(event, "trade_mark")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <FaUserAlt />
                                    <input
                                       type="text"
                                       placeholder="Ваше имя"
                                       className="form-control box-input"
                                       name="first_name"
                                       minLength={2}
                                       required={true}
                                       value={this.state.formData.first_name}
                                       onChange={(event) => this.handleInput(event, "first_name")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <FaUserAlt />
                                    <input
                                       type="text"
                                       placeholder="Ваша фамилия"
                                       className="form-control box-input"
                                       name="last_name"
                                       minLength={2}
                                       required={true}
                                       value={this.state.formData.last_name}
                                       onChange={(event) => this.handleInput(event, "last_name")}
                                    />
                                 </div>

                              </div>

                              <div className="col-lg-6">

                                 <div className="form-group">
                                    <FaPhoneAlt />
                                    <input
                                       type="tel"
                                       placeholder="Ваш номер телефона"
                                       className="form-control box-input"
                                       name="phone"
                                       required={true}
                                       minLength={9}
                                       maxLength={18}
                                       value={this.state.formData.phone}
                                       onChange={(event) => this.handleInput(event, "phone")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <FaEnvelope />
                                    <input
                                       type="email"
                                       className="form-control box-input"
                                       placeholder="Ваш email"
                                       name="email"
                                       required={true}
                                       value={this.state.formData.email}
                                       onChange={(event) => this.handleInput(event, "email")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <FaLock />
                                    <input
                                       type="password"
                                       placeholder="Ваш пароль"
                                       className="form-control box-input"
                                       name="password"
                                       required={true}
                                       minLength={6}
                                       value={this.state.formData.password}
                                       onChange={(event) => this.handleInput(event, "password")}
                                    />
                                 </div>

                                 <div className="form-group">
                                    <FaLock />
                                    <input
                                       type="password"
                                       placeholder="Повторите пароль"
                                       className="form-control box-input"
                                       name="password-repeat"
                                       required={true}
                                       minLength={6}
                                       value={this.state.passwordRepeat}
                                       onChange={(event) => this.handleInput(event, "passwordRepeat")}
                                    />
                                 </div>


                                 <div className="buttons">
                                    <Link
                                       className="check-rules"
                                       to="/rules"
                                       target="_blank"
                                       onClick={e => this.setState({checkRules: true})}
                                    >
                                       <input
                                          name="check-rules"
                                          type="checkbox"
                                          checked={this.state.checkRules}
                                          onChange={event => this.handleChecked(event.target.checked)}
                                       />
                                        Ознакомлен с офертой
                                     </Link>
                                    <button type="submit" className="btn btn-primary form-control">
                                       Зарегистрироваться
                                     </button>
                                 </div>
                              </div>

                           </div>
                        </div>

                        {
                           this.props.user
                              && this.props.user.userRegister
                              && this.props.user.userRegister.error ?
                              <div className="message alert alert-danger">
                                 <p>{this.props.user.userRegister.error}</p>
                              </div>
                              : null
                        }

                        {
                           this.state.message !== ""
                              ? this.renderMessage()
                              : null
                        }
                     </form>

                  </div>
               </div>
            </div>
         </section>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r
   }
}

export default connect(mapStateToProps)(Register);