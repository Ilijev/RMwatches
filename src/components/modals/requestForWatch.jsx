import React from 'react';
import Swal from 'sweetalert2';

const AlertWithForm = () => {
    const [formData] = React.useState({
        firstName: '',
        lastName: '',
        company: '',
        telephone: '',
        email: '',
        region: '',
        address: '',
        postcode: '',
        place_town: '',
        additional_info: ''
    });

    const regions = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia'];

    function handleSubmit() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            sendEmail();
        });
    }

    function sendEmail() {
        console.log("sendEmail()");
    }

    function stepOne() {
        Swal.fire({
            title: 'Step 1 - Personal Information',
            showCancelButton: true,
            confirmButtonText: 'Next &rarr;',
            confirmButtonColor:"RGB(35, 31, 32)",
            cancelButtonText: 'Cancel',
            focusConfirm: false,
            reverseButtons: true,
            html: `
                <form id="form" class="row py-1 m-auto needs-validation" style="width: 98%">
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="firstName" 
                        required name="firstName" placeholder="First Name" value="${formData.firstName}" />
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="lastName" name="lastName" placeholder="Last Name" 
                        required value="${formData.lastName}" />
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3 " type="text" id="company" name="company" placeholder="Company (optional)" 
                        formnovalidate value="${formData.company}" />
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="telephone" name="telephone" placeholder="Telephone" 
                        required value="${formData.telephone}" />
                    </div>
                    <div class="col-12">
                        <input class="form-control mb-3" type="email" id="email" name="email" placeholder="Email" 
                        required value="${formData.email}" />
                    </div>
                </form>
            `,
            preConfirm: () => {
                const firstName = Swal.getPopup().querySelector('#firstName').value;
                const lastName = Swal.getPopup().querySelector('#lastName').value;
                const company = Swal.getPopup().querySelector('#company').value;
                const telephone = Swal.getPopup().querySelector('#telephone').value;
                const email = Swal.getPopup().querySelector('#email').value;

                if (!firstName || !lastName || !telephone || !email) {
                    Swal.getPopup().querySelector('.needs-validation').classList.add('was-validated');
                    Swal.showValidationMessage(`Please fill in the required fields`);
                }

                Object.assign(formData, {
                    firstName: firstName,
                    lastName: lastName,
                    company: company,
                    telephone: telephone,
                    email: email
                });
            },
            willOpen: () => {
                document.getElementById('firstName').focus();
            }
        }).then(result => {
            if (result.isConfirmed) {
                stepTwo();
            }
        })
    }

    function stepTwo() {
        Swal.fire({
            title: 'Step 2 - Contact Information',
            showCancelButton: true,
            confirmButtonText: 'Next &rarr;',
            confirmButtonColor:"RGB(35, 31, 32)",
            cancelButtonText: '&larr; Prev',
            focusConfirm: false,
            reverseButtons: true,
            html: `
                <form id="form" class="row py-1 m-auto needs-validation" style="width: 98%">
                    <div class="col-12">
                        <select class="form-select mb-3" id="region" name="region" required>
                            <option selected disabled value="">Please select a region</option>
                            ${regions.map(region => `<option ${region === formData.region ? 'selected' : ''} value="${region}">${region}</option>`)}
                        </select>
                    </div>
                    <div class="col-12">
                        <input class="form-control mb-3" type="text" id="address" name="address" placeholder="Address" 
                        required value="${formData.address}" />
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="postcode" name="postcode" 
                        required placeholder="Postcode" value="${formData.postcode}"/>
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="place_town" name="place_town" 
                        required placeholder="Place/Town" value="${formData.place_town}"/>                    
                    </div>
                </form>
            `,
            preConfirm: () => {
                const region = Swal.getPopup().querySelector('#region').value;
                const address = Swal.getPopup().querySelector('#address').value;
                const postcode = Swal.getPopup().querySelector('#postcode').value;
                const place_town = Swal.getPopup().querySelector('#place_town').value;

                if (!region || !address || !postcode || !place_town) {
                    Swal.getPopup().querySelector('.needs-validation').classList.add('was-validated');
                    Swal.showValidationMessage(`Please fill in the required fields`);
                }

                Object.assign(formData, {
                    region: region,
                    address: address,
                    postcode: postcode,
                    place_town: place_town
                });
            },
        }).then(result => {
            if (result.isConfirmed) {
                stepThree();
            } else if (result.isDismissed && result.dismiss === "cancel") {
                stepOne();
            }
        })
    }

    function stepThree() {
        Swal.fire({
            title: 'Step 3 - Additional Information',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: '&larr; Prev',
            focusConfirm: false,
            reverseButtons: true,
            confirmButtonColor:"RGB(35, 31, 32)",

            html: `
                <form id="form" class="row py-1 m-auto" style="width: 98%">
                    <div class="col-12">
                        <textarea class="form-control mb-3" id="additional_info" name="additional_info">
                        </textarea>                    
                    </div>
                </form>
            `,
            preConfirm: () => {
                const additionalInfo = Swal.getPopup().querySelector('#additional_info').value;
                Object.assign(formData, {
                    additional_info: additionalInfo,
                });
            },
        }).then(result => {
            if (result.isConfirmed) {
                handleSubmit();
            } else if (result.isDismissed && result.dismiss === "cancel") {
                stepTwo();
            }
        })
    }

    return (
        <button onClick={stepOne}
                className="btn-block col-6 mx-auto btn bg-custom text-uppercase fs-5 fw-light bg-dark-custom text-white">
            Buy Watch
        </button>
    );
}

export default AlertWithForm;