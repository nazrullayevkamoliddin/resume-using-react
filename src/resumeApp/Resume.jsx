import React from 'react'
import './resume.css'
import ME from './me.jpg'

const Resume = () => {
    return (
    <div>
           <div className='container'>
                <div className='right_Side'>
                    <div className='about'>
                        <h2 className='title2'> Profile </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam dolores, dolorem ipsum aspernatur 
                            perspiciatis earum minus enim qui voluptates voluptatum! Alias, officiis exercitationem! Voluptatum 
                            velit suscipit quasi nostrum iure numquam. Voluptate nisi placeat totam suscipit nostrum labore unde 
                             <br/><br/>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quas veritatis perferendis adipisci
                            quam animi, soluta obcaecati possimus dolore! Minima, consequuntur. Doloremque, ipsum consequatur? 
                            Quas expedita voluptates dicta saepe voluptatem.</p>
                    </div>
                    <div className='about'>
                        <h2 className='title2'> Experience </h2>
                        <div className='box'>
                            <div className='year_company'>
                                <h5> 2022 - Precent </h5>
                                <h5> IT PARK </h5>
                            </div>
                            <div className='text'>
                                <h4>Junior FrontEnd Developer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, laudantium!</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='year_company'>
                                <h5> 2022 - Precent </h5>
                                <h5> SRS GROUP </h5>
                            </div>
                            <div className='text'>
                                <h4> Graphic Dizayner </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, laudantium!</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='year_company'>
                                <h5> 2022 - Precent </h5>
                                <h5> Freelnace </h5>
                            </div>
                            <div className='text'>
                                <h4> FrontEnd Developer </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, laudantium!</p>
                            </div>
                        </div>
                    </div>

                    <div className='about skills'>
                        <h2 className='title2'> Professional Skills </h2>
                        <div className='box'>
                            <h4>Html</h4>
                            <div className='percent'>
                            <div style={{width:'95%'}}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Css</h4>
                            <div className='percent'>
                            <div style={{width:'88%'}}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>SASS</h4>
                            <div className='percent'>
                            <div style={{width:'88%'}}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Bootstrap</h4>
                            <div className='percent'>
                            <div style={{width:'90%'}}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>JS</h4>
                            <div className='percent'>
                            <div style={{width:'80%'}}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>React Js</h4>
                            <div className='percent'>
                            <div style={{width:'78%'}}></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Python</h4>
                            <div className='percent'>
                                <div style={{width:'50%'}}></div>
                            </div>
                        </div>
                    </div>  
                    
                    <div className='about interest'>
                        <h2 className='title2'> Interest </h2>
                        <ul>
                            <li> Gaming </li>
                            <li>  play tennis </li>
                            <li> chatting </li>
                            <li> blogging </li>
                        </ul>
                    </div>
                </div>
                <div className='left_Side'>
                    <div className='profileText'>
                        <div className="imgBox">
                            <img src={ME} alt="" />
                        </div>
                        <h2> KamoliddinDev <br /> <span>FrontEnd Developer</span> </h2>
                    </div>
                    <div className="contactInfo">
                        <h2 className='title'> Contact </h2>
                        <ul>
                            <li>
                                <span className='icon'> <i class="fa fa-phone"></i> </span>
                                <a className='text'> (+998) 94 077 1601 </a>
                            </li>
                            <li>
                                <span className='icon'> <i class="fa fa-globe"></i> </span>
                                <a className='text'> kamoliddindev.netlify.app </a>
                            </li>
                            <li>
                                <span className='icon'> <i class="fa fa-envelope"></i> </span>
                                <a className='text'> @kamoliddinnazrullayev </a>
                            </li>
                            <li>
                                <span className='icon'> <i class="fa fa-location-arrow"></i> </span>
                                <a className='text'> Andijan Uzbekistan </a>
                            </li>
                        </ul>
                    </div>

                    <div className='contactInfo education'>
                        <h3 className='title'> Education </h3>
                        <ul>
                            <li>
                                <h5>2012 -2016</h5>
                                <h4>1-4 form</h4>
                                <h4>31 general secondary school</h4>
                            </li>
                            <li>
                                <h5>2016-2020 </h5>
                                <h4>5-10 form</h4>
                                <h4>7 specialized state boarding school </h4>
                            </li>
                            <li>
                                <h5>2020-2023 </h5>
                                <h4>10-11 form </h4>
                                <h4>50 general secondary schools </h4>
                            </li>
                        </ul>
                    </div>

                    <div className='contactInfo language'>
                        <h3 className='title'> Languages </h3>
                        <ul>
                            <li>
                                <span className='text'> Uzbek </span>
                               <span className='percent'><div style={{width:'100%'}}></div></span>
                            </li>
                            <li>
                                <span className='text'> Russian </span>
                                <span className='percent'><div style={{width: '70%'}}></div></span>
                            </li>
                            <li>
                                <span className='text'> English </span>
                                <span className='percent'><div style={{width:'50%'}}></div></span>
                            </li>
                        </ul>
                    </div>

                </div>
           </div>
    </div>
     )
}

export default Resume;