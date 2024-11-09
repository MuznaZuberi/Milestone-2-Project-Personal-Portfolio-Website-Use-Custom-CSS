 export default function Footer() {
	return(

     <div>
         
         {/*Footer Section Start*/}
         <div className = "social-icons">

         <a href = "https://www.linkedin.com/in/muzna-amir-z-280135264/" target ="blank">
           <img 
             src = "images/social_icon_01.png"
             alt = "linkedin_icon"
           />
        </a>

         <a  href="https://github.com/MuznaZuberi" target="blank">
           <img 
             src = "images/social_icon_02.png"
             alt = "github_icon"
           />
         </a>

         </div>


         <p className = "footer_p">© 2024 Muzna Amir Zubairi. All rights reserved. The use, reproduction or unauthorized distribution of the content of this portfolio are strictly prohibited.
         </p>
	     {/*Footer Section End*/}



     </div>


	)
}