import React from 'react';
import '../../styles/HomePartOne.css';

const HomePartOne = () => {
    return (
        <>
            <section>
                <div class="auto-log0-continer"
                    style={{
                        padding: "5px 0",
                    }}
                >
                    <div class="container"
                        style={{
                            padding: "0px 10px"
                        }}
                    >
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <table border="1" cellspacing="0" cellpadding="0" id="customers"
                                    style={{
                                        margin: "15px auto"
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td colspan="2" style={{
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
                                            <td colspan="2">
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
        </>
    )
}

export default HomePartOne;
