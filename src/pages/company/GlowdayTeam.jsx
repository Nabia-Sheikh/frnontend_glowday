import React from 'react'
import glowdayTeam from "./glowdayTeam.webp"
const GlowdayTeam = () => {
  return (
    
        <main id="main_content">
            <section className="container margin-top-1">
                <div className="row">
                    <div className="column">
                        <div className="title title--smaller">
                            <h1 className="bold default-font">The Glowday team</h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="cms-content undefined">
                            <p><strong>Every business says it's different and it has a unique team...</strong></p>
                            <p>...but in an industry dominated by medical professionals and public sector
                                experience, the team at Glowday completely shatters the status quo.&nbsp;</p>
                            <p>We’re a bunch of people who have built careers in technology and marketing both on
                                agency side and in senior in-house roles, working with some of the UK’s biggest
                                household names including Admiral,&nbsp;Confused.com, Purplebicks, Pure Electric,
                                Lloyds, British Gas and Amigo Loans.</p>
                            <p></p>
                            <figure className="lightbox lightbox--transparent lightbox--auto-height">
                                <img
                                    className="lazyload"
                                    src={glowdayTeam}
                                    loading="lazy" decoding="async" width="768" height="432" alt=""/></figure>
                            <p>We understand that building a successful business is about solving problems. For
                                Glowday it’s two-fold. We're providing a tech platform that enables practitioners to
                                run their clinics seamlessly and efficiently. Simultaneously, in what is a
                                fragmented, confusing and unregulated market, we are providing consumers with a
                                sexy, simple and safe way to book aesthetic treatments. We also provide the tools
                                for practitioners to run their clinic effortlessly. </p>
                            <p>Glowday’s CEO, Hannah Russell, is a former science teacher and advocate of
                                non-surgical aesthetic treatments. Hannah identified a problem in the market that
                                women like her didn’t know where to find or how to book safe cosmetic treatments and
                                practitioners - often&nbsp;
                                institutionalised
                                &nbsp;from state based health care - were inexperienced and unconfident in
                                servicing and marketing to consumers.&nbsp;
                            </p>
                            <p>Alongside her husband Joby Russell, who as a former director at Purplebricks
                                and&nbsp;Confused.com, has had significant success in fulfilling a marketplace, they
                                set about building a team capable of developing and delivering a solution - the UK’s
                                first aesthetics marketplace and clinic management system. The team, which has a
                                vast range of experience in technology, financial services, pharmaceuticals,
                                clothing, and even electric scooters - and with core skills in coding, brand
                                marketing, digital marketing, design and communications, has rapidly built Glowday
                                into what is now the UK’s biggest booking platform for non-surgical cosmetic
                                treatments.<br/></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     )
}

export default GlowdayTeam