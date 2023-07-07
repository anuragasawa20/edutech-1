import React from 'react';
import '../../styles/HomePartOne.css';

const HomePartOne = ({ linkUrl, imageUrl, altText }) => {
    return (
        <>
            <section>
                <div className="auto-log0-continer"
                    style={{
                        padding: "5px 0",
                    }}
                >
                    <div className="container"
                        style={{
                            padding: "0px 10px"
                        }}
                    >
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <table border="1" cellSpacing="0" cellPadding="0" id="customers"
                                    style={{
                                        margin: "15px auto"
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" style={{
                                                fontSize: "17px",
                                                paddingTop: "8px",
                                                paddingBottom: "8px",
                                                textAlign: "center",
                                                backgroundColor: "#ffe8ba",
                                                color: "#a00a57"
                                            }}
                                            >
                                                <strong style={{
                                                    color: "#064163"
                                                }}
                                                >
                                                    Result Declared
                                                </strong></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <strong>Class XI &amp; XII Pass <a href="/login" target="_blank"
                                                    style={{
                                                        color: "#f00",
                                                        fontSize: "15px"
                                                    }}
                                                >
                                                    Click here...</a> </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="auto-log0-continer">
                <div className="jee2021-jee-advanced fiitjee_eschool_img" style={{ textAlign: "center", margin: "0 auto" }}>
                    <a href={linkUrl} target="_blank">

                        {/* add {imageUrl} here */}
                        <img src="https://fiitjee-eschool.com/img/fiitjee-eSchool-banner.jpg" style={{ width: "100%" }} alt={altText} />
                    </a>
                </div>
            </div>

        </>
    )
}

export default HomePartOne;
