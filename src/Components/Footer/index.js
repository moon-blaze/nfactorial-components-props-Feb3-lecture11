import { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div>
                <p className="credits">
                    Credits: photos from&#160;<a href="unsplash.com" target="_blank">Unsplash.com</a>, icons
                    from&#160; <a href="https://icons8.com/" target="_blank">Icons8</a>,
                    graphics from&#160;
                    <a href="https://craftwork.design/" target="_blank"
                    >craftwork.design</a
                    >, font Kanit from&#160;
                    <a href="https://fonts.google.com/" target="_blank">fonts.google</a
                    >.
                </p>
        
                <div className="end-footer">Made with ✨❤️ at nFactorial in 2022.</div>
            </div>
        )
    }
}

export default Footer;