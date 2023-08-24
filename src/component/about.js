import Logo from '../img/1020/1020_Word.png'
import Logo2 from '../img/1020/1020.jpg'
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import StakingABI from '../abi/stakingABI.json'
import '../css/About.css'


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

const Navbar = ({ setLan, defaultAccountChange }) => {
    const [language, setLanguage] = useState("EN");
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [connectButtonText, setConnectButtonText] = useState("Connect Wallet")

    const text =
    {
        en: 'Connect Wallet',
        ch: '連接錢包'
    }

    const handleLanguageChange = () => {
        if (language === "EN") {
            setLanguage("CH")
            setLan("CH")
            return;
        }
        if (language === "CH") {
            setLanguage("EN")
            setLan("EN")
            return;
        }
    }

    useEffect(() => {
        changingAccount();
    }, [defaultAccount])

    const changingAccount = async () => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                connectWalletHandler()
            })
            window.ethereum.on('chainChanged', () => {
                connectWalletHandler()
            })
        }
    }

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(async (result) => {
                    await accountChangeHandler(result[0]);
                    defaultAccountChange(result[0]);
                    setConnectButtonText(`${result[0].slice(0, 4)}...${result[0].slice(-4)}`);
                })
        } else {
            console.log('Error', 'Need to install MetaMask!', 'error')
        }
    }

    const accountChangeHandler = async (newAccount) => {
        checkCorrectNetwork();
        setDefaultAccount(newAccount);
    }

    const checkCorrectNetwork = async () => {
        const { ethereum } = window
        const chainId = await ethereum.request({ method: 'eth_chainId' })
        handleDefaultChainChange(chainId)
    }

    const handleDefaultChainChange = (value) => {
        console.log("Chain Change to " + value);
    }

    return (
        <header
            data-elementor-type="header" data-elementor-id={365} className="elementor elementor-365 elementor-location-header">

            <section className="elementor-section elementor-top-section elementor-element elementor-element-b51501d elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="b51501d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
                style={{ backgroundColor: '#FF963C', color: '#A017D7', fontSize: '20px', fontWeight: 'bolder', height: '100px', position: 'fixed', width: '100vw' }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                    <div style={{
                        marginTop: '10px'
                    }}>
                        <a href="../index.htm">
                            <img
                                src={Logo}
                                className="attachment-full size-full wp-image-382"
                                alt=""
                                style={{
                                    width: '75px', height: '75px',
                                    backgroundColor: '#FF963C',
                                    borderRadius: '100px',
                                    border: '3px solid white'
                                }}
                            />
                        </a>
                    </div>
                    <button
                        onClick={connectWalletHandler}
                        style={{
                            backgroundColor: 'white',
                            color: 'purple',
                        }}>
                        {connectButtonText}
                    </button>
                    <button onClick={handleLanguageChange} style={{
                        backgroundColor: 'white',
                        color: 'purple'
                    }}>
                        🌐
                        {language}
                    </button>
                </div>
                {/* <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8ce7a2a" data-id="8ce7a2a" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-7fdcd08 elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="7fdcd08" data-element_type="widget" data-widget_type="theme-site-logo.default">

                                <div className="elementor-widget-container">
                                    <a href="../index.htm">
                                        <img
                                            src={Logo}
                                            className="attachment-full size-full wp-image-382"
                                            alt=""
                                            style={{
                                                width: '75px', height: '75px',
                                                marginTop: '-7px',
                                                backgroundColor: '#FF963C',
                                                borderRadius: '100px',
                                                border: '3px solid white'
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav style={{ position: 'absolute', right: '5vw', top: '7px' }}>
                        <ul id="menu-1-e21e9a5" className="elementor-nav-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-355">
                                <span>
                                    {
                                        language === "EN"
                                            ? text.en
                                            : text.ch
                                    }
                                </span>
                            </li>
                            <li>
                                <span style={{
                                    color: '#FF963C'
                                }}>Null</span>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-355"
                                onClick={handleLanguageChange}
                            >
                                <span>
                                    Change Language
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div> */}
            </section>
        </header>
    )
}

const Hero = ({ language }) => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-158e9de2 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="158e9de2" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;shape_divider_bottom&quot;:&quot;clouds&quot;}"
            style={{
                backgroundColor: 'rgb(83,0,117)',
                marginTop: '100px'
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
                                <h1 className="elementor-heading-title elementor-size-default">
                                    1020
                                </h1>
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

const Content1 = ({ language }) => {

    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-33f4dadb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="33f4dadb" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default" >
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2f0d0f59" data-id="2f0d0f59" data-element_type="column"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <img src={Logo2} alt="Logo2"
                        style={{
                            width: '24vw',
                            height: '21vw',
                        }} />
                </div>

                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d48ea1e" data-id="d48ea1e" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-15c5ff74 elementor-widget elementor-widget-heading" data-id="15c5ff74" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                {/* <h5 style={{
                                    color: '#FF963C', fontWeight: 'bold'
                                }}>
                                    {
                                        language === "EN"
                                            ? "We are"
                                            : "我們是"
                                    } 1020
                                </h5> */}
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-9d8fabf elementor-widget elementor-widget-heading" data-id="9d8fabf" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                                <h1 style={{
                                    color: '#A017D7', fontWeight: 'bolder'
                                }}>
                                    DApp
                                    {
                                        language === "EN"
                                            ? " Staking"
                                            : " 質押"
                                    }

                                </h1>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '320px' }}>
                            <div className="elementor-widget-container">
                                <p style={{
                                    color: 'gray',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {
                                        language === "EN"
                                            ? "The staking Dapp exclusively for 1020 has arrived."
                                            : "專屬於 1020 的質押 Dapp 來了"
                                    }
                                </p>
                                <p style={{
                                    color: 'gray',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {
                                        language === "EN"
                                            ? "Users can stake within the Dapp."
                                            : "用戶可於 Dapp 中質押"
                                    }
                                    <br />

                                    1.
                                    {
                                        language === "EN"
                                            ? "Earn 1020 from staking JNY."
                                            : "JNY 獲取 1020 收益"
                                    }
                                    <br />
                                    2.
                                    {
                                        language === "EN"
                                            ? "Earn Point from staking 1020 LP."
                                            : "1020LP 獲取 積分獎勵"
                                    }
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
                                    {
                                        language === "EN"
                                            ? "User Staked"
                                            : "質押用戶"
                                    }
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
                                <a
                                    href="#Staking"
                                    style={{
                                        fontWeight: 'bolder',
                                        color: 'rgb(83,0,117)'
                                    }}>
                                    ⭐
                                    {
                                        language === "EN"
                                            ? "Start Staking"
                                            : "前往質押"
                                    }
                                    ⭐
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Content2 = ({ language }) => {
    const CA = "";
    const link = `https://pancakeswap.finance/swap?outputCurrency=${CA}`

    const LeftColumn = [
        'Total Supply : 10200',
        'Max Wallet : 20',
        'Anti Bot',
    ]
    return (
        <section className="elementor-section elementor-top-section elementor-element-1cd26e9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cd26e9" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default" style={{
                display: 'flex', flexDirection: 'column'
            }}>
                <div className="elementor-element elementor-element-33e5fbe2 elementor-widget elementor-widget-heading" data-id="33e5fbe2" data-element_type="widget" data-widget_type="heading.default"
                    style={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                    }}>
                    <h3 style={{
                        color: '#A017D7', fontWeight: 'bolder',
                        wordBreak: 'break-all',
                        padding: '20px',
                    }}>
                        1020
                        {
                            language === "EN"
                                ? " CA : "
                                : " 合約 : "
                        }
                        <br />
                        <p style={{
                            paddingLeft: '20px',
                            color: 'gray'
                        }}>
                            <br />
                            123145364165456465464654654545646464684
                        </p>
                    </h3>

                    <a
                        href={link}
                        style={{
                            fontWeight: 'bolder',
                            color: 'rgb(83,0,117)'
                        }}>

                        <button className='box' style={{
                            backgroundColor: 'transparent',
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
                            Buy On PancakeSwap
                        </button>
                    </a>
                </div>
                {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5d9ad543" data-id="5d9ad543" data-element_type="column"
                        style={{
                            display: 'flex', paddingLeft: '20px'
                        }}>
                        <div>
                            <div style={{ padding: '10px' }}>
                                <div className="elementor-widget-container"
                                >
                                    <h4 style={{
                                        color: '#A017D7', fontWeight: 'bolder'
                                    }}>
                                        代幣機制</h4>
                                    <div style={{
                                        paddingLeft: '20px'
                                    }}>
                                        <span style={{
                                            color: 'gray',
                                        }}>
                                            買入稅率 : 5% <br />
                                            賣出稅率 : 5% <br />
                                            稅率分配 :
                                            <ul>
                                                <li>LP分紅 2%</li>
                                                <li>營銷 2% </li>
                                                <li>1% 銷毀 直到 總量縮減為 1020</li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column"
                        style={{
                            display: 'flex', paddingLeft: '20px'
                        }}>
                        <div>
                            <div style={{ padding: '10px' }}>
                                <div className="elementor-widget-container"
                                >
                                    <h4 style={{
                                        color: '#A017D7', fontWeight: 'bolder'
                                    }}>
                                        Token Parameter</h4>
                                    <div className="elementor-container elementor-column-gap-no"
                                        style={{
                                            display: 'flex', flexDirection: 'column'
                                        }}>
                                        <div>
                                            <div>
                                                <div>
                                                    <div style={{
                                                        paddingLeft: '20px'
                                                    }}>
                                                        <ul className="elementor-icon-list-items" style={{
                                                            listStyle: 'none',
                                                        }}>
                                                            {
                                                                LeftColumn.map((content, index) => {
                                                                    return (
                                                                        <li className="elementor-icon-list-item" key={content}>
                                                                            <span className="elementor-icon-list-icon" style={{ color: 'orange' }}>
                                                                                <i aria-hidden="true" className="fas fa-circle" />
                                                                            </span>
                                                                            <span className="elementor-icon-list-text" style={{
                                                                                color: 'gray', fontWeight: 'bolder',
                                                                                padding: '10px',
                                                                            }}>{content}</span>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

const StakingCard = ({
    fatherTokenName, sonTokenName, language
}) => {
    const placeHolderText = language === "EN" ? "Amount to Stake" : "質押數量";

    return (
        <div style={{
            padding: '20px', minWidth: '360px', width: '45vw',
            margin: '10px',
            color: 'purple',
            backgroundColor: 'white',
            borderRadius: '20px'
        }}>
            <div>
                <h4 style={{ textAlign: 'center' }}>

                    {
                        language === "EN"
                            ? " Stake "
                            : " 質押 "
                    }
                    {fatherTokenName}

                    {
                        language === "EN"
                            ? " to Earn "
                            : " 賺取 "
                    } {sonTokenName}
                </h4>
                <TableComponent
                    fatherTokenName={fatherTokenName}
                    sonTokenName={sonTokenName}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <button>
                        {
                            language === "EN"
                                ? " Stake"
                                : " 質押"
                        }
                    </button>
                    <input
                        placeholder={placeHolderText}
                        style={{
                            marginLeft: '20px',
                            marginRight: '20px',
                            width: '100px'
                        }}
                    />
                    {fatherTokenName}
                </div>
            </div>
        </div>
    )
}

const TableComponent = ({
    fatherTokenName,
    sonTokenName,
}) => {
    return (
        <div>
            <table style={{ border: '1px solid black', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>持倉 {fatherTokenName}</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>質押 {fatherTokenName}</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>{sonTokenName} 收益</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 1</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 2</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 3</td>
                    </tr>
                    {/* <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 4</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 5</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 6</td>
                    </tr> */}
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}

const Marquee = ({ content, speed }) => {
    const [offset, setOffset] = useState(0);

    const containerStyle = {
        color: 'purple',
        backgroundColor: '#FF963C',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
    }

    const marqueeStyle = {
        transform: `translateX(-${offset}px)`,
        whiteSpace: 'nowrap',
        display: 'flex',
        animation: `marquee-animation ${speed}s linear infinite`,
        fontSize: '20px',
        fontWeight: 'bolder'
    };

    return (
        <div className="marquee-container" style={containerStyle}>
            <div className="marquee" style={marqueeStyle}>
                <div className="marquee-content">{content}</div>
                <div className="marquee-content">{content}</div>
                <div className="marquee-content">{content}</div>
            </div>
        </div>
    );
};

const Staking = ({ defaultAccount, language }) => {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const StakingCA = "";
    const updateEthers = async () => {
        try {
            const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(tempProvider);

            const tempSigner = tempProvider.getSigner();
            setSigner(tempSigner);

            const tempContract = new ethers.Contract(StakingCA, StakingABI, tempSigner)
            setContract(tempContract);

            // const tempUsdtContract = new ethers.Contract(USDTContractAddress, usdtabi, tempSigner)
            // setUsdtContract(tempUsdtContract);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (defaultAccount === null) return;
        updateEthers();
    }, [defaultAccount])


    console.log("In Staking " + defaultAccount)
    return (
        <section id="Staking"
            style={{
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                backgroundColor: 'purple',
                justifyContent: 'space-evenly',
                padding: '20px',
            }}>
            <StakingCard
                fatherTokenName={"JNY"}
                sonTokenName={"1020"}
                language={language}
            />
            <StakingCard
                fatherTokenName={"1020LP"}
                sonTokenName={"Point"}
                language={language}
            />
        </section>
    )
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

const About = () => {
    const [language, setLanguage] = useState("EN")
    const [defaultAccount, setDefaultAccount] = useState(null);
    const languageHandler = (value) => {
        setLanguage(value)
    }
    const handleDefaultAccountChange = (value) => {
        setDefaultAccount(value);
        console.log(value)
    }
    return (
        <div style={{ backgroundColor: '#FDF8FF' }}>
            <Navbar setLan={languageHandler} defaultAccountChange={handleDefaultAccountChange} />

            <div data-elementor-type="wp-page" data-elementor-id={177} className="elementor elementor-177">
                <Hero language={language} />
                <Content1 language={language} />
                <Content2 />

                <Marquee
                    content={"Staking Center"}
                    speed={10}
                />
                <Staking defaultAccount={defaultAccount} language={language} />
            </div>

            <Footer />
        </div>
    );
}

export default About;