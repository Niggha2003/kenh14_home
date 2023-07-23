import classNames from 'classnames/bind';
import styles from './Swipe.module.scss';
import SwipeItem from './SwipeItem';
import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Swipe({
    height,
    itemList = [],
    backgroundColor = 'rgb(163, 191, 194) 2c2',
    itemBackgroundColor = 'rgb(163, 191, 194) 2c2',
    color = '#857f7f',
    space,
    shadow,
}) {
    const listLength = itemList.length;
    const quantityDot = listLength / 2;
    const contentWidth = !space ? -265 * listLength + 16 : -265 * listLength + 16 - 40;

    const defaultArray = new Array(Math.round(quantityDot)).fill(1);
    defaultArray[0] = 0;

    const [array, setArray] = useState(defaultArray);

    const control = useRef();
    const wrapper = useRef();

    const handleControlClick = (i) => {
        let newArray = new Array(Math.round(quantityDot)).fill(1);
        newArray[i] = 0;
        setArray(newArray);
        const offset =
            -528 * i - contentWidth < wrapper.current.offsetWidth
                ? contentWidth + wrapper.current.offsetWidth
                : -528 * i;
        control.current.style.transform = 'translate3d(' + offset + 'px, 0px, 0px)';
    };

    const handleMoveClick = (type) => {
        let nextIndex;
        for (let i = 0; i < Math.round(quantityDot); i++) {
            if (array[i] === 0) {
                if (type === 'left') {
                    if (i === Math.round(quantityDot) - 1 && i >= 2) {
                        nextIndex = i - 2;
                    } else {
                        nextIndex = i - 1;
                    }
                } else {
                    nextIndex = i + 1;
                }
                break;
            }
        }
        let newArray = new Array(Math.round(quantityDot)).fill(1);
        newArray[nextIndex] = 0;
        setArray(newArray);
        const offset =
            -528 * nextIndex - contentWidth < wrapper.current.offsetWidth
                ? contentWidth + wrapper.current.offsetWidth
                : -528 * nextIndex;
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
        <div ref={wrapper} style={{ backgroundColor, height }} className={cx('wrapper')}>
            <ul ref={control} className={cx('swipe-list')} style={{ padding: space ? '0 20px' : '0' }}>
                {itemList.map((item, index) => {
                    return (
                        <li key={index} style={{ height: '80%' }}>
                            <SwipeItem
                                backgroundColor={itemBackgroundColor}
                                space={space}
                                src={item.src}
                                content={item.content}
                                href={item.href}
                                shadow={shadow}
                            ></SwipeItem>
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
                            style={{ backgroundColor: color }}
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
