import React from 'react'
import { useTranslation } from 'react-i18next';
import './client.css'
import alromansiah from '../../assets/images/alromansiah.png'
import pnu from '../../assets/images/pnu.png'
import rotana from '../../assets/images/rotana.png'
import gasco from '../../assets/images/gasco.png'
import gassolutions from '../../assets/images/gas-solutions.png'
import dawahi from '../../assets/images/dawahi.png'

const Client = () => {
    const { t } = useTranslation();
    return (
        <>
            <section id="clients" className="features3 cid-qKT6knwV2G">

                <div className="container mb-4">
                    <div className="media-container-row">
                        <div className="col-12 align-center">
                            <h2 className="mbr-section-title pb-2 mbr-fonts-style display-2">
                                {t('clients.header')}
                            </h2>
                            {/* <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style display-7">
                                Clients Template for Business Website
                            </h3> */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-center justify-content-center">
                        <div className="p-3 col-12 col-md-6 col-lg-3">
                            <div className="client-wrapper">
                                <div className="wrap-img">
                                    <img src={alromansiah} className="img-responsive clients-img" />
                                </div>
                                <div className="card-box">
                                    <h3 className="client-name mbr-fonts-style display-5">
                                        {t('clients.client1')}
                                    </h3>

                                </div>
                            </div>
                        </div>
                        {/* <div className="p-3 col-12 col-md-6 col-lg-3">
                            <div className="client-wrapper">
                                <div className="wrap-img">
                                    <img src={pnu} className="img-responsive clients-img" />
                                </div>
                                <div className="card-box">
                                    <h3 className="client-name mbr-fonts-style display-5">
                                        {t('clients.client2')}
                                    </h3>

                                </div>
                            </div>
                        </div> */}
                        <div className="p-3 col-12 col-md-6 col-lg-3">
                            <div className="client-wrapper">
                                <div className="wrap-img">
                                    <img src={rotana} className="img-responsive clients-img" />
                                </div>
                                <div className="card-box">
                                    <h3 className="client-name mbr-fonts-style display-5">
                                        {t('clients.client3')}
                                    </h3>

                                </div>
                            </div>
                        </div>
                        {/* <div className="p-3 col-12 col-md-6 col-lg-3">
                            <div className="client-wrapper">
                                <div className="wrap-img">
                                    <img src={gasco} className="img-responsive clients-img" />
                                </div>
                                <div className="card-box">
                                    <h3 className="client-name mbr-fonts-style display-5">
                                        {t('clients.client4')}
                                    </h3>

                                </div>
                            </div>
                        </div> */}
                        {/* <div className="p-3 col-12 col-md-6 col-lg-3">
                            <div className="client-wrapper">
                                <div className="wrap-img">
                                    <img src={gassolutions} className="img-responsive clients-img" />
                                </div>
                                <div className="card-box">
                                    <h3 className="client-name mbr-fonts-style display-5">
                                        {t('clients.client5')}
                                    </h3>

                                </div>
                            </div>
                        </div> */}
                        <div className="p-3 col-12 col-md-6 col-lg-3">
                            <div className="client-wrapper">
                                <div className="wrap-img">
                                    <img src={dawahi} className="img-responsive clients-img" />
                                </div>
                                <div className="card-box">
                                    <h3 className="client-name mbr-fonts-style display-5">
                                        {t('clients.client6')}
                                    </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client