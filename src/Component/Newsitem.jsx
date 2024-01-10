import { Component } from "react";

class Newsitem extends Component{
    render(){
        let {title,description,imageUrl,url,author,publishedAt,source} = this.props;
        return(
            <>
            <div className="card" style={{width:'18rem'}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger newCustomTranslate"  atyle={{ transform: 'translate(-106%, 6%) !important' }}>
                    {source}
                </span>

            </div>
            </>
        );
    }
}

export default Newsitem;