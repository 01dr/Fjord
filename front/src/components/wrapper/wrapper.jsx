/**
 * Created by amazi on 20.02.2016.
 */

import React from 'react'
import classNames from 'classnames/bind'
import s from './wrapper.pcss'

import Menu from '../menu/Menu.jsx'

class Wrapper extends React.Component {
    render() {
        return  <div>
                    I'm Wrapper!
                    <Menu />
                </div>
    }
}

export default Wrapper