export default function Contact() {
	return (
		<div>
          
          {/*Contact Section Start*/}
          <div className ="contact-head">
               <h1>Get In Touch</h1>


          <div className = "contact-container">
          <div className = "contact-items">
            <img 
                src="images/Me.jpg"
                alt = "Me_img"
            />

            <p className = "email">
                   muznazuberi123@gmailcom
            </p>
            <p>Let's Connect With Me!</p>

            <form>
              <legend>Name</legend>
              <input type = "name"/>
              <legend>Email</legend>
              <input type = "email"/>
                    
              <legend>Phone_no</legend>
              <input type = "email"/>

              <legend>Message</legend>
              <textarea/>                              
              </form>

                


          {/*Social Icon Start */}
            <a href = "https://www.linkedin.com/in/muzna-amir-z-280135264/" target ="blank">
                <img 
                  src = "images/social_icon_01.png"
                  alt = "linkedin-icon"
                  className = "form-icons"/>
            </a>


            <a  href="https://github.com/MuznaZuberi" target="blank">
                <img 
                   src = "images/social_icon_02.png"
                   alt = "github_icon"
                   className = "form-icons"/>
            </a>



                   
                <img 
                  src = "images/mail_icon.png"
                  alt = "mail_icon"
                  className = "form-icons"/>
          {/*Social Icon End*/}


          </div>
          </div>
          </div>
          {/*Contact Section End*/}


    </div>

	);
}