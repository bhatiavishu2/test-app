import React from 'react'
export const Comment = ({ userName, title, comment }) => {
    return (<div className="row mb-4">
        <div className="col">
            <div className="card">
                <h6 className="card-header">{userName}</h6>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{comment}</p>
                </div>
            </div>
        </div>
    </div>)
}