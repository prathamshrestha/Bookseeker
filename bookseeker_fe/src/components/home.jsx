import React from 'react';
import './style/style.css'
import './style/fonts/linea-basic-10.eot'
import './style/fonts/linea-basic-10.svg'
import './style/fonts/linea-basic-10.ttf'
import './style/fonts/linea-basic-10.eot'
import { Button, Form, Input, Label, Header, Icon, TextArea, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'



class Home extends React.Component {

	// state = {
	// 	username: '',
	// 	password: '',
	// 	first_name: '',
	// 	middle_name: '',
	// 	last_name: '',
	// 	confirm_password: '',
	// 	contact_number: '',
	// 	email_address: '',
	// 	address: '',
	//   };
	  
	
	
	
	//   handle_change = e => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	this.setState(prevstate => {
	// 	  const newState = { ...prevstate };
	// 	  newState[name] = value;
	// 	  return newState;
	// 	});
	//   };
	
	  
	
    render(){

		
 
        return(
		<div>
		<div className='header'>
		
			<div className="main">
			<div className="logo">
				<img src="css/book1.png" /> 
			</div>
				<ul className=".ul">
					<li className="active"><a href="#">Home</a></li>
					<li><a href="#">Books</a></li>
					<li><a href="/login/">Log in</a></li>
					<li><a href="/register/">Sign up</a></li>
                </ul>
                
               
            </div>
            <div className="search-box-div">
                <div className="search-box">
                    <input type="text" className="search-box__input" placeholder="enter your search" aria-label="search"/>
                    <button className="search-box__submit"><i className="icon-basic-magnifier" aria-label="submit search"></i></button>
                </div>
			
			<div className="title">
				<h1>Book Seeker</h1>
			</div>
			
			<div className="button">
				<a href="/booklist/" className="btn">BUY BOOKS</a>
                <a href="/sellbook/" className="btn">SELL BOOKS</a>
                <a href="#" className="btn">RENT BOOKS</a>
			</div>
			
		
		</div>
	
    
    
    <div className="popup" id="popup">
        <div className="popup__content">
         <form action="#" className="form">

            <div >
                <h2 className="heading-secondary">
                   Join bookseeker
                </h2>
                <a href="#main" className="popup__close">&times;</a>
            </div>

             <div className="form__group">
                <label for="firstname"  className="one">First name</label>
                 <input type="text" className="form__input" placeholder="First name" id="firstname" required />
                 </div>
             <div className="form__group">
                <label for="middlename" className="two">Middle name</label>
                <input type="text" className="form__input" placeholder="Middle name" id="middlename" required />
              
            </div>
            <div className="form__group">
                <label for="lastname" className="three">last name</label>
                <input type="text" className="form__input" placeholder="Last name" id="lastname" required />
               
                
            </div>
            <div className="form__group">
                <label for="email" className="four">Email address</label>
            
                <input type="email" className="form__input" placeholder="Email address" id="email" required />
            </div>
            <div className="form__group">
                <label for="uname" className="five">Username</label>
                <input type="text" className="form__input" placeholder="Username" id="uname" required />
               
            </div>
            <div className="form__group">
                <label for="contact" className="six">Contact number</label>
                <input type="text" className="form__input" placeholder="Contact number " id="contact" required />
               
            </div>
            <div className="form__group">
                <label for="Address" className="seven">Address</label>
                <input type="text" className="form__input" placeholder="Address " id="Address" required />
               
            </div>
            <div className="form__group">
                <label for="Password" className="eight"  className="pword"  >Password</label>
                <input type="password" className="form__input" placeholder="Password " id="Password" required />
               
            </div>
            <div className="form__group">
                <label for="cpassword" className="nine">Confirm Password</label>
                <input type="password" className="form__input" placeholder="Confirm password " id="cpassword" required />
              
            </div>
            <div className="form__group">
                <label for="checkbox" className="ten">Is college student</label>
                <input type="checkbox" className="teni"  id="checkbox"  />
              
            </div>
        <button className="buton"><a href="#" className="butn">Sign up</a></button>
            
         </form>
        </div>
    </div>

    <div className="popupl" id="popupl">
        <div className="popupl__content">
            <div >
                <h2 className="heading-secondary-2">
                  Welcome back
                </h2>
                <a href="#main" className="popupl__close">&times;</a>
            </div>

            <form action="#" className="form">

            <div className="form__group move">
                <label for="email" className="four2">Email address</label>
            
                <input type="email" className="input" placeholder="Email address" id="email" required />
            </div>

            <div className="form__group">
                <label for="password" className="four3">Password</label>
            
                <input type="password" className="input" placeholder="Password" id="Password" required />
            </div>
<div className="move-button">
    <button className="buton2"><a href="#" className="butn">Log in</a></button>
</div>
            
        </form>
        </div>
    </div>
	</div>
	</div>
		);
		}}
		
export default Home;