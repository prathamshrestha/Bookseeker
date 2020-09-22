import React from 'react';
import './style/style.css'

class Home extends React.Component {  
    render(){
        return(
			<header>
			<div>
				<div class="main">
					<div >
						<img src="./pic/book1.png"  />
					</div>
					<ul>
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">Books</a></li>
						<li><a href="#">Sign in</a></li>
						<li><a href="#" >Register</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>



					</ul>
				</div>
				
				<div class="title">
					<h1>Book Seeker</h1>
				</div>
				
				<div class="button">
					<a href="#" class="btn">BUY BOOKS</a>
					<a href="#" class="btn">SELL BOOKS</a>
				</div>
			</div>
		</header>
		    
        );
    }

}

export default Home;