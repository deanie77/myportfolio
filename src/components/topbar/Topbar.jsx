import './topbar.scss';
import {Person, Mail} from '@mui/icons-material'

export default function Topbar({menuOpen, yesMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>dm.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+263787552062</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>deanmajaya@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>yesMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
