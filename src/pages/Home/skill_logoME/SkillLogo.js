import React from 'react'
import './Skill_logo.scss'
import info from './info/info'

const SkillLogo = () => {

    const logos = info();
      return (<>
             <div className='skill_Strip' >
             <h2 className='skill_Strip-title' >Some of our <span> Technologies</span></h2>

            <div className='technology_Move-1'>
                <div className='technology_Move-1Flex-1' >
                        {logos.cards.map((elem,i)=>{
                            return <div key={`imgCon1${i}`} info={`${elem.title}`}  className='SL_IMGcontainer'>
                            <img key={`img1st${i}`}  src={elem.logo} alt={`${elem.title} logo`}
                                className='SL_IMGcontainer_img' />
                        </div>
                    })}
            </div>
            <div className='technology_Move-1Flex-2' >
                    {logos.cards.map((elem,i)=>{
                        return <div key={`imgCon1${i}`} info={`${elem.title}`}  className='SL_IMGcontainer'>
                        <img key={`img1st${i}`}  src={elem.logo} alt={`${elem.title} logo`}
                            className='SL_IMGcontainer_img' />
                        </div>
                    })}
            </div>
            </div>    
            </div>      
    </>)}

export default SkillLogo;
