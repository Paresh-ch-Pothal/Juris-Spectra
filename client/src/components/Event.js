import React from 'react'
import { Helmet } from 'react-helmet'
import event1 from '../assets/event1.jpg'
import event2 from '../assets/event2.jpg'
import stars from '../assets/stars.svg'

const Event = ({ mode }) => {
    return (
        <>
            <Helmet>
                <title>Events - Juris Spectra</title>
                <meta name="description" content="Stay updated with the latest events in the legal industry. Juris Spectra provides information on upcoming legal events, seminars, and conferences to help you stay informed and connected." />
                <meta name="keywords" content="Juris Spectra, legal events, seminars, conferences, legal industry, event updates" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
            </Helmet>
            <div className="event">
                <h1 className='pric'>Event</h1>
                <div className="box-event">
                    <div className="image-event">
                        <img src={event1} height={270} width={270} alt="event1" srcset="" />
                    </div>
                    <div className="text-event">
                        <h1>Navigating New Laws with Kajal Pundir
                        </h1>
                        <div><h4>Speaker: </h4><span>Kajal Pundir, Assistant Professor at CPJ College of Higher Studies & School of Law, IPU Delh</span></div>
                        <h4>Key Takeaways:
                        </h4>
                        <div>
                            <div>
                                <span><h6 className='eventh6'>Upcoming Legal Changes:</h6></span>
                                <span>The focus of the webinar was on the Bharatiya Nagarik Suraksha Sanhita, Bharatiya Nyaya Sanhita, and Bharatiya Sakshya Adhiniyam, which will soon replace the Indian Penal Code, 1860, the Criminal Procedure Code, (1898), 1973, and the Indian Evidence Act, 1872.</span>
                            </div>
                            <div>
                                <span><h6 className='eventh6'>Public Impact:</h6></span>
                                <span>We explored the potential effects these changes will have on the general public.
                                </span>
                            </div>
                            <div>
                                <span><h6 className='eventh6'>Professional Challenges:</h6></span>
                                <span>The session provided insights into the challenges that legal professionals might face with the new implementations.
                                </span>
                            </div>
                            <div>
                                <span><h6 className='eventh6'>Student Guidance:</h6></span>
                                <span>Law students received valuable advice on what to expect and how to prepare for the new legal landscape.
                                </span>
                            </div>
                        </div>
                        <p style={{marginTop: "10px"}}>We are delighted to share that we have successfully conducted an informative and engaging webinar on the topic "New Laws are going to be implemented from 1st July!" This event aimed to shed light on the significant changes and their implications for the legal community.
                        </p>
                    </div>
                </div>
                <div className="box-event">
                    <div className="image-event">
                        <img src={event2} height={270} width={270} alt="event1" srcset="" />
                    </div>
                    <div className="text-event"><h1>Mastering Contract Drafting - Fundamentals to Freelancing Success
                    </h1>
                        <span><h4>Speaker: </h4><span>Prakhar Sharma, International Contract Expert and Founder of Prime Draft Solutions.
                        </span></span>
                        <h4>Key Takeaways:
                        </h4>
                        <div>
                            <div>
                                <span><h6 className='eventh6'>Advanced Contract Drafting Techniques:</h6></span>
                                <span>Participants gained expert insights into advanced contract drafting, enhancing their skills and proficiency.
                                </span>
                            </div>
                            <div>
                                <span><h6 className='eventh6'>Freelancing Success:</h6></span>
                                <span>The session focused on strategies to propel freelancing careers to new heights, providing valuable tips and guidance.
                                </span>
                            </div>
                            <div>
                                <span><h6 className='eventh6'>Professional Networking:</h6></span>
                                <span> Attendees had the opportunity to connect with a community of driven professionals, fostering valuable networking opportunities.
                                </span>
                            </div>
                        </div>
                        <p style={{marginTop: "10px"}}>We are thrilled to announce that we successfully conducted the webinar "Mastering Contract Drafting: Fundamentals to Freelancing Success." This event was designed to provide participants with advanced insights into contract drafting and strategies to elevate their freelancing careers.

                        </p></div>
                </div>

                <h2 className="pric">Testimonials</h2>
                <div className="test">
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Navigating New Laws with Kajal Pundir</h3>
                            <p>Well explained! Kajal ma'am was explaining the topics with all her spirit and enthusiasm. She made the learning easier. The host and Juris Spectra team were awesome and
                                they conducted the session so smoothly.</p>
                            <p class="source">&mdash; MANSI SINGH</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>2nd Year Law Student</span>
                        </div>

                        <div class="testimonial">
                            <h3>Navigating New Laws with Kajal Pundir</h3>
                            <p>Thought sticking!</p>
                            <p class="source">&mdash; Gautham M.S</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>4th Year Law Student</span>
                        </div>
                    </div>
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Navigating New Laws with Kajal Pundir</h3>
                            <p>The webinar was very informative. It clearly explained the benefits and changes in the revised criminal law, showing how it will improve the justice system and better protect rights.</p>
                            <p class="source">&mdash; TSOMA TIWARI</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>3rd Year Law Student</span>
                            <p>Lucknow Law College</p>
                        </div>

                        <div class="testimonial">
                            <h3>Navigating New Laws with Kajal Pundir</h3>
                            <p>Quite impressive, elaborative!</p>
                            <p class="source">&mdash; Arman Sheikh</p>
                        </div>
                    </div>
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Navigating New Laws with Kajal Pundir</h3>
                            <p>Webinar was veryinformative. Amazing content.</p>
                            <p class="source">&mdash; Rashi Singh</p>
                        </div>

                        <div class="testimonial">
                            <h3>Navigating New Laws with Kajal Pundir</h3>
                            <p>It was a great opportunity to get insights on the revised criminal laws from the professional itself.</p>
                            <p class="source">&mdash; Yagyanika Negi.</p>
                        </div>
                    </div>

                    <div className="duo">
                        <div class="testimonial">

                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p>It was really engaging and interactive and got a huge area of exposure to freelancing
                                relating to mastering the contract drafting.</p>
                            <p class="source">&mdash; Krisika Chhetri</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>

                        <div class="testimonial">
                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p>The sessions are very helpful for me, and for my brighter future.
                                The whole session is worth it for me.</p>
                            <p class="source">&mdash; Kashish Garg</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>
                    </div>

                    <div className="duo">
                        <div class="testimonial">
                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p>Please conduct more
                                webinars like this!</p>
                            <p class="source">&mdash; Asna Parveen</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>

                        <div class="testimonial">
                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p class="source">&mdash; Varunendra Ojha</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>
                    </div>

                    <div className="duo">
                        <div class="testimonial">

                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p class="source">&mdash; Isha Patel</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>

                        <div class="testimonial">
                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p class="source">&mdash; Mouli Singhal</p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>
                    </div>
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p class="source">&mdash; Subham Prasad
                            </p>
                            <div><span><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /><img style={{ filter: mode === "dark" && "invert()" }} src={stars} alt="" /></span></div>
                            <span>Law Student</span>
                        </div>

                        <div class="testimonial">
                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p>We want more seminars like this!</p>
                            <p class="source">&mdash;Akanksha Aggarwal</p>
                        </div>
                    </div>
                    <div className="duo">
                        <div class="testimonial">
                            "Everything was perfect!

                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p>Kindly bring up more
                                session like this.</p>
                            <p class="source">&mdash; SIDDIQUI KHWAJA MOHD
                                NADEEM NAZMA</p>
                        </div>

                        <div class="testimonial">
                            <h3>Mastering Contract Drafting - Fundamentals to Freelancing Success</h3>
                            <p>The session are very helpful and great. I personally gained new skills and knowledge for my brighter future.</p>
                            <p class="source">&mdash; Kahish Garg</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Event
