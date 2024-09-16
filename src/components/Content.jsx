import React from 'react'

export const Content = () => {
  return (
    <section class="content">
                <div class="text-container">
                    <h2 class="bold-xl">
                        The title is what the block is about
                    </h2>
                    <div class="description">
                        <p>
                            Short description. Use 1-2 sentences in 2-4 lines
                        </p>
                        <p>
                            The description is the basic meaning. Use 1-2 sentences in 1-3 lines if alignment is centered. With a large amount of text, use the second type of content alignment
                        </p>
                    </div>
                </div>
                <div class="articles">
                    <article>
                        <img src="assets/image.jpg" alt="image" />
                        <div class="article-text">
                            <h3 class="bold-l">
                                Subtitle. The font cone can be larger
                            </h3>
                            <p>
                                Description in 3-5 lines
                            </p>
                        </div>
                    </article>
                    <article>
                        <img src="assets/image.jpg" alt="image" />
                        <div class="article-text">
                            <h3 class="bold-l">
                                Subtitle. The font cone can be larger
                            </h3>
                            <p>
                                Description in 3-5 lines
                            </p>
                        </div>
                    </article>
                </div>
            </section>
  )
}
