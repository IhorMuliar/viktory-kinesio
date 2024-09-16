import React from 'react'

import image from "../assets/image.jpg";

export const Hero = () => {
  return (
    <section className="hero">
                <div className="container">
                    <div className="intro">
                        <h1 className="bold-xl">
                            The title is the main point of the sentence
                        </h1>
                        <p>
                            Description a short transcript of the main sentence. Use 1-2 sentences in 1-3 lines.
                        </p>
                        <button className="primary size-l primary reversed">
                            Contact
                        </button>
                    </div>
                     <img src={image} alt="image test" />
                </div>
            </section>
  )
}
