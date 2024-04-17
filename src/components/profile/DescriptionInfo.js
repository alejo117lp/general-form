import React from "react";
import '../../stylesheets/Profile.css'

/* Se usa {props.iconName#r} para usar react-icons || 
<i className={`icon-detail ${(props.iconName)}`}></i> para ponerlos directamente*/

const fontStyles = {fontSize:'15px'}

function DescriptionInfo( props ){
  return(
    <div className='box-info-container'>
      <div className='box-info-title'>
        <h5>{props.title}</h5>
      </div>

      <div className='details-box-info'>  
        <div className='detail-box'>
          <div className='icon-box-detail'>
            <i className={`icon-detail ${(props.iconName)}`}></i>
            {props.iconName1r}
          </div>
          <div className='text-detail'>
            <div className='text-detail-title'>
              {props.detail1}
            </div>
            <div>
              {props.descriptionDetail1}
            </div>
          </div>
        </div>

        <div className='detail-box'>
          <div className='icon-box-detail'>
            <i className={`icon-detail ${(props.iconName2)}`}></i>
            {props.iconName2r}
          </div>
          <div className='text-detail'>
            <div className='text-detail-title'>
              {props.detail2}
            </div>
            <div>
              {props.descriptionDetail2}
            </div>
          </div>
        </div>

        <div className='detail-box'>
          <div className='icon-box-detail'>
            <i className={`icon-detail ${(props.iconName3)}`}></i>
            {props.iconName3r}
          </div>
          <div className='text-detail'>
            <div className='text-detail-title'>
              {props.detail3}
            </div>
            <div>
              {props.descriptionDetail3}
            </div>
          </div>
        </div>

        <div className='detail-box'>
          <div className='icon-box-detail'>
            <i className={`icon-detail ${(props.iconName4)}`}></i>
            {props.iconName4r}
          </div>
          <div className='text-detail'>
            <div className='text-detail-title'>
              {props.detail4}
            </div>
            <div>
              {props.descriptionDetail4}
            </div>
          </div>
        </div>

        <div className='detail-box'>
          <div className='icon-box-detail'>
            <i className={`icon-detail ${(props.iconName5)}`}></i>
            {props.iconName5r}
          </div>
        </div>



      </div>
    </div>
  )
}

export default DescriptionInfo;