import React from 'react';
import Normal from './icons/normal.svg';

export const Wrapper = SvgLogo => (props) => {
    let { className, ...p } = props;
    className = `ic-icon ${className || ''}`;
    console.log(SvgLogo, Normal);
    const vb = SvgLogo.viewBox.split(' ').slice(2);
    return (
        <span
            className={className}
            {...p}
        >
            <svg width={vb[0]} height={vb[1]}>
                <use xlinkHref={__webpack_public_path__ + SvgLogo.url /* eslint-disable-line no-undef */} />
            </svg>
        </span>
    );
};

export const NormalIcon = Wrapper(Normal);
