import classNames from 'classnames/bind';
import styles from './ExpandNavbar.module.scss';

import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ExpandNavbar({ ...props }) {
    const [navbarExpand, setNavbarExpand] = useState(false);

    const handleExpandNavbar = () => {
        setNavbarExpand(true);
    };

    const handleCloseExpandNavbar = () => {
        setNavbarExpand(false);
    };

    return (
        <Tippy
            placement="bottom"
            interactive="true"
            delay={[1000, 0]}
            render={(attrs) => (
                <div style={{ width: '100%' }} className="box" tabIndex="-1" {...attrs}>
                    <div className={cx('menu-expand-wrapper')}></div>
                </div>
            )}
            onShow={handleExpandNavbar}
            onHide={handleCloseExpandNavbar}
        >
            <li {...props}>
                {!navbarExpand ? (
                    <a className={cx('navbar-item-link', 'expand-icon')} href="/" title="expand">
                        {' '}
                    </a>
                ) : (
                    <div className={cx('close-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                )}
            </li>
        </Tippy>
    );
}

export default ExpandNavbar;
