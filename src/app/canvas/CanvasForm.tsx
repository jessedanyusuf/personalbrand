'use client';

import { useEffect } from 'react';
import { useCanvasTheme } from './CanvasWrapper';

export default function CanvasForm() {
    const { theme } = useCanvasTheme();
    const dark = theme === 'dark';
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const w = window as any;
            if (w.jQuery) {
                const $ = w.jQuery;
                w.fnames = [];
                w.ftypes = [];
                w.fnames[0] = 'EMAIL';
                w.ftypes[0] = 'email';
                w.fnames[1] = 'FNAME';
                w.ftypes[1] = 'text';
                w.fnames[2] = 'LNAME';
                w.ftypes[2] = 'text';
                w.$mcj = $.noConflict(true);
            }
        };

        return () => {
            script.remove();
        };
    }, []);

    return (
        <div id="mc_embed_shell">
            <link
                href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
                rel="stylesheet"
                type="text/css"
            />
            <style>{`
                #mc_embed_signup {
                    background: transparent !important;
                    clear: left;
                    font: 14px Helvetica, Arial, sans-serif;
                    width: 100%;
                    max-width: 600px;
                }
                #mc_embed_signup form {
                    padding: 0 !important;
                }
                #mc_embed_signup h2 {
                    color: ${dark ? '#fff' : '#1a1a1a'} !important;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                #mc_embed_signup .indicates-required {
                    color: ${dark ? 'rgba(255,255,255,0.4)' : '#888'} !important;
                }
                #mc_embed_signup label {
                    color: ${dark ? 'rgba(255,255,255,0.7)' : '#333'} !important;
                }
                #mc_embed_signup input.text,
                #mc_embed_signup input.email {
                    background: ${dark ? 'rgba(255,255,255,0.1)' : '#fff'} !important;
                    border: 1px solid ${dark ? 'rgba(255,255,255,0.2)' : '#d1c9be'} !important;
                    color: ${dark ? '#fff' : '#1a1a1a'} !important;
                    border-radius: 8px !important;
                }
                #mc_embed_signup input.text:focus,
                #mc_embed_signup input.email:focus {
                    border-color: ${dark ? 'rgba(255,255,255,0.5)' : '#555'} !important;
                    outline: none !important;
                }
                #mc_embed_signup input.text::placeholder,
                #mc_embed_signup input.email::placeholder {
                    color: #aaa !important;
                }
                #mc_embed_signup .button {
                    background-color: ${dark ? '#fff' : '#1a1a1a'} !important;
                    color: ${dark ? '#111' : '#f5f0eb'} !important;
                    border-radius: 9999px !important;
                    font-weight: 600 !important;
                    padding: 12px 32px !important;
                    height: auto !important;
                    font-size: 16px !important;
                    transition: background-color 0.2s !important;
                }
                #mc_embed_signup .button:hover {
                    background-color: ${dark ? '#e5e5e5' : '#333'} !important;
                }
                #mc_embed_signup .asterisk {
                    color: #999 !important;
                }
                #mc_embed_signup .mc-field-group {
                    padding-bottom: 12px !important;
                }
            `}</style>
            <div id="mc_embed_signup">
                <form
                    action="https://jessedanyusuf.us18.list-manage.com/subscribe/post?u=46cbeac3c2e1f28f2ff72865d&amp;id=8f4488fc9c&amp;f_id=00bab1e6f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                >
                    <div id="mc_embed_signup_scroll">
                        <h2>Register</h2>
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                                Email Address <span className="asterisk">*</span>
                            </label>
                            <input
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name</label>
                            <input
                                type="text"
                                name="FNAME"
                                className="text"
                                id="mce-FNAME"
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Last Name</label>
                            <input
                                type="text"
                                name="LNAME"
                                className="text"
                                id="mce-LNAME"
                            />
                        </div>
                        <div hidden>
                            <input type="hidden" name="tags" value="3062502,3062503" />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div
                                className="response"
                                id="mce-error-response"
                                style={{ display: 'none' }}
                            />
                            <div
                                className="response"
                                id="mce-success-response"
                                style={{ display: 'none' }}
                            />
                        </div>
                        <div
                            aria-hidden="true"
                            style={{ position: 'absolute', left: '-5000px' }}
                        >
                            <input
                                type="text"
                                name="b_46cbeac3c2e1f28f2ff72865d_8f4488fc9c"
                                tabIndex={-1}
                                defaultValue=""
                            />
                        </div>
                        <div className="clear">
                            <input
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                                value="Register"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
