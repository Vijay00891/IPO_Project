import React from 'react'
import send from '../img/Group 1000002474.png';
import Thumb from '../img/Thumb B.png'
import Pencile from '../img/Vector.png'
import Send from '../img/Vector-1.png'
import Club from '../img/simple-line-icons_energy.png'
import Design from '../img/design.png'
import dimension from '../img/3d-logo-1.png'
import diamensionone from '../img/3d-logo-2.png'
import diamensiontwo from '../img/3d-logo-3.png'
import verify from '../img/verify-png.png'
import screenshot from '../img/screenshot.jpg'
import ISO from '../img/ISO.jpg'
import android from '../img/GOOGLE-PLAY.jpg'
import star from '../img/star.png'

export default function Body() {


  return (
    <div className='container'>
      <div className="container-1">
        <div className="container-btn-new">
          <button>NEW</button>
          
        </div>
        <div className="container-item-text-1">
          <span>Free & Open
            Stock Market Analytics
            For GenZ
          </span>
        </div>
        <div className="container-item-text-2">
          <span>Thousands of traders and investors in India use our
            stable and reliable mobile app regularly.</span>
        </div>
        <div className="phone-number">
          
          <div className="input-box">
            <div className="input-nos">
              +91
            </div>
            <input type="tel" placeholder="Enter mobile number" />
            <div className="send-img">
              <img alt="img" src={send} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-2">

      </div>

      <div className="animation">
        <div className="bluestock-great">
          <span className='title-1'>Built for a growing India.</span>
          <span className='title-2'>It’s easy</span>
          <span className='title-3'>It’s powerful</span>
          <span className='title-4'>It’s beautiful</span>

        </div>
        <div className="right-content">
          <img id="thumb" src={Thumb} alt='Thumb' />
          <div className="information">
            <span className="highlight">Beautiful UI</span> for the modern trader,
            <br />
            with access on all platforms,
            <br />
            to trade <span className="highlight">on the go</span>
          </div>
        </div>
      </div>

      <div className="Bluestock-heighlights">
        <p className='heighlight-title-1'>Power-packed with
          everything you need.</p>
        <p className='heighlight-title-2'>
          Bluestock Highlights
        </p>
        <div className="para-mid">
          <span className="highlight-mid-2">Simplified enough for beginners, Detailed enough for experts</span>
          <br />
          Track upcoming IPOs, Leverage advanced tools to
          <br />
          make the best decisions.
        </div>
      </div>

      <div className="cards">
        <div className="card-1">
          <div className="head">
            <a href='$' >Learn Chart</a>
            <img alt="img" src={Pencile} />
          </div>
          <hr className='syled-hr' />
          <div className="card-content">
            <div className="flexx">
              <p className='DIGIT'>1</p>
              <p> Technical, Fundamental </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>2</p>
              <p> Finology, Facts, Equity </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Trading Psychology </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Risk Assessment </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Option Trading</p>
            </div>
          </div>
        </div>
        <div className="card-2">

          <div className="head">
            <a href='$' >Analytics</a>
            <img alt="img" src={Send} />
          </div>
          <hr className='syled-hr' />
          <div className="card-content">
            <div className="flexx">
              <p className='DIGIT'>1</p>
              <p> Live Sector Trend </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>2</p>
              <p> IPO DRHP </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Sectoral Distribution </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Stock Overview </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> TradingView Chart</p>
            </div>
            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Technical, Fundamental</p>
            </div>
          </div>

        </div>
        <div className="card-3">

          <div className="head">
            <a href='$' >Club</a>
            <img alt="img" src={Club} />
          </div>
          <hr className='syled-hr' />
          <div className="card-content">
            <div className="flexx">
              <p className='DIGIT'>1</p>
              <p> Educational Resources </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>2</p>
              <p> Real-time Chat </p>
            </div>

            <div className="flexx">
              <p className='DIGIT'>3</p>
              <p> Forums </p>
            </div>


          </div>

        </div>
      </div>
      <div className="lovetraders">
        <h1>Why do traders love bluestock?</h1>
        <p>Bluestock caters to traders looking to enhance <br />
          their technical analysis skills, providing a user-friendly<br />
          environment to interpret and leverage charts effectively<br />
          for strategic decision-making in the financial markets.
        </p>

        <div className="Shark-investers">
          <img src={Design} alt="logo" />
          <a href="$">Shark<br />
            Investor</a>
        </div>
        <div className="abt-info">
          <div className="ddiv-1">
            <div className="box-logo-1">
              <img src={dimension} alt="logo" />
            </div>
            <a href="$">Analytics</a>
          </div>
          <div className="ddiv-2">
            <div className="box-logo-2">
              <img src={diamensionone} alt="logo" />
            </div>
            <a href="$">Blogs</a>
          </div>
          <div className="ddiv-3">
            <div className="box-logo-3">
              <img src={diamensiontwo} alt="logo" />
            </div>
            <a href="$">Videos</a>
          </div>
          <div className="resources-1">
            <div className="resources">
              <a href="$">Resources</a>
            </div>
            <h2>All things finance,right here
            </h2>
            <a className="Heading-all" href="$">Master the art of investing and secure your financial future with Bluestock learning resources.</a>
          </div>
        </div>
      </div>
      <div className="on-the-go">
        <div className="scanner">
          <h2>On The Go</h2>
          <p>We believe that everyone should be able to wield technology while learn trading.
            Use Bluestock on the go, on your mobile device. Experience the ultimate trading
            experience on Android or IOS.</p>
          <div className="qr">
            <a href="$">Scan and download</a>
            <p>Use your android device
              to download the app</p>
            <img src={verify} alt="logo" />
          </div>

        </div>
        <div className="screenshot">
          <img src={screenshot} alt="screenshot" />
        </div>
      </div>
      <div className="banner">
        <div className="version">

          <h2> Bluestock App 2.0 </h2>
          <a href='$'> is Live Now!</a>
        </div>
        <a href='https://play.google.com/store/apps/details?id=in.bluestock.app&hl=en_IN' className='Download'>Download Our App</a>
        <img src={android} alt="app store" />
        <img src={ISO} alt="google play" />
      </div>
      <div className="ratting">
        <div className="circle-1">

        </div>
        <div className="circle-2">

        </div>
        <div className="circle-3">

        </div>
        <div className="circle-4">

        </div>

        <div className="rate">
          <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
          </div>
          <a href="$"> (5/5 by 100+ users)</a>
        </div>
      </div>
    </div>
  )
}
