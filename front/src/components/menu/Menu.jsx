/**
 * Created by amazi on 20.02.2016.
 */

import React from 'react'
import classNames from 'classnames/bind'
import s from './menu.pcss'

import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

import './images/logo.png'

class Menu extends React.Component {
    render() {
        return  <div className={ s.topbar }>
                    <Row>
                        <Col lg={1}>
                            <div className={ s.logo }>
                                <img src='./images/logo.png' />
                            </div>
                        </Col>
                        <Col lg={11}>
                            <ul className={ s.menu }>
                                <li><a href="javascript:void(0);">Home</a></li>
                                <li><a href="javascript:void(0);">Pages</a></li>
                                <li><a href="javascript:void(0);">Elements</a></li>
                                <li><a href="javascript:void(0);">Product</a></li>
                                <li><a href="javascript:void(0);">Blog</a></li>
                                <li><a href="javascript:void(0);">Work</a></li>
                                <li><a href="javascript:void(0);">Start a project</a></li>
                                <li><a href="javascript:void(0);">oups</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>;
    }
}

export default Menu