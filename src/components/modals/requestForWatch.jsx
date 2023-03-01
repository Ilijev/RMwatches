import React from 'react';
import Swal from 'sweetalert2';

const AlertWithForm = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        company: '',
        region: '',
        address: '',
        postcode: '',
        telephone: '',
        email: '',
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
        console.log(formData);
    }

    function stepOne() {
        Swal.fire({
            title: 'Step 1 - Personal Information',
            showCancelButton: true,
            confirmButtonText: 'Next &rarr;',
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
                const telephone = Swal.getPopup().querySelector('#telephone').value;
                const email = Swal.getPopup().querySelector('#email').value;

                if (!firstName || !lastName || !telephone || !email) {
                    Swal.getPopup().querySelector('.needs-validation').classList.add('was-validated');
                    Swal.showValidationMessage(`Please fill in the required fields`);
                }

                // setFormData({
                //     firstName: firstName,
                //     lastName: lastName,
                //     company: 'asdadsadasd',
                //     telephone: telephone,
                //     email: email
                // });
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
            cancelButtonText: '&larr; Prev',
            focusConfirm: false,
            reverseButtons: true,
            html: `
                <form id="form" class="row py-1 m-auto needs-validation" style="width: 98%">
                    <div class="col-12">
                        <select class="form-select mb-3" id="region" name="region" required value="${formData.region}">
                            <option selected disabled value="">Please select a region</option>
                            ${regions.map(region => `<option value="${region}">${region}</option>`)}
                        </select>
                    </div>
                    <div class="col-12">
                        <input class="form-control mb-3" type="text" id="address" name="address" placeholder="Address" 
                        required value="${formData.address}" />
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="postcode" name="postcode" 
                        required placeholder="Postcode"/>
                    </div>
                    <div class="col-6">
                        <input class="form-control mb-3" type="text" id="place_town" name="place_town" 
                        required placeholder="Place/Town"/>                    
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
                // const form = document.getElementById('form');
                // const formData1 = new FormData(form);
                // setFormData({
                //     region: formData1.get('region'),
                //     address: formData1.get('address'),
                //     postcode: formData1.get('postcode'),
                //     place_town: formData1.get('place_town')
                // });
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
            html: `
                <form id="form" class="row py-1 m-auto" style="width: 98%">
                    <div class="col-12">
                        <textarea class="form-control mb-3" id="additional_info" name="additional_info">
                        </textarea>                    
                    </div>
                </form>
            `,
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
                className="btn-block col-6 mx-auto  btn bg-custom text-uppercase fs-5 fw-light bg-dark-custom text-white">
            Request information
        </button>
    );
}

export default AlertWithForm;