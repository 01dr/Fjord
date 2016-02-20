/**
 * Created by amazi on 20.02.2016.
 */

import React from 'react'
import classNames from 'classnames/bind'
import s from './header.pcss'

class Header extends React.Component {
    render() {
        return  <div className={ s.background }>
                    <div className={ s.content }>
                        <div className={ s.title }>Get some<br />fresh air</div>
                        <div className={ s.description }>Fjord - modern landing page</div>
                    </div>
                </div>;
    }
}

export default Header