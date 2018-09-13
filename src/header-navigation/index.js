import React from 'react'
import './style/index.scss'

import {Icon} from './icon'

export const TopNav = () =>
  (<div>
    <section className="page-section">
      <header>
        <Icon />
        <nav className="nav nav--primary">

          <div className="nav__item is-active">
            <div className="nav__label">
              <span>ITEM</span>
              <i className="nav__icon"></i>
            </div>


            <div className="nav__subnav">
              <a href="#item1" className="nav__item is-active">
                <div className="nav__label">
                  <span>Icon Left</span>
                  <i className="nav__icon nav__icon--left"></i>
                </div>
              </a>

              <div className="nav__item">
                <div className="nav__label">
                  <span>Sub Item 2</span>
                  <i className="nav__icon"></i>
                </div>

                <div className="nav__subnav">
                  <a href="#subsubitem1" className="nav__item">
                    <div className="nav__label">
                      <span>SubSub Item 1</span>
                      <i className="nav__icon"></i>
                    </div>
                  </a>
                  <a href="#subsubitem1" className="nav__item">
                    <div className="nav__label">
                      <span>SubSub Item 2</span>
                      <i className="nav__icon"></i>
                    </div>
                  </a>
                  <a href="#subsubitem1" className="nav__item">
                    <div className="nav__label">
                      <span>SubSub Item 3</span>
                      <i className="nav__icon"></i>
                    </div>
                  </a>
                </div>

              </div>

              <a href="#item3" className="nav__item">
                <div className="nav__label">
                  <span>Sub Item 3</span>
                  <i className="nav__icon"></i>
                </div>
              </a>
            </div>

          </div>

          <a href="#" className="nav__item">
            <div className="nav__label">
              <span>ITEM</span>
              <i className="nav__icon"></i>
            </div>
          </a>

          <div href="#" className="nav__item">
            <div className="nav__label">
              <span>ITEM</span>
              <i className="nav__icon"></i>
            </div>


            <div className="nav__subnav">
              <a href="#item1" className="nav__item">
                <div className="nav__label">
                  <span>Sub Item 1</span>
                  <i className="nav__icon"></i>
                </div>
              </a>

              <div className="nav__item">
                <div className="nav__label">
                  <span>Subnav Left</span>
                  <i className="nav__icon"></i>
                </div>

                <div className="nav__subnav nav__subnav--left">
                  <a href="#subsubitem1" className="nav__item">
                    <div className="nav__label">
                      <span>SubSub Item 1</span>
                      <i className="nav__icon"></i>
                    </div>
                  </a>
                  <a href="#subsubitem1" className="nav__item">
                    <div className="nav__label">
                      <span>SubSub Item 2</span>
                      <i className="nav__icon"></i>
                    </div>
                  </a>
                  <a href="#subsubitem1" className="nav__item">
                    <div className="nav__label">
                      <span>SubSub Item 3</span>
                      <i className="nav__icon"></i>
                    </div>
                  </a>
                </div>

              </div>

              <a href="#item3" className="nav__item">
                <div className="nav__label">
                  <span>Sub Item 3</span>
                  <i className="nav__icon"></i>
                </div>
              </a>
            </div>

          </div>

          <a href="#" className="nav__item">
            <div className="nav__label">
              <span>ITEM</span>
              <i className="nav__icon"></i>
            </div>
          </a>
        </nav>
      </header>
    </section>
  </div>)
