import navbarLogo from './wp-content/uploads/sites/40/2022/01/LOGO2.png'
import React, { useState, useEffect } from 'react';

const NumberCounter = ({ targetNumber }) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('counter'); // 替换为组件的正确 id 或 ref
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;

                if (elementTop < viewportHeight) {
                    setStartAnimation(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (startAnimation && currentNumber < targetNumber) {
            const timerId = setTimeout(() => {
                setCurrentNumber((prevNumber) => prevNumber + 1);
            }, 1);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [startAnimation, currentNumber, targetNumber]);

    return <div id="counter">{currentNumber}</div>;
};




const ArcSquare = () => {

    const arcStyle = {
        content: '',
        position: 'absolute',
        top: '0',
        right: '0',
        width: '30vw',
        height: '20vh',
        borderRadius: '0 0 0 200px',
        backgroundColor: '#FF963C', // Add background color
    };


    return (
        <div style={arcStyle}></div>
    );
};

const Navbar = () => {
    return (
        <header
            data-elementor-type="header" data-elementor-id={365} className="elementor elementor-365 elementor-location-header">

            <section className="elementor-section elementor-top-section elementor-element elementor-element-b51501d elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="b51501d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
                style={{ backgroundColor: '#FF963C', color: '#A017D7', fontSize: '20px', fontWeight: 'bolder' }}
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8ce7a2a" data-id="8ce7a2a" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-7fdcd08 elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="7fdcd08" data-element_type="widget" data-widget_type="theme-site-logo.default">

                                {/* navbar logo section */}
                                <div className="elementor-widget-container">
                                    <a href="../index.htm">
                                        <img
                                            width={314}
                                            height={100}
                                            src={navbarLogo}
                                            className="attachment-full size-full wp-image-382"
                                            alt=""
                                            sizes="(max-width: 314px) 100vw, 314px"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav style={{ position: 'absolute', right: '5vw', top: '3vh' }}>
                        <ul id="menu-1-e21e9a5" className="elementor-nav-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-355">
                                <span>
                                    Connect Wallet
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )
}

const Hero = () => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-158e9de2 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="158e9de2" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;shape_divider_bottom&quot;:&quot;clouds&quot;}"
            style={{
                backgroundColor: 'rgb(83,0,117)'
            }}>
            <div className="elementor-background-overlay" />
            <div className="elementor-shape elementor-shape-bottom" data-negative="false"
                style={{ fill: '#FDF8FF' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice">
                    <path className="elementor-shape-fill" d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z">
                    </path>
                </svg>
            </div>

            <ArcSquare />
            <div className="elementor-container elementor-column-gap-default">

                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c60e6f3" data-id="c60e6f3" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-3bc66942 elementor-widget elementor-widget-heading" data-id="3bc66942" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"
                                style={{
                                    color: 'white',
                                    fontSize: '40px',
                                    fontWeight: 'bolder',
                                }}>
                                <h1 className="elementor-heading-title elementor-size-default">About 1020</h1>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-139d546e elementor-widget elementor-widget-text-editor" data-id="139d546e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container" style={{
                                backgroundColor: 'rgb(255,150,60)'
                            }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Content1 = () => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-33f4dadb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="33f4dadb" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default" >
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2f0d0f59" data-id="2f0d0f59" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated"
                        style={{
                            backgroundColor: '#FF963C'
                        }} >
                        <img src={navbarLogo} alt="Logo" />
                    </div>
                </div>

                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d48ea1e" data-id="d48ea1e" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-15c5ff74 elementor-widget elementor-widget-heading" data-id="15c5ff74" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h5 style={{
                                    color: '#FF963C', fontWeight: 'bold'
                                }}>
                                    We are 1020
                                </h5>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-9d8fabf elementor-widget elementor-widget-heading" data-id="9d8fabf" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h1 style={{
                                    color: '#A017D7', fontWeight: 'bolder'
                                }}>
                                    Title Title<br />Title Title Title
                                </h1>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-2a09bf73 elementor-widget elementor-widget-text-editor" data-id="2a09bf73" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                <p style={{
                                    color: 'gray',
                                }}>
                                    Content Content Content
                                </p>
                                <p style={{
                                    color: 'gray',
                                }}>
                                    Content Content Content
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: '100vw',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <div className='box' style={{
                                backgroundColor: 'rgb(83,0,117)',
                                color: 'white',
                                width: '15vw',
                                height: '10vh',
                                minWidth: '280px',
                                minHeight: '50px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '20px'
                            }}>
                                <span style={{
                                    color: 'orange',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    fontSize: '20px',
                                    fontWeight: 'bolder',
                                }}>
                                    <span>
                                        <NumberCounter targetNumber={327} />
                                    </span>
                                    <span>
                                        +
                                    </span>
                                </span>
                                <span style={{
                                    fontWeight: 'bold'
                                }}>
                                    User Staked
                                </span>
                            </div>
                            <div className='box' style={{
                                backgroundColor: 'orange',
                                color: 'white',
                                width: '15vw',
                                height: '10vh',
                                minWidth: '280px',
                                minHeight: '50px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '20px'
                            }}>
                                <span style={{
                                    color: 'rgb(83,0,117)',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    fontSize: '20px',
                                    fontWeight: 'bolder',
                                }}>
                                    <span>
                                        <NumberCounter targetNumber={100} />
                                    </span>
                                    <span>
                                        +
                                    </span>
                                </span>
                                <span style={{
                                    fontWeight: 'bold'
                                }}>
                                    User Staked
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <div style={{ backgroundColor: '#FDF8FF' }}>
            <Navbar />

            <div data-elementor-type="wp-page" data-elementor-id={177} className="elementor elementor-177">
                <Hero />
                <Content1 />
                <section className="elementor-section elementor-top-section elementor-element elementor-element-1cd26e9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cd26e9" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5d9ad543" data-id="5d9ad543" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-33e5fbe2 elementor-widget elementor-widget-heading" data-id="33e5fbe2" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h6 className="elementor-heading-title elementor-size-default">We do sell NFT</h6>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-450ed55f elementor-widget elementor-widget-heading" data-id="450ed55f" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">Yes we sell limited digital
                                            Art on Market</h2>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-2c1d6282 elementor-widget elementor-widget-text-editor" data-id="2c1d6282" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p>Donec consectetur ullamcorper libero eu vestibulum. Pellentesque pulvinar justo sem,
                                            vitae tincidunt nisl bibendum eu. Nam maximus justo et ante gravida, sed ultricies
                                            est scelerisque. Integer eget odio metus. Nam lobortis magna eros, sed dictum nibh
                                            imperdiet eu.&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-677e4dc animated-slow elementor-invisible" data-id="677e4dc" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;,&quot;animation_delay&quot;:200}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-154ca562 elementor-widget elementor-widget-heading" data-id="154ca562" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h4 className="elementor-heading-title elementor-size-default">Where is it ?</h4>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-76955719 elementor-widget elementor-widget-text-editor" data-id={76955719} data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                            ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-4e5e4e51 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4e5e4e51" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6db645ae" data-id="6db645ae" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-5dea4c5b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5dea4c5b" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                            <li className="elementor-icon-list-item">
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle" /> </span>
                                                                <span className="elementor-icon-list-text">OpenSea</span>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle" /> </span>
                                                                <span className="elementor-icon-list-text">Rarible</span>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle" /> </span>
                                                                <span className="elementor-icon-list-text">Super rare</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6787c980" data-id="6787c980" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-7c576ad1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="7c576ad1" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                            <li className="elementor-icon-list-item">
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle" /> </span>
                                                                <span className="elementor-icon-list-text">Nifty Gateway</span>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle" /> </span>
                                                                <span className="elementor-icon-list-text">Foundation</span>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle" /> </span>
                                                                <span className="elementor-icon-list-text">Sorare</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-1cd26e9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cd26e9" data-element_type="section" id="stakingtable">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5d9ad543" data-id="5d9ad543" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-33e5fbe2 elementor-widget elementor-widget-heading" data-id="33e5fbe2" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h6 className="elementor-heading-title elementor-size-default">Start Staking</h6>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-450ed55f elementor-widget elementor-widget-heading" data-id="450ed55f" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">
                                            Staking Status
                                        </h2>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-2c1d6282 elementor-widget elementor-widget-text-editor" data-id="2c1d6282" data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <p>
                                            Data
                                            Data
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-677e4dc animated-slow elementor-invisible" data-id="677e4dc" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;,&quot;animation_delay&quot;:200}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-154ca562 elementor-widget elementor-widget-heading" data-id="154ca562" data-element_type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                        <h4 className="elementor-heading-title elementor-size-default">
                                            Table Title
                                        </h4>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-76955719 elementor-widget elementor-widget-text-editor" data-id={76955719} data-element_type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                        <table>
                                            <tbody><tr>
                                                <td>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-5c5d2bcd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c5d2bcd" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e73cbbc" data-id="6e73cbbc" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-background-overlay" />
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-69dd5243 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="69dd5243" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1d989e4d" data-id="1d989e4d" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-6d15b888 animated-slow elementor-invisible elementor-widget elementor-widget-image" data-id="6d15b888" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="image.default">
                                                    <div className="elementor-widget-container">
                                                        <img decoding="async" width={655} height={861} src="../wp-content/uploads/sites/40/2022/01/Happyman.png" className="attachment-full size-full wp-image-117" alt="" srcSet="../wp-content/uploads/sites/40/2022/01/Happyman.png 655w, ../wp-content/uploads/sites/40/2022/01/Happyman-228x300.png 228w" sizes="(max-width: 655px) 100vw, 655px" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5a93792d" data-id="5a93792d" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-5404e244 elementor-widget elementor-widget-heading" data-id="5404e244" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="elementor-heading-title elementor-size-default">Lets
                                                            start<br /> your project with us </h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-6e7bd032 elementor-widget elementor-widget-heading" data-id="6e7bd032" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h6 className="elementor-heading-title elementor-size-default">and get
                                                            special offer</h6>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-5c6e055c elementor-widget elementor-widget-text-editor" data-id="5c6e055c" data-element_type="widget" data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <p>Pellentesque pulvinar justo sem, vitae tincidunt nisl bibendum eu.
                                                            Nam maximus justo et ante gravida.</p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-468c1984 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="468c1984" data-element_type="widget" data-widget_type="button.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-button-wrapper">
                                                            <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="#stakingtable">
                                                                <span className="elementor-button-content-wrapper">
                                                                    <span className="elementor-button-text">Read More</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

const Footer = () => {
    return (
        <footer data-elementor-type="footer" data-elementor-id={387} className="elementor elementor-387 elementor-location-footer">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-1675da0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1675da0" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
                style={{ backgroundColor: '#FF963C', display: 'flex', justifyContent: 'center', color: 'white', marginTop: '10px' }}>
                <p>COPYRIGHT 2023 © 1020 | POWERED BY 1020</p>
            </section>
        </footer>
    )
}

export default About;