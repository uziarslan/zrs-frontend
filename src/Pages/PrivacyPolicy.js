import React, { useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function PrivacyPolicy() {
    const { setIsLoading } = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading])


    return (
        <div style={{ padding: "20px", margin: "20px 0px" }} className="px-5 my-5">
            <span style={{
                display: "block",
                margin: "0 auto 3.125rem",
                width: "11.125rem",
                height: "2.375rem",
                background: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K) center no-repeat"
            }}></span>
            <div
                className="terms-condition-container"
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px #0001",
                    padding: "28px 16px"
                }}
            >
                <h1
                    className="mb-4"
                    style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        marginBottom: "1.2rem",
                        color: "#222"
                    }}
                >
                    Privacy Policy
                </h1>
                <p style={{ fontSize: "0.97rem", marginBottom: "0.5rem", color: "#222" }}>
                    <strong>Effective Date:</strong> 8 July 2025<br />
                    <strong>Website:</strong>{" "}
                    <a href="https://zrscarstrading.com" target="_blank" rel="noopener noreferrer" style={{ color: "#295860" }}>
                        https://zrscarstrading.com
                    </a>
                    <br />
                    <strong>Contact Number:</strong>{" "}
                    <a href="tel:+971522332315" style={{ color: "#295860" }}>+971 52 233 2315</a>
                    <br />
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@zrscarstrading.com" style={{ color: "#295860" }}>info@zrscarstrading.com</a>
                </p>
                <p style={{ margin: "1.2rem 0", fontSize: "0.97rem", color: "#222" }}>
                    At <strong>ZRS Cars Trading</strong>, your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or interact with our website <a href="https://zrscarstrading.com" target="_blank" rel="noopener noreferrer" style={{ color: "#295860" }}>https://zrscarstrading.com</a>. By using our website, you agree to the practices described in this policy.
                </p>
                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>1. Information We Collect</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>We may collect the following types of information:</p>
                <ul style={{ fontSize: "0.97rem", marginBottom: "0.7rem", color: "#222" }}>
                    <li>
                        <strong>Personal Information</strong>
                        <ul>
                            <li>Name, contact number, and email address</li>
                            <li>Delivery or billing address (if applicable)</li>
                            <li>Vehicle preferences and inquiry content</li>
                            <li>Any other information you voluntarily provide</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Non-Personal Information</strong>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device type</li>
                            <li>Referring website</li>
                            <li>Time spent on pages</li>
                            <li>Pages viewed</li>
                        </ul>
                    </li>
                </ul>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>2. How We Use Your Information</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>We use your information to:</p>
                <ul style={{ fontSize: "0.97rem", marginBottom: "0.7rem", color: "#222" }}>
                    <li>Respond to your inquiries and requests</li>
                    <li>Improve website content and performance</li>
                    <li>Send updates, offers, and promotions (only if you opt in)</li>
                    <li>Provide a customized browsing experience</li>
                    <li>Enhance marketing and advertising efforts</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>3. Use of Google Services</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>We use several Google tools to help improve your experience and measure website performance:</p>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 600, marginTop: "1rem", color: "#222" }}>Google Analytics</h3>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    We use Google Analytics to collect anonymous data about how visitors interact with our website. This helps us understand user behavior and improve functionality.
                </p>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>Google may collect information such as:</p>
                <ul style={{ fontSize: "0.97rem", marginBottom: "0.7rem", color: "#222" }}>
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Pages visited</li>
                    <li>Time on site</li>
                    <li>Interaction with website elements</li>
                </ul>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    To learn how Google uses your data, visit:<br />
                    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: "#295860" }}>
                        https://policies.google.com/technologies/partner-sites
                    </a>
                </p>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    You can opt out of Google Analytics by using the browser add-on:<br />
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#295860" }}>
                        https://tools.google.com/dlpage/gaoptout
                    </a>
                </p>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 600, marginTop: "1rem", color: "#222" }}>Google Ads</h3>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    We may use Google Ads and remarketing services to show ads to users who have previously visited our site. These ads may appear on Google search results or across the Google Display Network. Google uses cookies to serve these ads based on your past visits.
                </p>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    You can control ad personalization at:<br />
                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#295860" }}>
                        https://adssettings.google.com
                    </a>
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>4. Cookies and Tracking Technologies</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>We use cookies to:</p>
                <ul style={{ fontSize: "0.97rem", marginBottom: "0.7rem", color: "#222" }}>
                    <li>Remember user preferences</li>
                    <li>Track visitor behavior for analytics and ad targeting</li>
                    <li>Improve website loading and usability</li>
                </ul>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    By using our site, you consent to our use of cookies. You may disable cookies in your browser settings.
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>5. Information Sharing</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    We do not sell, trade, or rent your personal data. We may share information:
                </p>
                <ul style={{ fontSize: "0.97rem", marginBottom: "0.7rem", color: "#222" }}>
                    <li>With trusted third-party service providers who assist in website operations</li>
                    <li>To comply with legal requirements</li>
                    <li>In case of a company merger, acquisition, or asset sale</li>
                </ul>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    All third parties are required to maintain the confidentiality and security of your data.
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>6. Data Security</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    We use appropriate security measures to protect your information. However, no method of online transmission or storage is 100% secure. We cannot guarantee absolute protection.
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>7. Your Rights</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    You have the right to:
                </p>
                <ul style={{ fontSize: "0.97rem", marginBottom: "0.7rem", color: "#222" }}>
                    <li>Access or update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                </ul>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    To exercise any of these rights, please email <a href="mailto:info@zrscarstrading.com" style={{ color: "#295860" }}>info@zrscarstrading.com</a>.
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>8. Third-Party Websites</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    Our website may link to other websites. We are not responsible for their privacy policies or practices.
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>9. Policy Updates</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    We may update this Privacy Policy periodically. The updated version will be posted on this page with a new “Effective Date.”
                </p>

                <hr style={{ margin: "1.5rem 0", borderColor: "#eee" }} />

                <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginTop: "1.5rem", color: "#222" }}>10. Contact Us</h2>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    For any questions or concerns about this policy or your data:
                </p>
                <p style={{ fontSize: "0.97rem", color: "#222" }}>
                    <strong>ZRS Cars Trading</strong><br />
                    <span role="img" aria-label="phone">📞</span>{" "}
                    <a href="tel:+971522332315" style={{ color: "#295860" }}>+971 52 233 2315</a>
                    <br />
                    <span role="img" aria-label="email">📧</span>{" "}
                    <a href="mailto:info@zrscarstrading.com" style={{ color: "#295860" }}>info@zrscarstrading.com</a>
                </p>
            </div>
        </div>
    )
}