import React from 'react'
import classes from './MoreThanDesign.module.css';
import budget from '../../assets/images/Budget@2x.svg';
import analysisimg from '../../assets/images/Analysis@2x.svg';
import certImg from '../../assets/images/Certification@2x.svg';
const  MoreThanDesign = () => {
    return (
        <div className={classes.DesignConstruction}>
        <div>
            <div className={classes.DesignTitle}>
                Much More than Design and Construction
            </div>
            <div className={classes.DesignRowContainer}>
                <div className={classes.DesignRow}> 
                    <div className={classes.DesignRowImg}>
                        <img src={analysisimg} alt="performance-analyses"/>
                    </div>
                    <div className={classes.DesignRowCopy}>
                        We will perform feasability and performance analyses to guide decision makers.
                    </div>
                </div>
                <div className={classes.DesignRow}>
                    <div className={classes.DesignRowImg}>
                        <img src={certImg} alt="certification-validation"/>
                    </div>
                    <div className={classes.DesignRowCopy}>
                        We handle permitting and design through certification and validation.
                    </div>
                </div>
                <div className={classes.DesignRow}>
                    <div className={classes.DesignRowImg}>
                        <img src={budget} alt="generate-budget"/>
                    </div>
                    <div className={classes.DesignRowCopy}>
                        Our experts will generate budget numbers to aid in appropriating funds for your project.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default MoreThanDesign;