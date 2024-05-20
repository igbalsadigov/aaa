import React from 'react'
import style from '../Section/Section.module.css'

const Section = () => {
    return (
        <div>
            <section className={style.siteSec}>
                <div className={style.container}>
                    <div className={style.sect}>
                      <span> Mark Rodriguez, 12 yrs. old </span> 
                      <h2>Needs a Loving Parents</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                     <button>Adopt Her Now</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section
