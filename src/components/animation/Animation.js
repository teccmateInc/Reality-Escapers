import React from 'react'

const Animation = () => {
    const addAnimation = (e) =>{
        let anim = e.target;
        let attr = anim.getAttribute('data-anim');
        anim.classList.add(attr);
    }    
    const removeAnimation = (e)=>{
        let anim = e.target.children[0];
        let attr = anim.getAttribute('data-anim');
        anim.classList.remove(attr);
    }
    return (
        <div>
            <h3>Animations</h3>
        <div className="animations-container sideBarContent-active">
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }} className="example-container">
            <div className="animation-example" data-anim="none"></div>
            <span>None</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }} className="example-container">
            <div className="animation-example" data-anim="drop"></div>
            <span>Drop</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }} className="example-container">
            <div className="animation-example" data-anim="fadeIn"></div>
            <span>Fade In</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="fly-in-bottom"></div>
            <span>Fly In-Bottom</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="fly-in-left"></div>
            <span>Fly In-Left</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="fly-in-right"></div>
            <span>Fly In-Right</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="fly-in-top"></div>
            <span>Fly In-Top</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="pulse"></div>
            <span>Pulse</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="rotate-in-left"></div>
            <span>Rotate In-Left</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="rotate-in-right"></div>
            <span>Rotate In-Right</span>
        </div>
        <div  onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="twirl-in"></div>
            <span>Twirl In</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="whoosh-in-left"></div>
            <span>Whoosh In-Left</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
            <div className="animation-example" data-anim="whoosh-in-right"></div>
            <span>Whoosh In-Right</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e)
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
        <div className="animation-example" data-anim="zoom-in"></div>
            <span>Zoom In</span>
        </div>
        <div onMouseOver={(e)=>{
            addAnimation(e);
        }}
        onMouseLeave={(e)=>{
            removeAnimation(e)
        }}
         className="example-container">
        <div className="animation-example" data-anim="zoom-out"></div>
            <span>Zoom Out</span>
        </div>
    </div>
        </div>
    )
}

export default Animation
