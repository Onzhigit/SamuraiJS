import React from 'react'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src='https://image.flaticon.com/icons/png/128/2159/2159555.png' />
          </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              { props.message }
            </h5>
              <p className="card-text"><small className="text-muted">like{ props.likesCount }</small></p>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Post
