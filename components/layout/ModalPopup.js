import Link from "next/link"

// Formik & Yup
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

//THIRD-PARTY-LIBRARY
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from 'react-select'


import { ApiEndpoints } from "@/Constants/ApiEndpoints"
import ApiRequest from "@/Constants/ApiRequest";
import { useEffect } from "react";
import { errorAlert, successAlert } from "@/utils/alerts";

//  YUP
const basicInformationValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    language: Yup.string().required("Language is required"),
    nationality: Yup.string().required("Nationality is required"),
    services: Yup.array()
});

const customServicesStyles = {
    control: (provided) => ({
        ...provided,
        minHeight: '56px', // Adjust the minHeight to decrease the height
        width: "100%",
        border: "1px solid #e4e7ee"
    }),
    input: (provided) => ({
        ...provided,
        maxHeight: '52px', // Adjust the minHeight to decrease the height
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        minHeight: '56px', // Adjust the minHeight to decrease the height
    }),
    placeholder: (provided) => ({
        ...provided,
    })
}

const customStyles = {
    control: (provided) => ({
        ...provided,
        maxHeight: '56px', // Adjust the minHeight to decrease the height
        width: "100%",
        border: "1px solid #e4e7ee"
    }),
    input: (provided) => ({
        ...provided,
        maxHeight: '52px', // Adjust the minHeight to decrease the height
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        minHeight: '56px', // Adjust the minHeight to decrease the height
    }),
    placeholder: (provided) => ({
        ...provided,
        // paddingTop: "8px"
    })
};

export default function ModalPopup({ isContactPopup, handleContactPopup }) {

    // STATES
    const [submitting, setSubmitting] = useState(false);
    const [servicesOptions, setServicesOptions] = useState([]);
    const [countriesOptions, setCountriesOptions] = useState([]);
    const [languageOptions, setLanguageOptions] = useState([]);

    // Formik
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        language: "",
        services: [],
        phone_code: "",
        nationality: ""
    };

    const onSubmit = async (values) => {
        console.log("hi");
        setSubmitting(true);

        let phoneNumber = values.phoneNumber;
        if (values.phoneNumber.startsWith(values.phone_code)) {
            phoneNumber = phoneNumber.substring(values.phone_code.length);
        }

        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: phoneNumber,
            countryCode: values.phone_code,
            language: values.language,
            services: values.services,
            nationality: values.nationality
        };

        const res = await ApiRequest().request({
            method: ApiEndpoints.ADD_LEAD.method,
            url: ApiEndpoints.ADD_LEAD.url,
            data: data
        })
        console.log("res: ", res);

        if (!res.data.success) {
            errorAlert(response.data.message);
        } else {
            handleContactPopup()
            formik.resetForm()
            successAlert("Your query was sent successfully");
        }
        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues,
        validationSchema: basicInformationValidationSchema,
        onSubmit,
    });

    // FETCH SERVICES
    const fetchServices = async () => {
        const res = await ApiRequest().request({
            method: ApiEndpoints.GET_SERVICES_LIST.method,
            url: ApiEndpoints.GET_SERVICES_LIST.url
        })

        // SET SERVICES LIST
        if (res?.data?.success) {
            // formik.setFieldValue("services", res.data.data)
            setServicesOptions(res.data.data.map((option) => {
                return {
                    value: option?._id,
                    label: option?.name
                }
            }))
        } else {
            alert(res?.data?.message)
        }
    }

    const fetchCountries = async () => {
        const countries = await ApiRequest().request({
            method: ApiEndpoints.GET_COUNTRIES_LIST.method,
            url: ApiEndpoints.GET_COUNTRIES_LIST.url
        })

        // SET COUNTRIES LIST
        if (countries?.data?.success) {
            setCountriesOptions(countries.data.data.map((country) => {
                return {
                    value: country?._id,
                    label: country?.name
                }
            }))
        } else {
            alert(countries?.data?.message)
        }
    }

    const fetchLanguages = async () => {
        const languages = await ApiRequest().request({
            method: ApiEndpoints.GET_LANGUAGES_LIST.method,
            url: ApiEndpoints.GET_LANGUAGES_LIST.url
        })

        // SET COUNTRIES LIST
        if (languages?.data?.success) {
            setLanguageOptions(languages.data.data.map((country) => {
                return {
                    value: country?._id,
                    label: country?.name
                }
            }))
        } else {
            alert(languages?.data?.message)
        }
    }

    useEffect(() => {
        fetchServices()
        fetchCountries()
        fetchLanguages()
    }, [])

    return (
        <>
            <div className={`modal_popup one ${isContactPopup ? "contact-popup-visible" : ""}`}>
                <div className="modal-popup-inner">
                    <div className="close-modal" onClick={handleContactPopup}><i className="fa fa-times" /></div>
                    <div className="modal_box">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 about_company_inner">
                                <div className="abt_content">
                                    <div className="logo logo_dd">
                                        <img src="/assets/images/logo-default.png" alt="img" className="company_logo_modal" />
                                    </div>
                                    <div className="text">
                                        <p> The great explorer of the truth, the master-builder of human happiness no one
                                            rejects
                                            dislikes avoids pleasure itself because it is pleasure but because know who do
                                            not those
                                            how to pursue pleasures rationally encounter consequences that are extremely
                                            painful
                                            desires to obtain.</p>
                                        {/* <Link href="#">Read More</Link> */}
                                    </div>
                                    {/* <div className="post_contet_modal">
                                        <h2> Latest News</h2>
                                        <div className="post_enable">
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-9.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-8.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-7.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-6.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                            <div className="modal_post_grid">
                                                <Link href="/blog-single">
                                                    <img width={852} height={812} src="/assets/images/blog/blog-image-5.jpg" className="main_img wp-post-image" alt="img" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="copright">
                                        © {new Date().getFullYear()} DataDocx. All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 form_inner">
                                <div className="form_content">
                                    <form onSubmit={formik.handleSubmit}
                                        autoComplete="off" className="contact-form">
                                        <p className={`relative ${formik.errors.firstName && formik.touched.firstName && "mb-4"}`}>
                                            <label>First Name<br />
                                                <input type="text" name="firstName" size={40} aria-required="true" aria-invalid="false" placeholder="Enter First Name" value={formik.values.firstName} onChange={(e) => {
                                                    formik.handleChange(e)
                                                }} />
                                                <br />
                                                <i className="fa fa-user" /><br />
                                            </label>
                                            {formik.errors.firstName && formik.touched.firstName && (
                                                <span className="validation_error_dd">
                                                    {formik.errors.firstName}
                                                </span>
                                            )}
                                        </p>

                                        <p className={`relative ${formik.errors.lastName && formik.touched.lastName && "mb-4"}`}>
                                            <label>Last Name<br />
                                                <input type="text" name="lastName" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Last Name" value={formik.values.lastName} onChange={(e) => {
                                                    formik.handleChange(e)
                                                }} />
                                                <br />
                                                <i className="fa fa-user" /><br />
                                            </label>
                                            {formik.errors.lastName && formik.touched.lastName && (
                                                <span className="validation_error_dd">
                                                    {formik.errors.lastName}
                                                </span>
                                            )}
                                        </p>

                                        <p className={`relative ${formik.errors.email && formik.touched.email && "mb-4"}`}><label> Your email<br />
                                            <input type="email" name="email" size={40} aria-required="true" aria-invalid="false" placeholder="Enter Your Email" value={formik.values.email} onChange={(e) => {
                                                formik.handleChange(e)
                                            }} />
                                            <br />
                                            <i className="fa fa-envelope" /><br />
                                        </label>
                                            {formik.errors.email && formik.touched.email && (
                                                <span className="validation_error_dd">
                                                    {formik.errors.email}
                                                </span>
                                            )}
                                        </p>

                                        <p className={`relative ${formik.errors.phoneNumber && formik.touched.phoneNumber && "mb-4"}`}>
                                            <label> Phone Number<br />
                                                <PhoneInput
                                                    country={"us"}
                                                    inputClass={`phoneInput_dd`}
                                                    buttonClass="!h-[27px] phoneInputButton_dd"
                                                    value={formik.values.phoneNumber}
                                                    onChange={(phoneNumber, data) => {
                                                        console.log("ppp", phoneNumber, data)
                                                        formik.setFieldValue("phoneNumber", phoneNumber);
                                                        formik.setFieldValue("phone_code", data?.dialCode);
                                                    }}
                                                />
                                            </label>
                                            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                                <span className="validation_error_dd">
                                                    {formik.errors.phoneNumber}
                                                </span>
                                            )}
                                        </p>

                                        <p style={{ width: "100%" }}>
                                            <label style={{ width: "100%" }}>Services<br />
                                                <Select options={servicesOptions} styles={customServicesStyles} isMulti onChange={e => {
                                                    e = e.map(item => {
                                                        return item.value
                                                    })
                                                    formik.setFieldValue("services", e)
                                                }} />
                                            </label>
                                        </p>


                                        <div className={`d-flex justify-between`}>
                                            <p style={{ width: "100%" }} className={`relative ${formik.errors.nationality && formik.touched.nationality && "mb-4"}`}>
                                                <label style={{ width: "100%" }}>Nationality<br />
                                                    <Select options={countriesOptions} styles={customStyles} onChange={e => {
                                                        formik.setFieldValue("nationality", e.value)
                                                    }
                                                    } />
                                                </label>
                                                {formik.errors.nationality && formik.touched.nationality && (
                                                    <span className="validation_error_dd">
                                                        {formik.errors.nationality}
                                                    </span>
                                                )}
                                            </p>

                                            <p style={{ width: "100%", paddingLeft: "10px" }} className={`relative ${formik.errors.language && formik.touched.language && "mb-4"}`}>
                                                <label style={{ width: "100%" }}>Language<br />
                                                    <Select options={languageOptions} styles={customStyles} onChange={e => {
                                                        formik.setFieldValue("language", e.value)
                                                    }
                                                    } />
                                                </label>
                                                {formik.errors.language && formik.touched.language && (
                                                    <span className="validation_error_dd">
                                                        {formik.errors.language}
                                                    </span>
                                                )}
                                            </p>
                                        </div>

                                        <p>
                                            <button type="submit">
                                                {
                                                    submitting ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5" /><path fill="white" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate" /></path></svg> : <>Submit</>
                                                }
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
