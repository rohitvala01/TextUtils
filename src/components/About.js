import React from 'react'

export default function About(props) {

    // const [ mystyle, setMystyle ] = useState ({
    //     color: "black",
    //     backgroundColor: "White"
    // })

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(99 74 99)' : 'white',
    }


  return (
    <div className='container' >

        <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}> About Us </h1>

        <div className="accordion" id="accordionExample"  style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>TextUtils Featutes :</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>TextUtils </strong> is a text manipulation app designed to help users format and clean their text with ease. It's useful for students preparing assignments, developers working with content, and writers who want to polish their text quickly. From removing extra spaces to preparing formatted text for blogs or code comments, TextUtils makes everyday text tasks simple and efficient.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free Of Use :</strong> 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>TextUtils </strong> is a free-to-use text utility app that helps you format and manage your text quickly and efficiently. Whether you're a student, developer, or content writer, TextUtils is ideal for cleaning up, analyzing, or preparing text for presentations, emails, or web content. It runs entirely in your browser, so there's no need to install anything — just open and start using it instantly.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong>Broswer Dependend :</strong>  
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong> TextUtils </strong> is a free, browser-based text utility tool that helps users format, clean, and analyze text effortlessly. It’s perfect for students, developers, and content creators who need quick text adjustments without installing any software. Since it runs entirely in your browser, no data is stored or sent to a server — making it fast, secure, and platform-independent. Just open it in any modern web browser and start using it instantly.
                    </div>
                    </div>
                </div>
                </div>
       
    </div>
  )
}
