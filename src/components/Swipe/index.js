import classNames from 'classnames/bind';
import styles from './Swipe.module.scss';
import SwipeItem from '../SwipeItem';
import { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Swipe({ height, itemList = [], color = 'white', space }) {
    const listLength = itemList.length;
    const quantityDot = listLength / 2;
    const contentWidth = !space ? -265 * listLength + 16 : -265 * listLength + 16 - 40;

    const defaultArray = new Array(quantityDot).fill(1);
    defaultArray[0] = 0;

    const [array, setArray] = useState(defaultArray);

    const control = useRef();
    const wrapper = useRef();

    const handleControlClick = (i) => {
        let newArray = new Array(quantityDot).fill(1);
        newArray[i] = 0;
        setArray(newArray);
        const offset =
            -535 * i - contentWidth < wrapper.current.offsetWidth
                ? contentWidth + wrapper.current.offsetWidth
                : -535 * i;
        control.current.style.transform = 'translate3d(' + offset + 'px, 0px, 0px)';
    };

    const handleMoveClick = (type) => {
        let nextIndex;
        for (let i = 0; i < listLength; i++) {
            if (array[i] === 0) {
                if (type === 'left') {
                    nextIndex = i - 1;
                } else {
                    nextIndex = i + 1;
                }
                break;
            }
        }
        let newArray = new Array(quantityDot).fill(1);
        newArray[nextIndex] = 0;
        setArray(newArray);
        const offset =
            -535 * nextIndex - contentWidth < wrapper.current.offsetWidth
                ? contentWidth + wrapper.current.offsetWidth
                : -535 * nextIndex;
        console.log(offset, control.current.offsetWidth, contentWidth);
        control.current.style.transform = 'translate3d(' + offset + 'px, 0px, 0px)';
        control.current.style.marginRight = '0';
        control.current.style.marginLeft = '0';
    };

    const handleLeftMove = () => {
        control.current.style.marginLeft = '30px';
    };

    const handleRightMove = () => {
        control.current.style.marginLeft = '-30px';
    };

    const handleMouseOut = () => {
        control.current.style.marginRight = '0';
        control.current.style.marginLeft = '0';
    };

    return (
        <div ref={wrapper} style={{ backgroundColor: color, height }} className={cx('wrapper')}>
            <ul ref={control} className={cx('swipe-list')} style={{ padding: space ? '0 20px' : '0' }}>
                {itemList.map((item, index) => {
                    return (
                        <li key={index} style={{ height: '80%' }}>
                            <SwipeItem src={item.src} content={item.content} href={item.href}></SwipeItem>
                        </li>
                    );
                })}
            </ul>

            <div className={cx('swipe-control')}>
                {array.map((item, index) => {
                    return item === 0 ? (
                        <span
                            onClick={() => handleControlClick(index)}
                            key={index}
                            style={{ backgroundColor: 'red' }}
                        ></span>
                    ) : (
                        <span
                            style={{ backgroundColor: color === 'white' ? '#333' : 'white' }}
                            onClick={() => handleControlClick(index)}
                            key={index}
                        ></span>
                    );
                })}
            </div>
            {array[0] !== 0 && (
                <div
                    onClick={() => handleMoveClick('left')}
                    onMouseLeave={handleMouseOut}
                    onMouseOver={handleLeftMove}
                    className={cx('left-control')}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            )}

            {array[array.length - 1] !== 0 && (
                <div
                    onClick={() => handleMoveClick('right')}
                    onMouseLeave={handleMouseOut}
                    onMouseOver={handleRightMove}
                    className={cx('right-control')}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            )}
        </div>
    );
}

export default Swipe;