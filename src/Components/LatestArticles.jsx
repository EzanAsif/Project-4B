import React from 'react'
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

const LatestArticles = ({secondaryHeading, PrimaryHeading, LinkText, innerPara, innerServices}) => {
    return (
        <>
            <div className = "LatestArticle">
                <div className="latestArticle-secHeading">
                    {secondaryHeading}
                </div>
                <div className="latestArticle-PrimaryHeading">
                    <h3 className = "Primary_Heading0">{PrimaryHeading[0]}</h3>
                    {/* <br/> */}
                    <h4 className = "Primary_Heading1">{PrimaryHeading[1]}</h4>
                </div>
                <div className="latestArticle-Link"><a href="/">{LinkText}</a></div>
            </div>
            <br/>
            <div className="latestArticle-active">
                <div className="latestArticle-active-secHeading">
                    {secondaryHeading}
                </div>
                <div className="latestArticle-active-PrimaryHeading">
                    {PrimaryHeading[0]}
                    <br/>
                    <h4>{PrimaryHeading[1]}</h4>
                </div>
                <div className="latestArticle-active-para">
                    <p>{innerPara}</p>
                </div>
                <div className="latestArticle-active-innerServices">
                    <ul>
                    {innerServices.map((indService) => {
                        return(<li> <span><DoneRoundedIcon/></span> {indService}</li>)
                    })}
                    </ul>
                </div>
                <div className="learn-more">
                    <a href="/">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default LatestArticles
