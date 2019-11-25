const validator = require('validator');


const isEmpty = (data) => {
    return (
        data === null ||
        data === undefined ||
        (typeof data === 'object' && Object.keys(data).length < 1) ||
        (typeof data === 'string' && data.trim().length < 1)
    )
}

const isObjectHeavy = (obj) => {

    // console.log("We got an object as", obj);


    for (let el of Object.values(obj)) {
        console.log('Elements are', el);
        if (!isEmpty(el)) return true;
    }
    return false;
}


const validateMemberData = (memberData) => {
    console.log("here is the result that if the object is heavy or not", isObjectHeavy(memberData[2]));

    if (isObjectHeavy(memberData[2])) {
        // console.log(Object.values(memberData[2]), 'are the values in the member data');
        const memberErrors = [{}, {}, {}];
        memberData.forEach((member, index) => {
            if (index <= 2) {

                //Name of member
                if (isEmpty(member.name)) {
                    memberErrors[index].name = 'Provide name of member!';
                } else if (member.name.length > 30) {
                    memberErrors[index].name = 'Name should be less than 30 characters long!'
                }

                //Email validation
                if (isEmpty(member.email)) {
                    memberErrors[index].email = 'Provide email of member!';
                } else if (!validator.isEmail(member.email)) {
                    memberErrors[index].email = 'Provide a valid email!'
                }

                //Phone no validation
                if (isEmpty(member.phone)) {
                    memberErrors[index].phone = 'Provide phone number of member!';
                } else if (member.phone.length > 14) {
                    memberErrors[index].phone = 'Phone no. should be less than 14 characters long!'
                }

                //Address validation
                if (member.address.length > 30) {
                    memberErrors[index].address = 'Address should be less than 30 characters long!'
                }

                //College validation
                if (member.college.length > 30) {
                    memberErrors[index].college = 'Address should be less than 30 characters long!'
                }

                //Size validation
                if (isEmpty(member.size)) {
                    memberErrors[index].size = 'Provide T-shirt size of member!';
                }


                //Photo validation
                const img = member.photo;
                const isPhotoValid =
                    img.type === 'image/jpeg' ||
                    img.type === 'image/jpg' ||
                    img.type === 'image/png'

                if (!member.photo || !member.photoLink) {
                    memberErrors[index].photo = 'Provide photo of member!';
                } else if (!isPhotoValid) {
                    memberErrors[index].photo = 'Photo format should be .png or .jpg or .jpeg!'
                } else if (img.size >= 800000) {
                    memberErrors[index].photo = "Size of photo should be less than 800KB!";
                }
            }
        });
        return {
            isMemberDataValid: Object.values(memberErrors[0]).length === 0 && Object.values(memberErrors[1]).length === 0,
            memberErrors
        }

    } else {
        const memberErrors = [{}, {}, {}];
        memberData.forEach((member, index) => {
            if (index <= 1) {

                //Name validation
                if (isEmpty(member.name)) {
                    memberErrors[index].name = 'Provide name of member!';
                } else if (member.name.length > 30) {
                    memberErrors[index].name = 'Name should be less than 30 characters long!'
                }

                //Email validation
                if (isEmpty(member.email)) {
                    memberErrors[index].email = 'Provide email of member!';
                } else if (!validator.isEmail(member.email)) {
                    memberErrors[index].email = 'Provide a valid email!'
                }

                //Phone no validation
                if (isEmpty(member.phone)) {
                    memberErrors[index].phone = 'Provide phone number of member!';
                } else if (member.phone.length > 14) {
                    memberErrors[index].phone = 'Phone no. should be less than 14 characters long!'
                }

                //Address validation
                if (member.address.length > 30) {
                    memberErrors[index].address = 'Address should be less than 30 characters long!'
                }

                //College validation
                if (member.college.length > 30) {
                    memberErrors[index].college = 'Address should be less than 30 characters long!'
                }

                //T-Shirt Size validation
                if (isEmpty(member.size)) {
                    memberErrors[index].size = 'Provide T-shirt size of member!';
                }

                //Photo validation
                const img = member.photo;
                const isPhotoValid =
                    img.type === 'image/jpeg' ||
                    img.type === 'image/jpg' ||
                    img.type === 'image/png'

                if (!member.photo || !member.photoLink) {
                    memberErrors[index].photo = 'Provide photo of member!';
                } else if (!isPhotoValid) {
                    memberErrors[index].photo = 'Photo format should be png or jpg or jpeg!'
                } else if (img.size >= 800000) {
                    memberErrors[index].photo = "Size of photo should be less than 800KB!";
                }
            }
        });
        return {
            isMemberDataValid: Object.values(memberErrors[0]).length === 0 && Object.values(memberErrors[1]).length === 0,
            memberErrors
        }
    }

}

const validateApplicationData = (applicationData) => {

    const errors = {};

    console.log("File size is given as", applicationData.pdf.size);

    //Theme validation
    if (isEmpty(applicationData.theme)) {
        errors.theme = 'Select one of the theme to continue!';
    }

    //Team name validation
    if (isEmpty(applicationData.teamName)) {
        errors.teamName = 'You must have team name!';
    } else if (applicationData.teamName.length > 30) {
        errors.teamName = 'Team name should be less than 30 characters long!'
    }

    //ideaName validation
    if (isEmpty(applicationData.ideaName)) {
        errors.ideaName = 'Please enter the title of your Idea!';
    } else if (applicationData.ideaName.length > 30) {
        errors.ideaName = 'Idea name should be less than 30 characters long!'
    }

    //githublink validation
    if (isEmpty(applicationData.github)) {
        errors.github = 'Please enter the github link of any one of the member!';
    } else if (applicationData.github.length > 50) {
        errors.github = 'Github link should be less than 50 characters long!'
    }

    //pdf validation
    if (!applicationData.pdf || !applicationData.pdfLink) {
        errors.pdf = 'You must submit the proposal of your project!'
    } else if (applicationData.pdf.type !== 'application/pdf') {
        errors.pdf = 'Proposal should be in pdf Format'
    } else if (applicationData.pdf.size >= 2000000) {
        errors.pdf = 'File size should be less than 2 MB'

    }
    return {
        isValid: isEmpty(errors),
        errors
    }

}

module.exports = {
    isEmpty,
    validateMemberData,
    validateApplicationData,
}