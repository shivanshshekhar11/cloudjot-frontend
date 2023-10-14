import React from "react";
import jassi from "../../../assets/jassi.png";
import navp from "../../../assets/nav.png";
import shiv from "../../../assets/shiv.png";

export default  function About() {
    const listStyle = {
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0',
        width:'10%',
    }
    return (
        <>
            <div className="about-section">
                <h1 style={{textAlign:'center',marginBottom:'2vw'}}>About the project</h1>
                <p align='justify'>Consider a scenario - one needs to save a small file (such as a .docx, .py or .txt) on a computer to access it from another computer afterwards to complete their work. Today, every cloud storage tool on the web needs an account to avail the service. Thus, signing up means an additional account to countless others on different services and logging in on many computers means a security or a privacy threat.</p>

                <p align='justify'>Our project will provide an easy solution. The User will simply upload the data on the website and a passkey will be generated for them. This key can be used afterwards to access their data on another computer, or they can just scan the QR code generated with this key to save their data on mobile. In addition, the data can only be accessed for five days from that time before being deleted automatically, thus eliminating any privacy concerns.</p>

                <p align='justify'>This project will offer individuals working on a public computer a simple way to store their work without the hassle of logging in their own cloud accounts. This data (pictures, code or documents) can be accessed later by providing a key which was assigned when the data was initially stored on the platform. Some common use cases include students on a college lab computer, individuals on a public computer in a cybercafé etc.</p>

                <p align='justify'>This project is implemented using MERN stack. We are currently running this project on Render.com's free tier and Amazon S3's default free storage tier. That's why the file limit is set to 5 MB and 5 files in total. If you find any bugs or just want to show your support reach out to any of us via the emails/socials provided or via <a href='https://www.buymeacoffee.com/shivanshshekhar11'>BuyMeACoffee</a>. We will deeply appreciate it. We also hope this project makes your day easier in any way.</p>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={jassi} alt="Jassi" style={{width:'100%', height:'25vw'}}></img>
                        <div className="container">
                            <h2>Jaspreet Singh</h2>
                            <p className="title">Back-end</p>
                            <p>A talented individual with proficiency in Node.js, Salesforce and Bhangra</p>
                            <p>jaspreetsinghngh@gmail.com</p>
                            <p>
                                <ul style={listStyle}>
                                    <li>
                                    <a href="https://github.com/Jaspreet999" target='_blank'><i class="fab fa-github" style={{color:'#000000'}}></i></a>
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com/in/jaspreet-singh-658a0b21a/" target='_blank'><i class="fab fa-linkedin" style={{color:'#000000'}}></i></a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

            <div className="column">
                <div className="card">
                    <img src={shiv} alt="Shivansh" style={{width:'100%', height:'25vw'}}></img>
                    <div className="container">
                        <h2>Shivansh Shekhar</h2>
                        <p className="title">Designing and back-end</p>
                        <p>A computer science and cinema enthusiast who's good at learning new things</p>
                        <p>shivanshshekhar11@gmail.com</p>
                        <p>
                            <ul style={listStyle}>
                                <li>
                                <a href="https://github.com/shivanshshekhar11" target='_blank'><i class="fab fa-github" style={{color:'#000000'}}></i></a>
                                </li>
                                <li>
                                <a href="https://linkedin.com/in/shivanshshekhar11" target='_blank'><i class="fab fa-linkedin" style={{color:'#000000'}}></i></a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={navp} alt="Navpreet" style={{width:'100%', height:'25vw'}}></img>
                <div className="container">
                    <h2>Navpreet Singh</h2>
                    <p className="title">Front-end</p>
                    <p>Skills include flutter, node.js, react.js, react.native, DSA, vanilla HTML/CSS/JS ... to name a few</p>
                    <p>navpreetsingh951818@gmail.com</p>
                    <p>
                        <ul style={listStyle}>
                            <li>
                            <a href="https://github.com/CodeWithNav" target='_blank'><i class="fab fa-github" style={{color:'#000000'}}></i></a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/codewithnav/" target='_blank'><i class="fab fa-linkedin" style={{color:'#000000'}}></i></a>
                            </li>
                        </ul>
                    </p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}