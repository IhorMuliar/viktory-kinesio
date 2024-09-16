import React from 'react'
// import image from "@/public/Image.jpg";

export const Hero = () => {
  return (
    <section class="hero">
                <div class="container">
                    <div class="intro">
                        <h1 class="bold-xl">
                            The title is the main point of the sentence
                        </h1>
                        <p>
                            Description a short transcript of the main sentence. Use 1-2 sentences in 1-3 lines.
                        </p>
                        <button class="primary size-l primary reversed">
                            Contact
                        </button>
                    </div>
                    {/* <img src={image} alt="image" /> */}
                </div>
            </section>
  )
}
