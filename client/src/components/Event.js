import React from 'react'
import { Helmet } from 'react-helmet'

const Event = () => {
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO7ttq2LQF7wamqt1o90o1HZGTqmfMOn3PQ&s" alt="event1" srcset="" />
                    </div>
                    <div className="text-event">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis non consequatur, animi nihil, laborum, magnam id quibusdam laudantium aperiam aut pariatur repellat minus quaerat ullam? Ab autem totam quasi perferendis quod ullam, nam, labore perspiciatis enim, vitae saepe ratione aspernatur hic inventore libero voluptatem!</div>
                </div>
                <div className="box-event">
                    <div className="image-event">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO7ttq2LQF7wamqt1o90o1HZGTqmfMOn3PQ&s" alt="event1" srcset="" />
                    </div>
                    <div className="text-event">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis non consequatur, animi nihil, laborum, magnam id quibusdam laudantium aperiam aut pariatur repellat minus quaerat ullam? Ab autem totam quasi perferendis quod ullam, nam, labore perspiciatis enim, vitae saepe ratione aspernatur hic inventore libero voluptatem!</div>
                </div>
                <div className="box-event">
                    <div className="image-event">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO7ttq2LQF7wamqt1o90o1HZGTqmfMOn3PQ&s" alt="event1" srcset="" />
                    </div>
                    <div className="text-event">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis non consequatur, animi nihil, laborum, magnam id quibusdam laudantium aperiam aut pariatur repellat minus quaerat ullam? Ab autem totam quasi perferendis quod ullam, nam, labore perspiciatis enim, vitae saepe ratione aspernatur hic inventore libero voluptatem!</div>
                </div>
                <div className="box-event">
                    <div className="image-event">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO7ttq2LQF7wamqt1o90o1HZGTqmfMOn3PQ&s" alt="event1" srcset="" />
                    </div>
                    <div className="text-event">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis non consequatur, animi nihil, laborum, magnam id quibusdam laudantium aperiam aut pariatur repellat minus quaerat ullam? Ab autem totam quasi perferendis quod ullam, nam, labore perspiciatis enim, vitae saepe ratione aspernatur hic inventore libero voluptatem!</div>
                </div>

                <h2 className="pric">Testimonials</h2>
                <div className="test">
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque quis augue vel ipsum convallis egestas.</p>
                            <p class="source">&mdash; Testimonial Source</p>
                        </div>

                        <div class="testimonial">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque quis augue vel ipsum convallis egestas.</p>
                            <p class="source">&mdash; Testimonial Source</p>
                        </div>
                    </div>
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque quis augue vel ipsum convallis egestas.</p>
                            <p class="source">&mdash; Testimonial Source</p>
                        </div>

                        <div class="testimonial">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque quis augue vel ipsum convallis egestas.</p>
                            <p class="source">&mdash; Testimonial Source</p>
                        </div>
                    </div>
                    <div className="duo">
                        <div class="testimonial">

                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque quis augue vel ipsum convallis egestas.</p>
                            <p class="source">&mdash; Testimonial Source</p>
                        </div>

                        <div class="testimonial">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit odio eu maximus finibus. Quisque nec felis ligula. Quisque quis augue vel ipsum convallis egestas.</p>
                            <p class="source">&mdash; Testimonial Source</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Event
